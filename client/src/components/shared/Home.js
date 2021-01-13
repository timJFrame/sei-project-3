import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  let category = ''

  //*Sets category in local storage
  const setCategory = (category) => {
    window.localStorage.setItem('catergory', category)
  }

  //*Handles click event on category card
  const handleClick = (e) => {
    category = e.target.id
    setCategory(category)
  }

  return (
    <div className="home-page-container">
      <div className="hero-image-container">
        <div className="hero-image glass-morphism">
          <p>hero image</p>
        </div>
      </div>
      <div className="categories-container">

      
        <div onClick={handleClick}>
          <div className="catergory-cards glass-morphism "  id="Android-Dev">
            <Link to="/jobs" id="Android-Dev">Android Developer</Link>
          </div>
        </div>

        <div onClick={handleClick}>
          <div className="catergory-cards glass-morphism "  id="Apple-Dev">
            <Link to="/jobs" id="Apple-Dev">Apple Developer</Link>
          </div>
        </div>


        <div onClick={handleClick}>
          <div className="catergory-cards glass-morphism "  id="Back-End">
            <Link to="/jobs" id="Back-End">Back-End Developer</Link>
          </div>
        </div>

       
        <div onClick={handleClick}>
          <div className="catergory-cards glass-morphism "  id="Front-End">
            <Link to="/jobs" id="Front-End">Front-End Developer</Link>
          </div>
        </div>


        <div onClick={handleClick}>
          <div className="catergory-cards glass-morphism "  id="Game-Dev">
            <Link to="/jobs" id="Game-Dev">Game-Developer</Link>
          </div>
        </div>

       
        <div onClick={handleClick}>
          <div className="catergory-cards glass-morphism "  id="UI-Dev">
            <Link to="/jobs" id="UI-Dev">UI Developer</Link>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Home