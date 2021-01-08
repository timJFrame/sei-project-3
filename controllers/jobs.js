
import Job from '../models/job.js'


//*GET ALL JOBS
async function jobIndex (req, res) {
  const jobs = await Job.find()
  return res.status(200).json(jobs)
}

//*POST JOB
async function jobCreate (req, res) {
  try {
    const newJob = await Job.create(req.body)
    return res.status(201).json(newJob)
  } catch (err){
    console.log(err)
    return res.status(422).json(err)
  }
}

//*GET SINGLE JOB
async function jobShow (req, res) {
  const { id } = req.params
  try {
    const job = await Job.findById(id)
    if (!job) throw new Error()
    return res.status(200).json(job)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
}

//*DELETE JOB
async function jobDelete (req, res) {
  const { id } = req.params
  try {
    const jobToDelete = await Job.findById(id)
    if (!jobToDelete) throw new Error()
    await jobToDelete.remove()
    return res.sendStatus(204)
  } catch (err){
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
}

//*EDIT JOB
async function jobUpdate (req, res){
  const { id } = req.params
  try {
    const jobToEdit = await Job.findById(id)
    if (!jobToEdit) throw new Error()
    Object.assign(jobToEdit, req.body)
    await jobToEdit.save()
  } catch (err){
    console.log(err)
    return res.status(404).json( { message: 'Not Found' } )
  }
}

export default {
  index: jobIndex,
  create: jobCreate,
  show: jobShow,
  update: jobUpdate,
  delete: jobDelete,
}