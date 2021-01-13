import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import hero from './pexels-photo-205316.jpeg'

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

  const carouselSettings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
    infinite: true,
    pauseOnHover: true,
    speed: 1200, // transition speed
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  }

  return (
    <div className="home-page-container">
      <div className="hero-image-container">
        <div className="hero-image glass-morphism">
          <p>
            <img src={hero} alt="hero-image" height="700px"/>
          </p>
        </div>
      </div>

      <div className="categories-container" style={{ marginTop: '10%', marginLeft: '15%' , marginRight: '15%' }}>

        <div className="carousel-wrapper">
          <Slider { ...carouselSettings} >
            <div onClick={handleClick}>
              <div className="catergory-cards glass-morphism "  id="Android-Dev" style={{ height: '200px', backgroundColor: 'red' }}>
                <Link to="/jobs" id="Android-Dev">Android Developer</Link>
              </div>
            </div>

            <div onClick={handleClick}>
              <div className="catergory-cards glass-morphism "  id="Apple-Dev" style={{ height: '200px', backgroundColor: 'red' }}>
                <Link to="/jobs" id="Apple-Dev">Apple Developer</Link>
              </div>
            </div>


            <div onClick={handleClick}>
              <div className="catergory-cards glass-morphism "  id="Back-End" style={{ height: '200px', backgroundColor: 'red' }}>
                <Link to="/jobs" id="Back-End">Back-End Developer</Link>
              </div>
            </div>


            <div onClick={handleClick}>
              <div className="catergory-cards glass-morphism "  id="Front-End" style={{ height: '200px', backgroundColor: 'red' }}>
                <Link to="/jobs" id="Front-End">Front-End Developer</Link>
              </div>
            </div>


            <div onClick={handleClick}>
              <div className="catergory-cards glass-morphism "  id="Game-Dev" style={{ height: '200px', backgroundColor: 'red' }}>
                <Link to="/jobs" id="Game-Dev">Game-Developer</Link>
              </div>
            </div>


            <div onClick={handleClick}>
              <div className="catergory-cards glass-morphism "  id="UI-Dev" style={{ height: '200px', backgroundColor: 'red' }}>
                <Link to="/jobs" id="UI-Dev" >UI Developer</Link>
              </div>
            </div>

          </Slider>

        </div>
      </div>
    </div>

  )
}

export default Home