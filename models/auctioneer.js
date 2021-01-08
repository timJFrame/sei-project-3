import mongoose from 'mongoose'

const auctioneerSchema = new mongoose.Schema({
  auctioneerName: { type: String, required: true, unique: true },
  auctioneerEmail: { type: String, required: true, unique: true },
  auctioneerPassword: { type: String, required: true },
  auctioneerBio: { type: String, required: true },
  auctioneerPhoto: { type: String, required: true },
  auctioneerCity: { type: String }
})

// auctioneerSchema.virtual('passwordConfirmation')
//   .set(function(passwordConfirmation) {
//     this._passwordConfirmation = passwordConfirmation
//   })

export default mongoose.model('Auctioneer', auctioneerSchema)