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