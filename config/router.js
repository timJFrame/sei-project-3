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
  .get( jobs.show)
  .put( jobs.update)
  .delete(jobs.delete)

// Only logged in users can comment 
//? * COMMENTS
router.route('/jobs/:id/comments')
  .post(secureRoute, jobs.createComment)

router.route('/jobs/:id/comments/:commentId')
  .delete(secureRoute, jobs.deleteComment)
  
// ! GET COMMENTS - write route

// Only bidders can place bid
//? * BIDS
router.route('/jobs/:id/bids')
  .post(secureRoute, jobs.createBid)

router.route('/jobs/:id/bids/:bidId')
  .delete(secureRoute, jobs.deleteBid)


// todo * USER ROUTES
router.route('/users')
  .get(users.index)

// Only logged in users can see a single user profile, update or delete a profile
router.route('/users/:id')
  .get(secureRoute, users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete)

router.route('/register')
  .post(auth.registerUser)

router.route('/login')
  .post(auth.loginUser)

export default router