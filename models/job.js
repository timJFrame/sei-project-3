import mongoose from 'mongoose'

// const jobBidsSchema = new mongoose.Schema({
//   text: { type: String, required: true, maxlength: 300 },
//   owner: { type: mongoose.Schema.ObjectId, ref: 'Bidder', required: true },
// }, {
//   timestamps: true,
// })

// const jobCommentsSchema = new mongoose.Schema({
//   text: { type: String, required: true, maxlength: 300 },
//   rating: { type: Number, required: true, min: 1, max: 5 },
//   owner: { type: mongoose.Schema.ObjectId, ref: 'Auctioneer', required: true },
// }, {
//   timestamps: true,
// })

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true, unique: true },
  jobDescription: { type: String, required: true, maxlength: 300 },
  jobDeadline: { type: String, required: true },
  jobPhoto: { type: String, required: true },
  jobCategories: { type: String, required: true },
  jobFee: { type: Number, required: true, min: 1 },
  jobIsLive: { type: Boolean, required: true },
  // jobOwner: { type: mongoose.Schema.ObjectId, ref: 'Auctioneer', required: true },
  // jobBids: [jobBidsSchema],
  // jobComments: [jobCommentsSchema],
})

export default mongoose.model('Job', jobSchema)