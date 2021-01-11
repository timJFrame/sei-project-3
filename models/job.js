import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

// Create COMMENTS Schema
const jobCommentsSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

// Create BIDS Schema
const jobBidsSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  status: { type: String, default: 'pending' },
  fee: { type: Number, required: true, min: 1 },
  photo: { type: String },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', default: null }
}, {
  timestamps: true,
})

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  jobDescription: { type: String, required: true },
  jobDeadline: { type: String, required: true },
  jobPhoto: { type: String, required: true },
  jobCategory: { type: String, required: true },
  jobFee: { type: Number, required: true, min: 1 },
  jobIsLive: { type: Boolean, required: true },
  jobOwner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  jobBids: [jobBidsSchema],
  jobComments: [jobCommentsSchema],
})

jobSchema.set('toJSON', { virtuals: true })

jobSchema.plugin(uniqueValidator)

export default mongoose.model('Job', jobSchema)