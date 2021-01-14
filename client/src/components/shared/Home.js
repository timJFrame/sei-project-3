import React from 'react'
import Footer from './Footer'


function Home() {

  return (
    <div className="home-page-container">

      <section className="hero">
        <div className="hero-content">
        </div>
      </section>
      
      <br />
      <div className="job-show-container frosty about-text">

        <h1 className="about-title">DEVERR brings together Freelance Developers and Contractors</h1>
        <br />
        <h2 className="about-text">Focus on delivering your project - the team you need is here</h2>
        <br />
        <hr />
        <br />
        
        <h2>IF YOU ARE LOOKING FOR A DEV</h2>
        <h4><strong>One</strong> - Register as <strong>Auctioneer</strong></h4>
        <h4><strong>Two</strong> - Post the job</h4>
        <h4><strong>Three</strong> - Select the winning bid</h4>
        <br />        
        <hr />
        <br />
        <h2>IF YOU ARE LOOKING FOR A JOB</h2>
        <h4><strong>One</strong> - Register as <strong>Bidder</strong> </h4>
        <h4><strong>Two</strong> - Browse all jobs or filter by category</h4>
        <h4><strong>Three</strong> - Post a bid</h4>
      </div>
      <br />

      <Footer />
    </div>
  )
}

export default Home