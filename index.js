import express from 'express'
import mongoose from 'mongoose'
import Job from './models/job.js'
import { port } from './config/enviroment.js'
export const dbUri = 'mongodb://localhost/deverr-db'
const app = express()



app.use(express.json())

async function startServer(){
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    console.log('Database has connected')
    app.listen(4000, () => console.log(`Up and running on port ${port}`))
  } catch (err){
    console.log('Something went wrong when starting the app')
    console.log(err)
  }
}

app.use((req, res, next ) => {
  console.log(`Incoming request from: ${req.method}- ${req.url}`)
  next()
})

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
