import React from 'react'
import { Link } from 'react-router-dom'
import RoundedButtons from '../../styles/components/RoundedButtons'

function UserCard({ _id, name, bio, photo, favouritedBy, numberOfUsersWhoFavourited, isAuctioneer, createdJobs, bidderCategories, bidderIsAvailable }) {

  console.log('createdJobs', createdJobs)

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
              <p><strong>JOBS POSTED:</strong> {createdJobs.map(job => (
                <p key={job._id}> {job.jobTitle}</p>
              ))}</p>
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
          {!favouritedBy ?
            <div className="card-header">
              <p>❤️ Favourited by {numberOfUsersWhoFavourited} users: 
                <div>{favouritedBy}</div>
              </p>
            </div>
            :
            <div className="card-header">
              <p><strong>❤️ {numberOfUsersWhoFavourited}</strong></p>
            </div>
          }
          
        </div>
      </Link>
    </div>
  )
}
export default UserCard