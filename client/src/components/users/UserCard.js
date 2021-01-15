import React from 'react'
import { Link } from 'react-router-dom'
import RoundedButtons from '../../styles/components/RoundedButtons'
import { favouriteUser } from '../../lib/api'

function UserCard({ _id, name, bio, photo, favouritedBy, numberOfUsersWhoFavourited, isAuctioneer, createdJobs, bidderCategories, bidderIsAvailable, refreshData }) {

  const handleClick = async() => {
    try {
      const response = await favouriteUser(_id )
      console.log('response' , response)
      refreshData()

    } catch (err){
      console.log(err)
    }
  }



  return (
    <div >
      <Link to={`/users/${_id}`}>

        <div className="user-card-index glass-morphism">
          <div className="card-header">
            <div><strong>{name}</strong></div>
          </div>

          {!isAuctioneer && 
            <div className="rounded-button">
              <RoundedButtons type={bidderIsAvailable ? 'green' : 'red'} />
            </div>
          }

          <div>
            <div className="card-image-container">
              <img src={photo} alt={name} className="card-image" />
            </div>
          </div>

          <div className="card-header">
            <p>{bio}</p>
          </div>

          {isAuctioneer ?
            <div className="card-header">
              <div><strong>JOBS POSTED:</strong> {createdJobs.map(job => (
                <p key={job._id}> {job.jobTitle}</p>
              ))}</div>
            </div>
            :
            <div className="card-header">
              <div className="card-header-title">
                <strong>
                  {bidderCategories}
                </strong></div>
            </div>
          }
          <br />
          {favouritedBy &&
            <div className="card-header">
              <div>❤️ {numberOfUsersWhoFavourited} 
              </div>
            </div>
          }
          
          <button className="btn" onClick={handleClick}> Favourite
          </button>
          
        </div>
      </Link>
    </div>
  )
}
export default UserCard