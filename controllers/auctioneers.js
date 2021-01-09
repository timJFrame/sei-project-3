import Auctioneer from '../models/auctioneer.js'


//*GET ALL AUCTIONEERS
async function auctioneerIndex (req, res, next) {
  try {
    const auctioneer = await Auctioneer.find()
    return res.status(200).json(auctioneer)
  } catch (err){
    next(err)
  }
}

//*POST AUCTIONEER
async function auctioneerCreate (req, res, next) {
  try {
    const newAuctioneer = await Auctioneer.create(req.body)
    return res.status(201).json(newAuctioneer)
  } catch (err){
    next(err)
  }
}

//*GET SINGLE AUCTIONEER
async function auctioneerShow (req, res, next) {
  const { id } = req.params
  try {
    const auctioneer = await Auctioneer.findById(id)
    if (!auctioneer) throw new Error()
    return res.status(200).json(auctioneer)
  } catch (err) {
    next(err)
  }
}

//*DELETE AUCTIONEER
async function auctioneerDelete (req, res, next) {
  const { id } = req.params
  try {
    const auctioneerToDelete = await Auctioneer.findById(id)
    if (!auctioneerToDelete) throw new Error()
    await auctioneerToDelete.remove()
    return res.sendStatus(204)
  } catch (err){
    next(err)
  }
}

//*EDIT AUCTIONEER
async function auctioneerUpdate (req, res, next){
  const { id } = req.params
  try {
    const auctioneerToEdit = await Auctioneer.findById(id)
    if (!auctioneerToEdit) throw new Error()
    Object.assign(auctioneerToEdit, req.body)
    await auctioneerToEdit.save()
    return res.status(202).json(auctioneerToEdit)
  } catch (err){
    next(err)
  }
}

export default {
  index: auctioneerIndex,
  create: auctioneerCreate,
  show: auctioneerShow,
  update: auctioneerUpdate,
  delete: auctioneerDelete,
}