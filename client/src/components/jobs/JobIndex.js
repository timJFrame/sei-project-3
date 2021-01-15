import React from 'react'
import { getAllJobs } from '../../lib/api'
import JobCard from './JobCard'
import JobCarousel from './JobCarousel'

function JobIndex() {
  const [jobs, setJobs] = React.useState(null)
  const [chosencategory, setChosencategory] = React.useState(null)


  const handleCategoryClick = (e) => {
    const selectedCategory = e.target.id
    setChosencategory(selectedCategory)
  }

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllJobs()
        let filterCategory
        if (!chosencategory){
          filterCategory = data
        } else {
          filterCategory = data.filter(category => {
            return category.jobCategory === chosencategory
          })
        }
        setJobs(filterCategory)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  
  }, [chosencategory])



  return (
    <>
      <JobCarousel 
        handleCategoryClick={handleCategoryClick}
      
      />
      
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
  )
}
export default JobIndex