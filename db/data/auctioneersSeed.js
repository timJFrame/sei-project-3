import faker from 'faker'

function auctioneersSeed() {

  const auctioneerArray = [] // ! an array to push my 100 fake users into

  for (let index = 0; index < 5; index++) { // ! looping to created 100 users

    const name = faker.company.companyName() // ! A fake company Name
    const email = faker.internet.email() // ! concatening them together to make the email
    const photo = faker.image.business() // ! and a fake profile image
    const bio = faker.company.catchPhrase() //! fake bio
    const city = faker.address.city() //! fake city
    auctioneerArray.push({
      name,
      email,
      photo,
      bio,
      city,
      password: 'pass', // ! setting all the passwords the same
    })
  }
  console.log(auctioneerArray)
  return (
    auctioneerArray
  )
}

export default auctioneersSeed