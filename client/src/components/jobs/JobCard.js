import React from 'react'
import { Link } from 'react-router-dom'

function JobCard({ _id, jobTitle, jobPhoto }) {
  return (
    <Link to={`/jobs/${_id}`}>
      <div className="job-card glass-morphism">
        <div className="card-header">
          <h3 className="card-title">Job Title</h3>
          <p>{jobTitle}</p>
        </div>
        <img src={jobPhoto} alt={jobTitle} className="job-card-image" />
      </div>
    </Link >
  )
}

export default JobCard