import React from 'react'
import { getSingleUser } from '../../lib/api'

function UserShow(){
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try { 
        const { data } = await getSingleUser()
        setUser(data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log(user)


  return (
    <>{user ?
      <div className="user-profile-container">
        <div className="profile-photo">
          <img src={user.photo} alt={user.name}/>
        </div>
        <div className="profile-name">
          <p>Name: {user.name}</p>
        </div>
        <div className="profile-email">
          <p>Email: {user.email}</p>
        </div>
        <div className="profile-bio">
          <p>Bio {user.bio}</p>
        </div>
        <div className="profile-bio">
          <p>Location: {user.city}</p>
        </div>
        {user.isAuctioner && 
        <div className="profile-bio">
          <p>Is avaliable now: {user.isbidderIsAvailable}</p>
        </div>
        
        }

      </div>
      :
      <h2>Loading</h2>
    }
    </>
  )
}

export default UserShow