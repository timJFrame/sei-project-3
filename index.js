import express from 'express'
import mongoose from 'mongoose'


const dbUri = 'mongodb://localhost/deverr-db'
const app = express()
const port = 4000

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

// app.get('/jobs', async (req, res) => {
//   const jobs = await jobs.find()
//   return res.status.json(jobs)
// })


startServer()
