import express from 'express'
import {  port } from './config/environment.js'
import logger from './lib/logger.js'
import connectToDatabase from './lib/connectToDB.js'
import router from './config/router.js'

const app = express()

async function startServer(){
  try {
    await connectToDatabase()
    console.log('Database has connected')

    //*Makes req.body avaliable 
    app.use(express.json())
    
    //*Logger logs each request to the console
    app.use(logger)
    
    //*Routes all routes
    app.use(router)
    
    app.listen(4000, () => console.log(`Up and running on port ${port}`))
  } catch (err){
    console.log('Something went wrong when starting the app')
    console.log(err)
  }
}

startServer()
