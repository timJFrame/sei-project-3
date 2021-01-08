import mongoose from 'mongoose'
import faker from 'faker'
import connectToDatabase from '../lib/connectToDB.js'
//import User from '../models/user.js'


async function seedDatabase() {
  try {
    await connectToDatabase()

    console.log('🤖 Database Connected')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database dropped')

    const users = [] // ! an array to push my 100 fake users into

    for (let index = 0; index < 100; index++) { // ! looping to created 300 users
      const name = faker.internet.userName() // ! generating a fake username
      const firstName = faker.name.firstName() // ! A fake first name
      const lastName = faker.name.lastName() // ! A fake last name
      const email = `${firstName}${lastName}@email.com` // ! concatening them together to make the email
      const profileImage = faker.image.avatar() // ! and a fake profile image
      users.push({
        username,
        firstName,
        lastName,
        email,
        profileImage,
        password: 'pass', // ! setting all the passwords the same
        passwordConfirmation: 'pass',
      })
    }

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