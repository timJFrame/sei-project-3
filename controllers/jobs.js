import Job from '../models/job.js'
import { notFound, forbidden, notBidder } from '../lib/errorHandler.js'


//*GET ALL JOBS
async function jobIndex (req, res, next) {
  try {
    const jobs = await Job.find().populate('jobOwner')
    return res.status(200).json(jobs)
  } catch (err){
    next(err)
  }
}

//*POST JOB
async function jobCreate (req, res, next) {
  try {
    const newJobData = { ...req.body, jobOwner: req.currentUser._id }
    const newJob = await Job.create(newJobData)
    return res.status(201).json(newJob)
  } catch (err){
    next(err)
  }
}

//*GET SINGLE JOB
async function jobShow (req, res, next) {
  const { id } = req.params
  try {
    const job = await Job.findById(id).populate('jobOwner').populate('jobBids.owner').populate('jobComments.owner')
    if (!job) throw new Error(notFound)
    return res.status(200).json(job)
  } catch (err) {
    next(err)
  }
}

//*DELETE JOB
async function jobDelete (req, res, next) {
  const { id } = req.params
  try {
    const jobToDelete = await Job.findById(id)
    if (!jobToDelete) throw new Error(notFound)
    if (!jobToDelete.jobOwner.equals(req.currentUser._id)) throw new Error(forbidden)
    await jobToDelete.remove()
    return res.sendStatus(204)
  } catch (err){
    next(err)
  }
}

//*EDIT JOB
async function jobUpdate (req, res, next){
  const { id } = req.params
  try {
    const jobToEdit = await Job.findById(id)
    if (!jobToEdit) throw new Error(notFound)
    if (!jobToEdit.jobOwner.equals(req.currentUser._id)) throw new Error(forbidden)
    Object.assign(jobToEdit, req.body)
    await jobToEdit.save()
    return res.status(202).json(jobToEdit)
  } catch (err){
    next(err)
  }
}

//*PLACE COMMENT
async function jobCommentCreate(req, res, next) {
  const { id } = req.params
  try {
    const job = await Job.findById(id)
    if (!job) throw new Error(notFound)
    const newComment = { ...req.body, owner: req.currentUser._id }
    job.jobComments.push(newComment)
    await job.save()
    return res.status(201).json(job)
  } catch (err) {
    next(err)
  }
}

//*DELETE COMMENT
async function jobCommentDelete(req, res, next) {
  const { id, commentId } = req.params
  try {
    const job = await Job.findById(id)
    if (!job) throw new Error(notFound)
    const commentToDelete = job.jobComments.id(commentId)
    if (!commentToDelete) throw new Error(notFound)

    // If this is not the person who made the comment and not the person who posted the job, throw error
    if (!commentToDelete.owner.equals(req.currentUser._id) && !job.jobOwner.equals(req.currentUser._id)) throw new Error(forbidden)
    await commentToDelete.remove()
    await job.save()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

//*PLACE BID
async function jobBidCreate(req, res, next) {
  const { id } = req.params
  try {
    const job = await Job.findById(id)
    if (!job) throw new Error(notFound)

    // if owner is an auctioneer throw new error: you must be a bidder to place a bid
    if (req.currentUser.isAuctioneer === true) throw new Error(notBidder)

    // Place bid
    const newBid = { ...req.body, owner: req.currentUser._id }
    job.jobBids.push(newBid)
    await job.save()
    return res.status(201).json(job)

  } catch (err) {
    next(err)
  }
}

//*DELETE BID
async function jobBidDelete(req, res, next) {
  const { id, bidId } = req.params
  try {
    const job = await Job.findById(id)
    if (!job) throw new Error(notFound)
    const bidToDelete = job.jobBids.id(bidId)
    if (!bidToDelete) throw new Error(notFound)

    // If this is not the person who made the comment, throw error
    if (!bidToDelete.owner.equals(req.currentUser._id)) throw new Error(forbidden)
    await bidToDelete.remove()
    await job.save()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

export default {
  index: jobIndex,
  create: jobCreate,
  show: jobShow,
  update: jobUpdate,
  delete: jobDelete,
  createComment: jobCommentCreate,
  deleteComment: jobCommentDelete,
  createBid: jobBidCreate,
  deleteBid: jobBidDelete,
}