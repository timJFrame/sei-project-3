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
          <Link to="/jobs" className="navButton">Jobs</Link>
          <Link to="/login" className="navButton">Login</Link>
          <Link to="/register" className="navButton">Register</Link>
        </div>

      </nav>
    </header>

  )
}

export default Nav