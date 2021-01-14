import React from 'react'
import hero from './pexels-photo-205316.jpeg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'


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

  const removeCategory = () => {
    window.localStorage.removeItem('catergory')
  }
  
  removeCategory()

  const carouselSettings = {
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    infinite: true,
    pauseOnHover: true,
    speed: 1200, // transition speed
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="home-page-container">
      <div className="hero-image-container">
        <div className="hero-image">
          <p>
            <img src={hero} alt="hero-image" height="700px"/>
          </p>
        </div>
      </div>

      <div className="categories-container" style={{ marginTop: '10%', marginBottom: '10%', marginLeft: '15%' , marginRight: '15%' }}>

        <div className="carousel-wrapper">
          <Slider { ...carouselSettings} >
            <div onClick={handleClick}>
              <Link to="/jobs" id="Android-Dev">
                <div className="catergory-cards glass-morphism "  id="Android-Dev" style={{ height: '200px', width: '300px' }}>
                Android Developer</div>
              </Link>
            </div>

            <div onClick={handleClick}>
              <Link to="/jobs" id="Apple-Dev">
                <div className="catergory-cards glass-morphism "  id="Apple-Dev" style={{ height: '200px', width: '300px' }}>
                Apple Developer
                </div>
              </Link>
            </div>


            <div onClick={handleClick}>
              <Link to="/jobs" id="Back-End">
                <div className="catergory-cards glass-morphism "  id="Back-End" style={{ height: '200px', width: '300px' }}>
                Back-End Developer
                </div>
              </Link>
            </div>


            <div onClick={handleClick}>
              <Link to="/jobs" id="Front-End">
                <div className="catergory-cards glass-morphism "  id="Front-End" style={{ height: '200px', width: '300px' }}>
                Front-End Developer
                </div>
              </Link>
            </div>


            <div onClick={handleClick}>
              <Link to="/jobs" id="Game-Dev">
                <div className="catergory-cards glass-morphism "  id="Game-Dev" style={{ height: '200px', width: '300px' }}>
                Game-Developer
                </div>
              </Link>
            </div>


            <div onClick={handleClick}>
              <Link to="/jobs" id="UI-Dev" >
                <div className="catergory-cards glass-morphism "  id="UI-Dev" style={{ height: '200px', width: '300px' }}>
                UI Developer
                </div>
              </Link>
            </div>

          </Slider>

        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Home