import mongoose from 'mongoose'

const bidderSchema = new mongoose.Schema({
  bidderName: { type: String, required: true, unique: true },
  bidderEmail: { type: String, required: true, unique: true },
  bidderPassword: { type: String, required: true },
  bidderBio: { type: String, required: true },
  bidderPhoto: { type: String, required: true },
  bidderCity: { type: String },
  bidderCategories: { type: String, required: true },
  bidderIsAvailable: { type: Boolean, required: true },
})

// bidderSchema.virtual('passwordConfirmation')
//   .set(function(passwordConfirmation) {
//     this._passwordConfirmation = passwordConfirmation
//   })

export default mongoose.model('Bidder', bidderSchema)