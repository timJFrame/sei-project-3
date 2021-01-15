import React from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { deleteUser, getSingleUser } from '../../lib/api'
import { isOwner } from '../../lib/auth'
import { AiTwotoneDelete, AiOutlineEdit } from 'react-icons/ai'



function UserShow() {
  const [user, setUser] = React.useState(null)
  const { id } = useParams()
  const history = useHistory()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleUser(id)
        setUser(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  const handleDelete = async () => {
    try {
      await deleteUser(id)
      history.push('/users')
    } catch (err) {
      console.log(err)
    }
  }
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
              <hr />

              <div className="card-body-footer-container" style={{ height: '50px', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                <button className="btn-secondary" style={{ maxWidth: '150px' }}>
                  <Link to="/users/edit" style={{ color: 'white' }}>Edit Profile<AiOutlineEdit /></Link>
                </button>

                {isOwner(user._id) &&
                  <button className="btn-cancel" style={{ maxWidth: '150px' }} onClick={handleDelete}>Delete User <AiTwotoneDelete />
                  </button>
                }
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