import React from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { deleteUser, getSingleUser, messageUser } from '../../lib/api'
import { isOwner, logout } from '../../lib/auth'
import { AiTwotoneDelete, AiOutlineEdit } from 'react-icons/ai'
import useForm from '../../utils/useform'




function UserShow() {
  const [user, setUser] = React.useState(null)
  const { id } = useParams()
  const history = useHistory()
  const [reply, setReply] = React.useState(null)
  const [owner, setOwner] = React.useState('')
  let messageOwner = ''

  
  //*Gets a users profile
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleUser(id)
        setUser(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  //*Handles deleting a profile
  const handleDelete = async () => {
    try {
      await deleteUser(id)
      logout()
      history.push('/jobs')
    } catch (err) {
      console.log(err)
    }
  }

  //*Hanldes hiding and showing the message form field
  const handleReply = (messOwner) => {
    setReply(true)
    messageOwner = messOwner
    setOwner(messageOwner)
  }

  //*Captures the message input
  const { formdata, handleChange, setFormdata } = useForm({
    text: ''
  })

  //*Handles submitting the message
  const handleMessageSubmit = async (e, messageOwnerId) => {
    e.preventDefault()
    await messageUser(messageOwnerId, formdata)
    setFormdata('')
    setReply(false)
  }

 
  return (
    <>{user ?
      <div className="container-general">
        <div className="card glass-morphism" style={{ width: '440px', height: '680px' }}>
          <div className="user-profile-container">
            <div className="card-image-container" style={{ height: '210px', justifyContent: 'center' }}>
              <img src={user.photo} alt={user.name} className="card-image" />
            </div>
            <div className="card-body" style={{ width: '440px', height: '470px' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '470px' }}>
                <div className="column">
                  <p>Name: <br /><span>{user.name}</span></p>
                  <p>Email: <br /><span>{user.email}</span></p>
                  <p>Location: <br /><span>{user.city}</span></p>
                  <p>Messages: <br /></p>
                  {user.message &&
                  user.message.map(message=> (
                    <>
                      {message.owner &&
                    <>
                      <p key={message._id}>{message.owner.name} messaged: <span>{message.text}</span></p>
                      <button className="btn-submit" style={{ width: '100px', height: '30px' }}onClick={() => handleReply(message.owner.id)}>Reply</button>
                    </>
                      }
                    </>
                  ))
                  
                  } 
                  {reply &&
                        <div className="form-container">
                          <form onSubmit={(event) => handleMessageSubmit(event, owner)}>
                            <div className="field">
                              <textarea
                                className="input"
                                value={formdata.text}
                                name="text"
                                onChange={handleChange}
                              />
                            </div>
                            <button className="btn-submit" style={{ width: '100px', height: '30px' }}>Send</button>
                          </form>
                        </div>
                  }
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
                {user?.isAuctioneer &&
                  <button className="btn-secondary" style={{ maxWidth: '150px' }}>
                    <Link to="/jobs/new" style={{ color: 'white' }}>Create Job<AiOutlineEdit /></Link>
                  </button>
                }
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