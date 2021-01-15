import axios from 'axios'
import { getToken, getUserId } from './auth'

//*Base URL for all
const baseUrl = '/api'

//*Sets a users tokem into the request header  
function headers(){
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

//*Get All Jobs
export function getAllJobs(){
  return axios.get(`${baseUrl}/jobs`)
}

//*Get Single Jobs
export function getSingleJob(id){
  return axios.get(`${baseUrl}/jobs/${id}`, headers())
}

//*Create new Job
export function createJob(formdata){
  return axios.post(`${baseUrl}/jobs`, formdata, headers())
}

//*Edit a job
export function editJob(id, formdata){
  return axios.put(`${baseUrl}/jobs/${id}`, formdata, headers())
}

//*Delete a job
export function deleteJob(id){
  return axios.delete(`${baseUrl}/jobs/${id}`, headers())
}

//* Get All Users
export function getAllUsers(){
  return axios.get(`${baseUrl}/users`)
}

//*Register a user
export function registerUser(formdata){
  return axios.post(`${baseUrl}/register`, formdata)
}

//*Login a user
export function loginUser(formdata){
  return axios.post(`${baseUrl}/login`, formdata)
}

//*Get a single User
export function getSingleUser(){
  return axios.get(`${baseUrl}/users/${getUserId()}`, headers())
}

//* Edit a user
export function editUser(formdata){
  return axios.put(`${baseUrl}/users/${getUserId()}`, formdata, headers())
}

//*Create a bid
export function createBid(id, formdata){
  return axios.post(`${baseUrl}/jobs/${id}/bids`, formdata, headers())
}

//*Get all bids
export function getBids(id){
  return axios.get(`${baseUrl}/jobs/${id}/bids`, headers())
}

//*Post a comment
export function createComment(id, formdata){
  return axios.post(`${baseUrl}/jobs/${id}/comments`, formdata, headers())
}

//*Get all comments
export function getComments(id){
  return axios.get(`${baseUrl}/jobs/${id}/comments`, headers())
}