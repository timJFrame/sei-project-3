import mongoose from 'mongoose'

const auctioneerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
})

// auctioneerSchema.virtual('passwordConfirmation')
//   .set(function(passwordConfirmation) {
//     this._passwordConfirmation = passwordConfirmation
//   })

export default mongoose.model('Auctioneer', auctioneerSchema)