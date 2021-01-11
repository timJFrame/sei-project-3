import React from 'react'
import { getAllJobs } from '../../lib/api'
import JobCard from './JobCard'




function JobIndex( { apple } ){

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
	
  console.log(apple)
	
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