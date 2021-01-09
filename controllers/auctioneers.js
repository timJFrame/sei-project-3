import Auctioneer from '../models/auctioneer.js'


//*GET ALL AUCTIONEERS
async function auctioneerIndex (req, res) {
  const auctioneer = await Auctioneer.find()
  return res.status(200).json(auctioneer)
}

//*POST AUCTIONEER
async function auctioneerCreate (req, res) {
  try {
    const newAuctioneer = await Auctioneer.create(req.body)
    return res.status(201).json(newAuctioneer)
  } catch (err){
    console.log(err)
    return res.status(422).json(err)
  }
}

//*GET SINGLE AUCTIONEER
async function auctioneerShow (req, res) {
  const { id } = req.params
  try {
    const auctioneer = await Auctioneer.findById(id)
    if (!auctioneer) throw new Error()
    return res.status(200).json(auctioneer)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
}

//*DELETE AUCTIONEER
async function auctioneerDelete (req, res) {
  const { id } = req.params
  try {
    const auctioneerToDelete = await Auctioneer.findById(id)
    if (!auctioneerToDelete) throw new Error()
    await auctioneerToDelete.remove()
    return res.sendStatus(204)
  } catch (err){
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
}

//*EDIT AUCTIONEER
async function auctioneerUpdate (req, res){
  const { id } = req.params
  try {
    const auctioneerToEdit = await Auctioneer.findById(id)
    if (!auctioneerToEdit) throw new Error()
    Object.assign(auctioneerToEdit, req.body)
    await auctioneerToEdit.save()
  } catch (err){
    console.log(err)
    return res.status(404).json( { message: 'Not Found' } )
  }
}

export default {
  index: auctioneerIndex,
  create: auctioneerCreate,
  show: auctioneerShow,
  update: auctioneerUpdate,
  delete: auctioneerDelete,
}