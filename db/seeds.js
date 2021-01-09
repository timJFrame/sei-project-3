import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDB.js'
import auctioneersSeed from './data/auctioneersSeed.js'
import biddersSeed from './data/biddersSeed.js'
import Auctioneer from '../models/auctioneer.js'
import Bidder from '../models/bidder.js'


async function seedDatabase() {
  try {
    await connectToDatabase()

    console.log('🤖 Database Connected')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database dropped')

    const auctioneers = auctioneersSeed()

    const createdAuctioneers = await Auctioneer.create(auctioneers) // ! then pass that users array

    console.log(`😎 Created ${createdAuctioneers.length} Auctioneers`)

    const bidders = biddersSeed()

    const createdBidders = await Bidder.create(bidders) // ! then pass that users array

    console.log(`😎 Created ${createdBidders.length} Bidders`)

    await mongoose.connection.close()

    console.log('🤖 Goodbye')

  } catch (err) {
    console.log('😞 Something went wrong')
    console.log(err)

    await mongoose.connection.close()
    console.log('👋🏼 Goodbye')
  }
}

seedDatabase()