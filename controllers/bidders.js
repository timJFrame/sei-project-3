
import Bidder from '../models/bidder.js'


//*GET ALL BIDDERS
async function bidderIndex (req, res, next) {
  try {
    const bidders = await Bidder.find()
    return res.status(200).json(bidders)
  } catch (err){
    next(err)
  }
}

//*POST BIDDER
async function bidderCreate (req, res, next) {
  try {
    const newBidder = await Bidder.create(req.body)
    return res.status(201).json(newBidder)
  } catch (err){
    next(err)
  }
}

//*GET SINGLE BIDDER
async function bidderShow (req, res, next) {
  const { id } = req.params
  try {
    const bidder = await Bidder.findById(id)
    if (!bidder) throw new Error()
    return res.status(200).json(bidder)
  } catch (err) {
    next(err)
  }
}

//*DELETE BIDDER
async function bidderDelete (req, res, next) {
  const { id } = req.params
  try {
    const bidderToDelete = await Bidder.findById(id)
    if (!bidderToDelete) throw new Error()
    await bidderToDelete.remove()
    return res.sendStatus(204)
  } catch (err){
    next(err)
  }
}

//*EDIT BIDDER
async function bidderUpdate (req, res, next){
  const { id } = req.params
  try {
    const bidderToEdit = await Bidder.findById(id)
    if (!bidderToEdit) throw new Error()
    Object.assign(bidderToEdit, req.body)
    await bidderToEdit.save()
    return res.status(202).json(bidderToEdit)
  } catch (err){
    next(err)
  }
}

export default {
  index: bidderIndex,
  create: bidderCreate,
  show: bidderShow,
  update: bidderUpdate,
  delete: bidderDelete,
}