import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (

    <header>
      <nav className="glass-morphism">
        <div>
          <Link to="/" id="deverr-title">DEVERR</Link>
        </div>
        <div className="navButtonsGroup">
<<<<<<< HEAD
          <Link to="/jobs" className="navButton">Jobs</Link>
          <Link to="/login" className="navButton">Login</Link>
          <Link to="/register" className="navButton">Register</Link>
=======
          <Link to="/jobs" className="btn">Jobs</Link>
          <Link to="#" className="btn-secondary-xs">Login</Link>
          <Link to="#" className="btn-submit-lg">Register</Link>
          <Link to="#" className="btn-cancel-xl">Delete</Link>
>>>>>>> development
        </div>

      </nav>
    </header>

  )
}

export default Nav