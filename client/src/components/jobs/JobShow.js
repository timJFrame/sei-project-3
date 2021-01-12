import React from 'react'
import { useParams, Link, useHistory }  from 'react-router-dom'
import { getSingleJob, deleteJob } from '../../lib/api'


function JobShow(){
  const [job, setJob] = React.useState(null)
  const { id } = useParams()
  const history = useHistory()
 

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleJob(id)
        setJob(data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [id])

  const handleDelete = async () => {
    try {
      await deleteJob(id)
      history.push('/jobs')
    } catch (err){
      console.log(err)
    }
   
  }


  return (
    <div className="job-show-container glass-morphism"> 
      {job ?
        <>
          <>
            <h2>{job.jobTitle}</h2>
            <img src={job.jobPhoto} alt={job.jobTitle}/>
            <p>{job.jobDescription}</p>
            <p>{job.jobDeadline}</p>
            <p>{job.jobCategory}</p>
            <p>{job.jobFee}</p>
          </>
          <div className="job-show-buttons">
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
            <button><Link to={`/jobs/${id}/edit`}>Edit</Link></button>
          </div>
        </>
        :
        <h2>Loading</h2>

      }
		 </div>
		
  )
}

export default JobShow