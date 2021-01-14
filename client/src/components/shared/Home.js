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

      <div className='job-show-container'>
        <br />
        <h1 style={{ textAlign: 'center' }}>DEVERR brings together Freelance Developers and Contractors.</h1>
        <br />
        <h2>Focus on delivering your project - the team you need is here</h2>
        <br />
        <hr />
        <br />

        <h1>STEPS</h1>
        <br />    
        <h2>IF YOU ARE LOOKING FOR A DEV</h2>
        <p><strong>One</strong> - Register as <strong>Auctioneer</strong></p>

        <p><strong>Two</strong> - Post the job</p>

        <p><strong>Three</strong> - Select the winning bid</p>

        <br />
        <h2>IF YOU ARE LOOKING FOR A JOB</h2>
        <p><strong>One</strong> - Register as <strong>Bidder</strong> </p>
        
        <p><strong>Two</strong> - Browse all advertised jobs, or filter them by job category</p>
        <p>Questions about the contract? Comment on the Job page.</p>
        
        <p><strong>Three</strong> - Post a bid detailing your experience and your prefered fee</p>
        <br />
      </div>
      
      <Footer />
    </div>
  )
}

export default Home