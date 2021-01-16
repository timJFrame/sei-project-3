import React from 'react'
import { getAllUsers } from '../../lib/api'
import UserCard from '../users/UserCard'

function UserIndex() {
  const [users, setUsers] = React.useState(null)

  const bidders = !users ? null : users.filter(user => !user.isAuctioneer)
  const auctioneers = !users ? null : users.filter(user => user.isAuctioneer)


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

  const refreshData = async () => {
    try {
      const { data } = await getAllUsers()
      setUsers(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container-general">

      <div className="container-general">
        <h1>BIDDERS:</h1>
        <div className="container-general">
          {bidders ?
            bidders.map(user => (
              <div key={user._id}>
                <UserCard key={user._id}  {...user} refreshData={refreshData} />
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
          {auctioneers ?
            auctioneers.map(user => (
              <div key={user._id} >
                <UserCard key={user._id}  {...user} refreshData={refreshData} />
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