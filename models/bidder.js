import mongoose from 'mongoose'

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

export default mongoose.model('Bidder', bidderSchema)


// const bidderSchema = new mongoose.Schema({
//   user: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }],
//   bidderCategories: [{ type: String, required: true }],
//   bidderIsAvailable: { type: Boolean, required: true },
// })