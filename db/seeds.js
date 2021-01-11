import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDB.js'
import auctioneersSeed from './data/auctioneersSeed.js'
import biddersSeed from './data/biddersSeed.js'
import Job from '../models/job.js'
import jobsData from '../db/data/jobsSeed.js'
import User from '../models/user.js'

async function seedDatabase() {
  try {

    // Connect to db
    await connectToDatabase()
    console.log('🤖 Database Connected')
    
    await mongoose.connection.db.dropDatabase()
    console.log('🤖 Database dropped')

    // CREATING AUCTIONEERS DB
    const auctioneers = auctioneersSeed()
    const createdAuctioneers = await User.create(auctioneers) // ! then pass that users array
    console.log(`😎 Created ${createdAuctioneers.length} Auctioneers`)

    // CREATING BIDDERS DB
    const bidders = biddersSeed()
    console.log('bidders: ', bidders)
    const createdBidders = await User.create(bidders) // ! then pass that users array
    console.log(`😎 Created ${createdBidders.length} Bidders`)
    console.log(createdBidders)

    // MAP THROUGH JOBS DB, FOR EACH JOB ASSIGN A KEY NAMED JOB OWNER REFERENCING AUCTIONEERS DB
    const jobDataWithOwners = jobsData.map(job => {
      // Creating a random index number var
      const randomIndexNumber = Math.round(Math.random() * (createdAuctioneers.length - 1))
      // Assign each job to a random auctioneer
      job.jobOwner = createdAuctioneers[randomIndexNumber]._id
      return job
    })

    // CREATE JOBS
    const jobs = await Job.create(jobDataWithOwners)
    console.log(`POW! Fresh Database containing ${jobs.length} jobs`)
  
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