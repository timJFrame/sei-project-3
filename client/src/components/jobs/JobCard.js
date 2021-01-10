import React from 'react'
import { Link } from 'react-router-dom'

function JobCard ({ _id, jobTitle, jobPhoto  }){
  return (
    <Link to={`/jobs/${_id}`}>
      <div className="job-card glass-morphism">
        <p>Job Title:{ jobTitle}</p>
        <img src={jobPhoto} alt={jobTitle} className="job-card-image"/>
      </div>
    </Link>
  )
}

export default JobCard