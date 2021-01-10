import React from 'react'
import { Link } from 'react-router-dom'


function Nav (){
  return (
    <header>
      <nav>
        <div className="nav-container">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/jobs" className="nav-item">Jobs</Link>
        </div>
      </nav>
    </header>
	
  )
}

export default Nav