import express from 'express'
import jobs from '../controllers/jobs.js'
import auctioneers from '../controllers/auctioneers.js'

const router = express.Router()

router.route('/jobs')
  .get(jobs.index)
  .post(jobs.create)

router.route('/jobs/:id')
  .get(jobs.show)
  .put(jobs.update)
  .delete(jobs.delete)

  
router.route('/auctioneers')
  .get(auctioneers.index)
  .post(auctioneers.create)

router.route('/auctioneers/:id')
  .get(auctioneers.show)
  .put(auctioneers.update)
  .delete(auctioneers.delete)




export default router