import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../images/logoplain.svg'
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
          <Link to="/" className="deverr-title">
            <img src={logo}></img>
          </Link>
        </div>
        <div className="navButtonsGroup">
          <Link to="/jobs" className="btn" style={{ padding: '10px' }}>Jobs</Link>
          <Link to="/users" className="btn" style={{ padding: '10px' }}>People</Link>
          {!isLoggedIn ?
            <>
              <Link to="/login" className="btn-secondary-xs" style={{ padding: '10px' }}>Login</Link>
              <Link to="/register" className="btn-secondary-xs" style={{ padding: '10px' }}>Register</Link>
            </>
            :
            <>
              <Link to="/user" className="btn-secondary-xs" style={{ padding: '10px' }}>My Profile</Link>
              <Link to="#" onClick={handleLogout}className="btn-secondary-xs" style={{ padding: '10px' }}>Log Out</Link>    
            </>        
          }            
          
        </div>

      </nav>
    </header>

  )
}

export default Nav