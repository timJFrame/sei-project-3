import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'


const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String, required: true },
  photo: { type: String, required: true },
  city: { type: String },
})

userSchema.virtual('userTemplate', {
  ref: 'User',
  localField: '_id',
  foreignField: 'user'
})

userSchema.set('toJSON', { // this method makes sure the passwords are never sent in the responses, when user objects are converted to JSON
  virtuals: true,
  transform(_doc, json) {
    delete json.password
    delete json.__v
    return json
  },
})

userSchema // creating a virtual field on the schema - this is a field that will only exist when creating a new user and will not be stored in the database
  .virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function(next) { // custom checks to run before mongoose's own validation
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'does not match') // if password and confirmation don't match, we invalidate at this point, the whole process stops and no user is created
    }
    next() // if all is good, we will allow it through to next step which is validation:
  })

// validation
userSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync()) // once the password is checked we want to hash the password (encrypt it) and the store it
  }
  next()
})

// save
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}
userSchema.plugin(uniqueValidator)

export default mongoose.model('User', userSchema)