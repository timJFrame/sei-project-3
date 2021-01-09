import mongoose from 'mongoose'

const auctioneerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String, required: true },
  photo: { type: String, required: true },
  city: { type: String },
})

export default mongoose.model('Auctioneer', auctioneerSchema)

// const auctioneerSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
// })

// export default mongoose.model('Auctioneer', auctioneerSchema)