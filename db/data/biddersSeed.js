import faker from 'faker'
import { categories } from '../../util/categories.js'

function biddersSeed() {

  const bidderArray = [] // ! an array to push my 100 fake users into

  for (let index = 0; index < 60; index++) { // ! looping to created 100 users
    const name = faker.company.companyName() // ! A fake company Name
    const email = `${name}@email.com` // ! concatening them together to make the email
    const photo = faker.image.business() // ! and a fake profile image
    const bio = faker.company.catchPhrase() //! fake bio
    const city = faker.address.city() //! fake city
    const bidderCategories = categories[Math.floor(Math.random() * categories.length)]
    const bidderIsAvailable = faker.random.boolean() //!random boolean


    bidderArray.push({
      name,
      email,
      photo,
      bio,
      city,
      password: 'pass', // ! setting all the passwords the same
      passwordConfirmation: 'pass',
      bidderCategories,
      bidderIsAvailable
    })
  }
  return (
    bidderArray
  )
}

export default biddersSeed