import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className="home-page-container">
      <div className="hero-image-container">
        <div className="hero-image glass-morphism">
          <p>hero image</p>
        </div>
      </div>
      <div className="categories-container">


        <div className="catergory-cards glass-morphism">
          <Link to="/jobs">Android Developer</Link>
        </div>

        <div className="catergory-cards glass-morphism">
          <Link to="/jobs">
            Apple Developer
          </Link>
        </div>
        <div className="catergory-cards glass-morphism">
          <Link to="/jobs">
            Back-End Developer
          </Link>
        </div>
        <div className="catergory-cards glass-morphism">
          <Link to="/jobs">
            Front-End Developer
          </Link>
        </div>
        <div className="catergory-cards glass-morphism">
          <Link to="/jobs">
            Game Developer
          </Link>
        </div>
        <div className="catergory-cards glass-morphism">
          <Link to="/jobs">
            UI Developer
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Home