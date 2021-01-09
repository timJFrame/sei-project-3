import mongoose from 'mongoose'

const bidderSchema = new mongoose.Schema({
  user: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }],
  bidderCategories: [{ type: String, required: true }],
  bidderIsAvailable: { type: Boolean, required: true },
})

export default mongoose.model('Bidder', bidderSchema)