import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDB.js'
//import User from '../models/user.js'


async function seedDatabase() {
  try {
    await connectToDatabase()

    console.log('🤖 Database Connected')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database dropped')



    const createdUsers = await User.create(users) // ! then pass that users array

    console.log(`ðŸ¤– Created ${createdUsers.length}`)

    await mongoose.connection.close()

    console.log('ðŸ¤– Goodbye')

  } catch (err) {
    console.log('ðŸ¤– Something went wrong')
    console.log(err)

    await mongoose.connection.close()
    console.log('ðŸ¤– Goodbye')
  }
}

seedDatabase()