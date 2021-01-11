import express from 'express'
import jobs from '../controllers/jobs.js'
import users from '../controllers/users.js'
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

router.route('/jobs/:id/bids')
  .post(secureRoute, jobs.createBid)

router.route('/jobs/:id/bids/:bidId')
  .delete(secureRoute, jobs.deleteBid)
  
// todo * USER ROUTES
router.route('/users')
  .get(users.index)

// Only logged in users can see a single auctioneer profile, update or delete a profile
router.route('/users/:id')
  .get(secureRoute, users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete)

router.route('/register')
  .post(auth.registerUser)

router.route('/login')
  .post(auth.loginUser)

export default router