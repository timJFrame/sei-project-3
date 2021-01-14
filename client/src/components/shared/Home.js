import React from 'react'
import hero from './pexels-photo-205316.jpeg'
import Footer from './Footer'


function Home() {

  return (
    <div className="home-page-container">
      <div className="hero-image-container">
        <div className="hero-image">
          <p>
            <img src={hero} alt="hero-image" height="700px"/>
          </p>
        </div>
      </div>


      
      <Footer />
    </div>
  )
}

export default Home