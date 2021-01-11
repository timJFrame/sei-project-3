import User from '../models/user.js'


//*GET ALL USER
async function userIndex (req, res, next) {
  try {
    const user = await User.find()
    return res.status(200).json(user)
  } catch (err){
    next(err)
  }
}

//*POST USER
async function userCreate (req, res, next) {
  try {
    const newUser = await User.create(req.body)
    return res.status(201).json(newUser)
  } catch (err){
    next(err)
  }
}

//*GET SINGLE USER
async function userShow (req, res, next) {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    if (!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

//*DELETE USER
async function userDelete (req, res, next) {
  const { id } = req.params
  try {
    const userToDelete = await User.findById(id)
    if (!userToDelete) throw new Error()
    await userToDelete.remove()
    return res.sendStatus(204)
  } catch (err){
    next(err)
  }
}

//*EDIT USER
async function userUpdate (req, res, next){
  const { id } = req.params
  try {
    const userToEdit = await User.findById(id)
    if (!userToEdit) throw new Error()
    Object.assign(userToEdit, req.body)
    await userToEdit.save()
    return res.status(202).json(userToEdit)
  } catch (err){
    next(err)
  }
}

export default {
  index: userIndex,
  create: userCreate,
  show: userShow,
  delete: userDelete,
  update: userUpdate
}