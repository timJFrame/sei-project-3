import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (

    <header>
      <nav className="glass-morphism">
        <div>
          <Link to="/">DEVERR</Link>
        </div>
        <div className="navButtonsGroup">
          <Link to="/jobs" className="btn">Jobs</Link>
          <Link to="#" className="btn-secondary-xs">Login</Link>
          <Link to="#" className="btn-submit-lg">Register</Link>
          <Link to="#" className="btn-cancel-xl">Delete</Link>
        </div>

      </nav>
    </header>

  )
}

export default Nav