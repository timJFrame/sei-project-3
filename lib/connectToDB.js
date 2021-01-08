import mongoose from 'mongoose'
import { dbUri } from '../config/environment.js'


export default function connectToDatabase() {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
  return mongoose.connect(dbUri, options)

}

