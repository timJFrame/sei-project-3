import User from '../models/user.js'
import unauthorized from '../lib/errorHandler.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

async function registerUser(req, res, next) {
  try {
    const newUser = await User.create(req.body)
      
    return res.status(201).json({ message: `Welcome ${newUser.name}` })

  } catch (err) {
    next(err)
  }
}

async function loginUser(req, res, next) {
  try {
    const userToLogin = await User.findOne({ email: req.body.email })
    if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
      throw new Error(unauthorized)
    }
    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '7 days' })
    return res.status(202).json({ message: `Welcome back ${userToLogin.name}`, token })
  } catch (err) {
    next(err)
  }
}

export default {  
  registerUser,
  loginUser
}