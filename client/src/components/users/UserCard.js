import React from 'react'
import { Link } from 'react-router-dom'
import RoundedButtons from '../../styles/components/RoundedButtons'

function UserCard({ _id, name, city, bio, image, favouritedBy, numberOfUsersWhoFavourited, isAuctioneer, createdJobs, bidderCategories, bidderIsAvailable }) {
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

          <div className="card-image">
            <figure className="image">
              <Link to={image} alt={name}/>
            </figure>
          </div>

          <div className="card-header">
            <div className="card-header-title">{bio}</div>
          </div>

          <div className="card-header">
            <div className="card-header-title">From: {city}</div>
          </div>

          {isAuctioneer ?
            <div className="card-header">
              <div className="card-header-title">JOBS POSTED: {createdJobs}</div>
            </div>
            :
            <div className="card-header">
              <div className="card-header-title">
                <strong>
                  {bidderCategories}
                </strong></div>
            </div>
          }

          {!favouritedBy ?
            <div className="card-header">
              <div className="card-header-title">Favourited by {numberOfUsersWhoFavourited} users: 
                <div>{favouritedBy}</div>
              </div>
            </div>
            :
            <div className="card-header">
              <div className="card-header-title">{numberOfUsersWhoFavourited}</div>
            </div>
          }
          
        </div>
      </Link>
    </div>
  )
}
export default UserCard