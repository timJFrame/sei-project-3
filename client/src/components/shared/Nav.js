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
          <Link to="#" className="navButton">Login</Link>
        </div>

      </nav>
    </header>

  )
}

export default Nav