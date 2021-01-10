import mongoose from 'mongoose'

const auctioneerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String, required: true },
  photo: { type: String, required: true },
  city: { type: String },
})

auctioneerSchema.set('toJSON', { // this method makes sure the passwords are never sent in the responses, when user objects are converted to JSON
  virtuals: true,
  transform(_doc, json) {
    delete json.password
    delete json.__v
    return json
  },
})

export default mongoose.model('Auctioneer', auctioneerSchema)

// const auctioneerSchema = new mongoose.Schema({
//   user: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }],
// })

// console.log(auctioneerSchema)

// auctioneerSchema.virtual('jobsCreated', {
//   ref: 'Job',
//   localField: '_id',
//   foreignField: 'jobOwner'
// })

// export default mongoose.model('Auctioneer', auctioneerSchema)

// const auctioneerSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
// })

// export default mongoose.model('Auctioneer', auctioneerSchema)