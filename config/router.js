import express from 'express'
import jobs from '../controllers/jobs.js'
import auctioneers from '../controllers/auctioneers.js'
import bidders from '../controllers/bidders.js'

const router = express.Router()

//*JOB ROUTES
router.route('/jobs')
  .get(jobs.index)
  .post(jobs.create)

router.route('/jobs/:id')
  .get(jobs.show)
  .put(jobs.update)
  .delete(jobs.delete)

  
//*AUCTIONEER ROUTES
router.route('/auctioneers')
  .get(auctioneers.index)
  .post(auctioneers.create)

router.route('/auctioneers/:id')
  .get(auctioneers.show)
  .put(auctioneers.update)
  .delete(auctioneers.delete)


//*BIDDER ROUTES 
router.route('/bidders')
  .get(bidders.index)
  .post(bidders.create)

router.route('/bidders/:id')
  .get(bidders.show)
  .put(bidders.update)
  .delete(bidders.delete)


export default router