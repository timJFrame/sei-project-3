import express from 'express'
import jobs from '../controllers/jobs.js'

const router = express.Router()

router.route('/jobs')
  .get(jobs.index)
  .post(jobs.create)

router.route('/jobs/:id')
  .get(jobs.show)
  .get(jobs.update)
  .get(jobs.delete)

export default router