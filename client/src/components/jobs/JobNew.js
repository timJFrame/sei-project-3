import React from 'react'
import { createJob } from '../../lib/api'
import { useHistory } from 'react-router-dom'

import ImageUpload from '../shared/ImageUpload'

function JobNew (){
  const history = useHistory()

  const [formdata, setFormdata ] = React.useState({
    jobTitle: '',
    jobDescription: '',
    jobDeadline: '',
    jobPhoto: '',
    jobCategory: '',
    jobIsLive: 'true',
    jobFee: ''
  })


  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await createJob(formdata)
      history.push(`/jobs/${data._id}`)
    } catch (err){
      console.log(err)
    }
  }


  return <div className="create-job-form-container">
    <form className="create-job-form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Job Title</label>
        <div className="control">
          <input
            className="input"
            name="jobTitle"
            onChange={handleChange}
            value={formdata.jobTitle}
          />
        </div>
      </div> 
      <div className="field">
        <label className="label">Job Description</label>
        <div className="control">
          <textarea
            className="input"
            name="jobDescription"
            onChange={handleChange}
            value={formdata.jobDescription}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Job Deadline</label>
        <div className="control">
          <input
            className="input"
            name="jobDeadline"
            onChange={handleChange}
            value={formdata.jobDeadline}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Job Category</label>
        <div className="select">
          <select name="jobCategory" onChange={handleChange} value={formdata.jobCategory}>
            <option disabled></option>
            <option value="Android-Dev">Andriod Devloper</option>
            <option value="Apple-Dev">Apple Developer</option>
            <option value="Back-End">Back-End Developer</option>
            <option value="Front-End">Front-End Develope</option>
            <option value="Game-Dev">Game Developer</option>
            <option value="UI-Dev">UI Developer</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label className="label">Job Fee</label>
        <div className="control">
          <input
            className="input"
            name="jobFee"
            onChange={handleChange}
            value={formdata.jobFee}
          />
        </div>
      </div>
      <div className="field">
        <ImageUpload 
          value={formdata.jobPhoto}
          name="jobPhoto"
          onChange={handleChange}
          labelText="Profile Image"
        />
      </div>
      <div className="field">
        <button type="submit">Submit</button>
      </div>
      
    </form>
  </div>
}

export default JobNew