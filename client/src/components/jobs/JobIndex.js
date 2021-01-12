import React from 'react'
import { getAllJobs } from '../../lib/api'
import JobCard from './JobCard'

function JobIndex() {
  let selectedCategory
  const [jobs, setJobs] = React.useState(null)
 

  const getCategory = () => {
    selectedCategory = window.localStorage.getItem('catergory')
  }

  getCategory()
  
  console.log(selectedCategory)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllJobs()
        const filterCategory = () => data.filter(category => {
          return category.jobCategory === selectedCategory
        })
        setJobs(filterCategory)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <div className="job-index-container">
      {jobs ?
        jobs.map(job => (
          <JobCard key={job._id}  {...job} />
        ))
        :
        <h2>Loading</h2>
      }



    </div>
  )

}

export default JobIndex