import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCaretDown } from 'react-icons/ai'

function Nav() {
  return (

    <header>
      <nav className="glass-morphism">
        <div>
          <Link to="/" className="deverr-title">DE<AiFillCaretDown style={{ color: 'AA57B1' }} />ERR</Link>
        </div>
        <div className="navButtonsGroup">
          <Link to="/jobs" className="btn">Jobs</Link>
          <Link to="/login" className="btn-secondary-xs">Login</Link>
          <Link to="/register" className="btn-secondary-xs">Register</Link>

        </div>

      </nav>
    </header>

  )
}

export default Nav