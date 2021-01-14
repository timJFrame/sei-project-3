import React from 'react'
import hero from './pexels-photo-205316.jpeg'
import Footer from './Footer'


function Home() {

<<<<<<< HEAD
=======
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

>>>>>>> development
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