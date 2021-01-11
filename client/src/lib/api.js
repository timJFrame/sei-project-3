import axios from 'axios'

const baseUrl = '/api'

//*Get All Jobs
export function getAllJobs(){
  return axios.get(`${baseUrl}/jobs`)
}

//*Get Single Jobs
export function getSingleJob(id){
  return axios.get(`${baseUrl}/jobs/${id}`)
}

//*Create new Job
export function createJob(formdata){
  return axios.post(`${baseUrl}/jobs`, formdata)
}

//*Get a job
export function editJob(id, formdata){
  return axios.put(`${baseUrl}/jobs/${id}`, formdata)
}

//*Delete a job
export function deleteJob(id){
  return axios.delete(`${baseUrl}/jobs/${id}`)
}