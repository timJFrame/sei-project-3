import React from 'react'
import { getAllJobs } from '../../lib/api'
import JobCard from './JobCard'



function JobIndex(){

  const [jobs, setJobs] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllJobs()
        setJobs(data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])
	
 
	
  return (
    <div className="job-index-container">
      {jobs ?
        jobs.map(job => (
          <JobCard key={job._id}  {...job}/>
        ))
        :
        <h2>Loading</h2>
      }

			

	 </div>
  )

}

export default JobIndex