import React from 'react'
import { getAllJobs } from '../../lib/api'
import JobCard from './JobCard'
import JobCarousel from './JobCarousel'

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
        let filterCategory
        if (!selectedCategory){
          filterCategory = data
        } else {
          filterCategory = () => data.filter(category => {
            return category.jobCategory === selectedCategory
          })
        }
       
        setJobs(filterCategory)
      
      } catch (err) {
        console.log(err)
      }
    }
    getData()
   
  }, [])

 

  return (
<<<<<<< HEAD
    <>
      <JobCarousel />
      
      <div className="container-general">
        {jobs ?
          jobs.map(job => (
            <JobCard key={job._id}  {...job} />
          ))
          :
          <h2>Loading</h2>
        }



      </div>
    </>
=======
    <div className="container-general">
      {jobs ?
        jobs.map(job => (
          <JobCard key={job._id}  {...job} />
        ))
        :
        <h2>Loading</h2>
      }
    </div>
>>>>>>> development
  )
}
export default JobIndex