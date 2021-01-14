import React from 'react'
import { Link } from 'react-router-dom'
import { getSingleUser } from '../../lib/api'
function UserShow() {
  const [user, setUser] = React.useState(null)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleUser()
        setUser(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  return (
    <>{user ?
      <div className="container-general">
        <div className="card glass-morphism" style={{ width: '440px', height: '480px' }}>
          <div className="user-profile-container">
            <div className="card-image-container" style={{ height: '210px', justifyContent: 'center' }}>
              <img src={user.photo} alt={user.name} className="card-image" />
            </div>
            <div className="card-body" style={{ width: '440px', height: '270px' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '270px' }}>
                <div className="column">
                  <p>Name: <br /><span>{user.name}</span></p>
                  <p>Email: <br /><span>{user.email}</span></p>
                  <p>Location: <br /><span>{user.city}</span></p>
                </div>
                <div className="column" style={{ width: '180px', marginLeft: '35px' }}>
                  <p>Bio: <br /><span>{user.bio}</span></p>
                  {user.isAuctioner &&
                    <div className="profile-bio">
                      <p>Is avaliable now: <br />{user.isbidderIsAvailable}</p>
                    </div>
                  }
                </div>
              </div>
              <div className="card-body-footer-container" style={{ height: '50px', justifyContent: 'center', alignItems: 'center' }}>
                <hr />
                <button className="btn-secondary" style={{ maxWidth: '150px' }}>
                  <Link to="/users/edit" style={{ color: 'white' }}>Edit Profile</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <h2>Loading</h2>
    }
    </>
  )
}
export default UserShow