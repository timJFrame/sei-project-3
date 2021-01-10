import Auctioneer from '../models/auctioneer.js'
import Bidder from '../models/bidder.js'
import unauthorized from '../lib/errorHandler.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

async function registerAuctioneer(req, res, next) {
  try {
    const newAuctioneer = await Auctioneer.create(req.body)
      
    return res.status(201).json({ message: `Welcome ${newAuctioneer.name}` })

  } catch (err) {
    next(err)
  }
}

async function registerBidder(req, res, next) {
  try {
    const newBidder = await Bidder.create(req.body)
      
    return res.status(201).json({ message: `Welcome ${newBidder.name}` })

  } catch (err) {
    next(err)
  }
}

async function loginAuctioneer(req, res, next) {
  try {
    const auctioneerToLogin = await Auctioneer.findOne({ email: req.body.email })
    if (!auctioneerToLogin || !auctioneerToLogin.validatePassword(req.body.password)) {
      throw new Error(unauthorized)
    }
    const token = jwt.sign({ sub: auctioneerToLogin._id }, secret, { expiresIn: '7 days' })
    return res.status(202).json({ message: `Welcome back ${auctioneerToLogin.name}`, token })
  } catch (err) {
    next(err)
  }
}

async function loginBidder(req, res, next) {
  try {
    const bidderToLogin = await Bidder.findOne({ email: req.body.email })
    if (!bidderToLogin || !bidderToLogin.validatePassword(req.body.password)) {
      throw new Error(unauthorized)
    }
    const token = jwt.sign({ sub: bidderToLogin._id }, secret, { expiresIn: '7 days' })
    return res.status(202).json({ message: `Welcome back ${bidderToLogin.name}`, token })
  } catch (err) {
    next(err)
  }
}

export default {
  registerAuctioneer,
  registerBidder,
  loginAuctioneer,
  loginBidder
}