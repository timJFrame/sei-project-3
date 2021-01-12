import React from 'react'
import { Link } from 'react-router-dom'

function JobCard({ _id, jobTitle, jobPhoto }) {
  return (
    <Link to={`/jobs/${_id}`}>
      <div className="job-card glass-morphism">
        <div className="card-image-container">
          <img src={jobPhoto} alt={jobTitle} className="card-image" />
        </div>
        <div className="card-body">
          <div className="card-body-user">
            <div className="">
              <img src={jobPhoto} alt={jobTitle} className="card-user-avatar" />
            </div>
            <div className="card-user-name">
              <p className="">Auctioneer Name</p>
            </div>
          </div>
          <div className="card-body-text">
            <p>{jobTitle}</p>
          </div>
          <hr />
          <div className="card-body-footer-container">
            <div className="card-footer-body">
              <div className="card-footer-element">
                <p>something</p>
              </div>
              <div className="card-footer-element">
                <p>something</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default JobCard