import mongoose from 'mongoose'

const auctioneerSchema = new mongoose.Schema({
  user: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }],
})

export default mongoose.model('Auctioneer', auctioneerSchema)