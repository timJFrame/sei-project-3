import express from 'express'
import Job from './models/job.js'
import { port } from './config/enviroment.js'
import logger from './lib/logger.js'
import connectToDatabase from './lib/connectToDB.js'

const app = express()





async function startServer(){
  try {

    await connectToDatabase()
    console.log('Database has connected')

    //*Makes req.body avaliable 
    app.use(express.json())
		
    //*Logger logs each request to the console
    app.use(logger)

  
    app.listen(4000, () => console.log(`Up and running on port ${port}`))
  } catch (err){
    console.log('Something went wrong when starting the app')
    console.log(err)
  }
}



//*GET ALL JOBS
app.get('/jobs', async (req, res) => {
  const jobs = await Job.find()
  return res.status(200).json(jobs)
})

//*POST JOB
app.post('/jobs', async(req, res) => {
  try {
    const newJob = await Job.create(req.body)
    return res.status(201).json(newJob)
  } catch (err){
    console.log(err)
    return res.status(422).json(err)
  }
})

//*GET SINGLE JOB
app.get('jobs/:id', async(req, res) => {
  const { id } = req.params
  try {
    const job = await Job.findById(id)
    if (!job) throw new Error()
    return res.status(200).json(job)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
})


startServer()
