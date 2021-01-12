import express from 'express'
import jobs from '../controllers/jobs.js'
import users from '../controllers/users.js'
import auth from '../controllers/auth.js'
import secureRoute from '../lib/secureRoute.js'

const router = express.Router()

// todo * JOB ROUTES
router.route('/jobs')
  .get(jobs.index) // Show all jobs
  .post(secureRoute, jobs.create) // Create job - Auctioneers only

router.route('/jobs/:id')
  .get(secureRoute, jobs.show) // See a single job - Logged in users only
  .put(secureRoute, jobs.update) // Update a job - Only Auctioneer who made this
  .delete(secureRoute, jobs.delete) // Delete a job - Only Auctioneer who made this

// todo * BIDS
router.route('/jobs/:id/bids')
  .post(secureRoute, jobs.createBid) // Only bidders can place bid

  .get(secureRoute, jobs.getBids) // Only Auctioneer who posted can see bid

router.route('/jobs/:id/bids/:bidId')
  .delete(secureRoute, jobs.deleteBid) // Only bidders can delete bid

// todo * COMMENTS
router.route('/jobs/:id/comments') // Comment and see comments - Logged in users only
  .post(secureRoute, jobs.createComment)
  .get(secureRoute, jobs.getComments)

router.route('/jobs/:id/comments/:commentId')
  .delete(secureRoute, jobs.deleteComment) // Delete a comment - Only Auctioneer who posted job and Bidder who wrote comment


// todo * USER ROUTES
router.route('/users')
  .get(users.index) // Show all users

router.route('/users/:id') 
  .get(secureRoute, users.show) // See a single user profile - only signed in users
  .put(secureRoute, users.update) // * Update a profile - Only user who created it
  .delete(secureRoute, users.delete) // * Delete a profile - Only user who created it


// todo * FAVOURITES
router.route('/users/:id/favourite') // Show all users who favourited this user 
  .post(secureRoute, users.favourite) // Logged in users only

// todo * USER REGISTER & LOGIN
router.route('/register')
  .post(auth.registerUser) // Register new user

router.route('/login')
  .post(auth.loginUser) // Login user
  

export default router