import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import uniqueValidator from 'mongoose-unique-validator'

const favouritedBySchema = new mongoose.Schema({
  favourited: { type: Boolean },
  favUser: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true  }],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true  },
}, {
  timestamps: true,
})

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, maxlength: 40 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String, required: true },
  photo: { type: String, required: true },
  city: { type: String },
  isAuctioneer: { type: Boolean, default: false }, // * default to false
  bidderCategories: [{ type: String }], 
  bidderIsAvailable: { type: Boolean, default: false }, // * default to false
  favouritedBy: [favouritedBySchema], // Embedded relationship
})

// Go through all the jobs and find the ones where owner matches local _id field
userSchema.virtual('createdJobs', {
  ref: 'Job',
  localField: '_id',
  foreignField: 'jobOwner',
})

userSchema.virtual('favouriteUsers', {
  ref: 'User',
  localField: '_id',
  foreignField: 'favouritedBy.owner',
})

userSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json) {
    delete json.password
    delete json.__v
    return json
  },
})

// Virtual setter for passwordConfirmation field not stored in db
userSchema.virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

// PREVALIDATION: only check this if it is the first time user is created or if the password has been changed
userSchema.pre('validate', function(next) {
  if (this.isModified('password') && this.password !== this._passwordConfirmation) {
    this.invalidate('passwordConfirmation', 'does not match')
  }

  // If bidder is not an auctioneer and nothing has been added to the categories
  if (!this.isAuctioneer && !this.bidderCategories.length) { 
    // then invalidate with this error message
    this.invalidate('bidderCategories', 'must contain at least 1 category') 
  }
  next()
})

// PRESAVE: Replace password with encrypted hash before saving
userSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  }
  next()
})

// Check password against encrypted password to see if they match
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.plugin(uniqueValidator)

export default mongoose.model('User', userSchema)