import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import uniqueValidator from 'mongoose-unique-validator'

const bidderSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String, required: true },
  photo: { type: String, required: true },
  city: { type: String },
  bidderCategories: [{ type: String, required: true }],
  bidderIsAvailable: { type: Boolean, required: true },
})

bidderSchema.set('toJSON', { // this method makes sure the passwords are never sent in the responses, when user objects are converted to JSON
  virtuals: true,
  transform(_doc, json) {
    delete json.password
    delete json.__v
    return json
  },
})

// Virtual setter for passwordConfirmation field not stored in db
bidderSchema.virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

// PREVALIDATION: only check this if it is the first time user is created or if the password has been changed
bidderSchema.pre('validate', function(next) {
  if (this.isModified('password') && this.password !== this._passwordConfirmation) {
    this.invalidate('passwordConfirmation', 'does not match')
  }
  // if they match, next() so mongoose can run own validation
  next()
})

// PRESAVE: Replace password with encrypted hash before saving
bidderSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  }
  next()
})

// Check password against encrypted password to see if they match
bidderSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

bidderSchema.plugin(uniqueValidator)

export default mongoose.model('Bidder', bidderSchema)
