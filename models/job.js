import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'


const jobBidsSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'Bidder', required: true },
}, {
  timestamps: true,
})

const jobCommentsSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  isAuctioneer: { type: mongoose.Schema.ObjectId, ref: 'Auctioneer', default: null },
  isBidder: { type: mongoose.Schema.ObjectId, ref: 'Bidder', default: null },
}, {
  timestamps: true,
})

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  jobDescription: { type: String, required: true, maxlength: 300 },
  jobDeadline: { type: String, required: true },
  jobPhoto: { type: String, required: true },
  jobCategory: { type: String, required: true },
  jobFee: { type: Number, required: true, min: 1 },
  jobIsLive: { type: Boolean, required: true },
  jobOwner: { type: mongoose.Schema.ObjectId, ref: 'Auctioneer', required: true },
  jobBids: [jobBidsSchema],
  jobComments: [jobCommentsSchema],
})

jobSchema.plugin(uniqueValidator)

export default mongoose.model('Job', jobSchema)