import User from '../models/user.js'
import { notFound } from '../lib/errorHandler.js'


//*GET ALL USERS
async function userIndex (req, res, next) {
  try {
    const user = await User.find()
    return res.status(200).json(user)
  } catch (err){
    next(err)
  }
}

//* GET SINGLE USER
async function userProfile (req, res, next) {
  const { id } = req.params
  try {
    const user = await User.findById(id).populate('createdJobs').populate('favouritedBy').populate('favouriteUsers')
    if (!user) throw new Error(notFound)

    return res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

//* DELETE USER
async function userDelete (req, res, next) {
  // id from the URL
  const { id } = req.params
  try {
    const userToDelete = await User.findById(id)
    if (!userToDelete) throw new Error(notFound)

    await userToDelete.remove()
    return res.sendStatus(204)
  } catch (err){
    next(err)
  }
}

//* EDIT USER
async function userUpdate (req, res, next){
  const { id } = req.params
  try {
    const userToEdit = await User.findById(id)
    if (!userToEdit) throw new Error(notFound)

    Object.assign(userToEdit, req.body)
    await userToEdit.save()
    return res.status(202).json(userToEdit)
  } catch (err){
    next(err)
  }
}

//* FAVOURITE A USER
async function favouriteUser (req, res, next) {
  // get the user id from request
  const { id } = req.params

  try {
    // We search for the user we want to favourite by their id
    const userToFavourite = await User.findById(id) // search for user to favourite (by id)
    // If we can't find that user, throw error
    if (!userToFavourite) throw new Error(notFound)

    // We declare an add favourite const carrying the favourited boolean and add the owner to it
    const addFavourite = { ...req.body, owner: req.currentUser._id }

    //push this into the array of favouritedBy
    userToFavourite.favouritedBy.push(addFavourite)
    await userToFavourite.save()

    return res.status(200).json(userToFavourite)
  } catch (err) {
    next(err)
  }
}

export default {
  index: userIndex,
  show: userProfile,
  delete: userDelete,
  update: userUpdate,
  favourite: favouriteUser
}