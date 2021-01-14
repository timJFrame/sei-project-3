import React from 'react'
import { getAllUsers } from '../../lib/api'

function UserIndex() {
  const [users, setUsers] = React.useState(null)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllUsers()
        setUsers(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <div className="container-general">
      <h1>AUCTIONEERS:</h1>
      <br />
      {users ?
        users.map(user => (
          user.isAuctioneer && 
          <h1 key={user._id} { ...user }>{user.name} </h1>
          // <UserCard key={user._id}  {...user} />
        ))
        :
        <h2>Loading Users</h2>
      }
      <br />
      <h1>BIDDERS:</h1>
      <br />
      {users ?
        users.map(user => (
          !user.isAuctioneer && 
          <h1 key={user._id} { ...user }>{user.name}</h1>
          // <UserCard key={user._id}  {...user} />
        ))
        :
        <h2>Loading Users</h2>
      }

    </div>
  )
}

export default UserIndex