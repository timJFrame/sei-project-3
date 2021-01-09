import mongoose from 'mongoose'

const auctioneerSchema = new mongoose.Schema({
  user: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }],
})

console.log(auctioneerSchema)

auctioneerSchema.virtual('jobsCreated', {
  ref: 'Job',
  localField: '_id',
  foreignField: 'jobOwner'
})

export default mongoose.model('Auctioneer', auctioneerSchema)