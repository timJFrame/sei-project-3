
import Bidder from '../models/bidder.js'


//*GET ALL BIDDERS
async function bidderIndex (req, res) {
  const bidders = await Bidder.find()
  return res.status(200).json(bidders)
}

//*POST BIDDER
async function bidderCreate (req, res) {
  try {
    const newBidder = await Bidder.create(req.body)
    return res.status(201).json(newBidder)
  } catch (err){
    console.log(err)
    return res.status(422).json(err)
  }
}

//*GET SINGLE BIDDER
async function bidderShow (req, res) {
  const { id } = req.params
  try {
    const bidder = await Bidder.findById(id)
    if (!bidder) throw new Error()
    return res.status(200).json(bidder)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
}

//*DELETE BIDDER
async function bidderDelete (req, res) {
  const { id } = req.params
  try {
    const bidderToDelete = await Bidder.findById(id)
    if (!bidderToDelete) throw new Error()
    await bidderToDelete.remove()
    return res.sendStatus(204)
  } catch (err){
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
}

//*EDIT BIDDER
async function bidderUpdate (req, res){
  const { id } = req.params
  try {
    const bidderToEdit = await Bidder.findById(id)
    if (!bidderToEdit) throw new Error()
    Object.assign(bidderToEdit, req.body)
    await bidderToEdit.save()
  } catch (err){
    console.log(err)
    return res.status(404).json( { message: 'Not Found' } )
  }
}

export default {
  index: bidderIndex,
  create: bidderCreate,
  show: bidderShow,
  update: bidderUpdate,
  delete: bidderDelete,
}