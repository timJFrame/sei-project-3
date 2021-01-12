import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getSingleJob, editJob } from '../../lib/api'
import useForm from '../../utils/useform'
import JobForm from './JobForm'

function EditJob(){
  const { id } = useParams()
  const history = useHistory()
  const { formdata, errors, handleChange, setFormdata, setErrors } = useForm({
    jobTitle: '',
    jobDescription: '',
    jobDeadline: '',
    jobPhoto: '',
    jobCategory: '',
    jobIsLive: 'true',
    jobFee: ''
  })


  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getSingleJob(id)
      setFormdata(data)
    }
    getData()
  }, [id, setFormdata])
	

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      console.log('starting handle submit')
      await editJob(id, formdata)
      history.push(`/jobs/${id}`)
    } catch (err){
      setErrors(err.response.data.errors)
    }
  }

  return (
    <JobForm 
      formdata={formdata}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  )
}

export default EditJob