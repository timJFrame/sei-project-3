import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'

function JobCarousel(){
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
  console.log(category)

  const carouselSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    infinite: true,
    pauseOnHover: true,
    speed: 1200, // transition speed
    slidesToShow: 6,
    slidesToScroll: 3,
    swipe: true,

    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="categories-container" style={{ marginTop: '10%', marginBottom: '10%', marginLeft: '15%' , marginRight: '15%' }}>

      <div className="carousel-wrapper">
        <Slider { ...carouselSettings}>
          <div onClick={handleClick}>
            <Link to="/jobs" id="Android-Dev">
              <div className="catergory-cards glass-morphism "  id="Android-Dev" style={{ height: '200px', width: '160px', color: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <strong >Android <br /> Developer</strong>
              </div>            
            </Link>
          </div>

          <div onClick={handleClick}>
            <Link to="/jobs" id="Apple-Dev">
              <div className="catergory-cards glass-morphism "  id="Apple-Dev" style={{ height: '200px', width: '160px', color: 'purple', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <strong>Apple <br /> iOS Developer</strong>
              </div>
            </Link>
          </div>


          <div onClick={handleClick}>
            <Link to="/jobs" id="Back-End">
              <div className="catergory-cards glass-morphism "  id="Back-End" style={{ height: '200px', width: '160px', color: 'teal', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <strong>Back-End <br /> Developer</strong>
              </div>
            </Link>
          </div>


          <div onClick={handleClick}>
            <Link to="/jobs" id="Front-End">
              <div className="catergory-cards glass-morphism "  id="Front-End" style={{ height: '200px', width: '160px', color: '#F62E65', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <strong>Front End <br /> Developer</strong>
              </div>
            </Link>
          </div>


          <div onClick={handleClick}>
            <Link to="/jobs" id="Game-Dev">
              <div className="catergory-cards glass-morphism "  id="Game-Dev" style={{ height: '200px', width: '160px', color: '#BE5011', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <strong>Game <br /> Developer</strong>
              </div>
            </Link>
          </div>


          <div onClick={handleClick}>
            <Link to="/jobs" id="UI-Dev" >
              <div className="catergory-cards glass-morphism "  id="UI-Dev" style={{ height: '200px', width: '150px', color: '#689E29', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <strong>UI - User <br /> Experience</strong>
              </div>
            </Link>
          </div>

        </Slider>

      </div>
    </div>)
}

export default JobCarousel