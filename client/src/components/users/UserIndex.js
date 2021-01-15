import React from 'react'
import { getAllUsers } from '../../lib/api'
import UserCard from '../users/UserCard'

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

  console.log('users', users)

  return (
    <div className="container-general">

      <div className="container-general">
        <h1>BIDDERS:</h1>
        <div className="container-general">
          {users ?
            users.map(user => (
              !user.isAuctioneer && 
          <div key={user._id} { ...user }>
            <UserCard key={user._id}  {...user} />
          </div>
            ))
            :
            <h2>Loading Users</h2>
          }        
        </div>
      </div>

      <div className="container-general">
        <h1>AUCTIONEERS:</h1>
        <div className="container-general">
          {users ?
            users.map(user => (
              user.isAuctioneer && 
          <div key={user._id} { ...user } >
            <UserCard key={user._id}  {...user} />
          </div>
            ))
            :
            <h2>Loading Users</h2>
          }
        </div>
      </div>
    </div>
  )
}

export default UserIndex