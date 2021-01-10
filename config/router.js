import express from 'express'
import jobs from '../controllers/jobs.js'
import auctioneers from '../controllers/auctioneers.js'
import bidders from '../controllers/bidders.js'
import auth from '../controllers/auth.js'
import secureRoute from '../lib/secureRoute.js'

const router = express.Router()

// todo * JOB ROUTES
router.route('/jobs')
  .get(jobs.index)

  // Only logged in users can create job
  .post(secureRoute, jobs.create)

// Only logged in users can see a single job, update or delete a job
router.route('/jobs/:id')
  .get(secureRoute, jobs.show)
  .put(secureRoute, jobs.update)
  .delete(secureRoute, jobs.delete)

  
// todo * AUCTIONEER ROUTES
router.route('/auctioneers')
  .get(auctioneers.index)

// Only logged in users can see a single auctioneer profile, update or delete a profile
router.route('/auctioneers/:id')
  .get(secureRoute, auctioneers.show)
  .put(secureRoute, auctioneers.update)
  .delete(secureRoute, auctioneers.delete)

router.route('/auctioneers/register')
  .post(auth.registerAuctioneer)

router.route('/auctioneers/login')
  .post(auth.loginAuctioneer)


// todo * BIDDER ROUTES 
router.route('/bidders')
  .get(bidders.index)

// Only logged in users can see a single bidder profile, update or delete a bidder
router.route('/bidders/:id')
  .get(secureRoute, bidders.show)
  .put(secureRoute, bidders.update)
  .delete(secureRoute, bidders.delete)

router.route('/bidders/register')
  .post(auth.registerBidder)

router.route('/bidders/login')
  .post(auth.loginBidder)

export default router