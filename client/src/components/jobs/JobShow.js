import React from 'react'
import { useParams }  from 'react-router-dom'
import { getSingleJob } from '../../lib/api'


function JobShow(){

  const [job, setJob] = React.useState(null)

  const { id } = useParams()

 

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

  console.log(job)

  return (
    <div className="job-show-container glass-morphism"> 
      {job ?
        <>
          <h2>{job.jobTitle}</h2>
          <img src={job.jobPhoto} alt={job.jobTitle}/>
          <p>{job.jobDescription}</p>
          <p>{job.jobDeadline}</p>
          <p>{job.jobCategory}</p>
          <p>{job.jobFee}</p>
        </>
        :
        <h2>Loading</h2>

      }
		 </div>
		
  )
}

export default JobShow