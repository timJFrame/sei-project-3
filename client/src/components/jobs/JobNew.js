import React from 'react'
import { createJob } from '../../lib/api'
import { useHistory } from 'react-router-dom'
import useForm from '../../utils/useform'
import JobForm from './JobForm'



function JobNew() {
  const history = useHistory()
  const { formdata, handleChange, errors, setErrors } = useForm({
    jobTitle: '',
    jobDescription: '',
    jobDeadline: '',
    jobPhoto: '',
    jobCategory: '',
    jobIsLive: 'true',
    jobFee: ''
  })


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await createJob(formdata)
      history.push(`/jobs/${data._id}`)
    } catch (err) {
      setErrors(err.response.data)
    }
  }


  return (
    <div className="container-general">

      <JobForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formdata={formdata}
        errors={errors}
      />
    </div>
  )
}

export default JobNew