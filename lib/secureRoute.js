import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'
import Auctioneer from '../models/auctioneer.js'
import Bidder from '../models/bidder.js'

export default async function secureRoute(req, res, next) {

  // TEST INCOMING REQUEST CONTAINS ALL I NEED, REJECT OTHERWISE
  try {
    if (!req.headers.authorization) {
      throw new Error('Missing Required Header')
    }

    const token = req.headers.authorization.replace('Bearer ', '')
    const payload = jwt.verify(token, secret)

    const auctioneerToVerify = await Auctioneer.findById(payload.sub)
    const bidderToVerify = await Bidder.findById(payload.sub)

    // if the user is not an auctioneer or bidder, throw error
    if (!auctioneerToVerify && !bidderToVerify) {
      throw new Error('User not Found')

    } else if (auctioneerToVerify) {
      req.currentUser = auctioneerToVerify

    } else {
      req.currentUser = bidderToVerify
    }

    next()
  } catch (err) {
    next(err)
  }
}