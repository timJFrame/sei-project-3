import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AiFillCaretDown } from 'react-icons/ai'
import { logout, isAuthenticated } from '../../lib/auth'
import { useLocation } from 'react-router-dom'

function Nav() {
  const isLoggedIn = isAuthenticated()
  const history = useHistory()
  useLocation()

  const  handleLogout = () => {
    logout()
    history.push('/')
  }


  return (
    <header>
      <nav className="glass-morphism">
        <div>
          <Link to="/" className="deverr-title">DE<AiFillCaretDown style={{ color: 'AA57B1' }} />ERR</Link>
        </div>
        <div className="navButtonsGroup">
          <Link to="/jobs" className="btn">Jobs</Link>
          {!isLoggedIn ?
            <>
              <Link to="/login" className="btn-secondary-xs">Login</Link>
              <Link to="/register" className="btn-secondary-xs">Register</Link>
            </>
            :
            <Link to="#" onClick={handleLogout}className="btn-secondary-xs">Log Out</Link>
          }
        </div>

      </nav>
    </header>

  )
}

export default Nav