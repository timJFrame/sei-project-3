import React from 'react'
import { useParams, Link, useHistory }  from 'react-router-dom'
import { getSingleJob, deleteJob, createBid } from '../../lib/api'
import useform from '../../utils/useform'


function JobShow(){
  const [job, setJob] = React.useState(null)
  const [bidmessage, setBidmessage] = React.useState(null)
  const { id } = useParams()
  const history = useHistory()


 
  
  //*Getting a single job
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

  //*Handling deleteing job
  const handleDelete = async () => {
    try {
      await deleteJob(id)
      history.push('/jobs')
    } catch (err){
      console.log(err)
    }
  }

  //*Getting form data for placnig bid
  const { formdata, handleChange } = useform({
    text: '',
    fee: ''
  })
  

  //*Submitting bid function
  const handleBidSubmit  = async (e) => {
    try {
      e.preventDefault()
      const { data } = await createBid(id, formdata)
      console.log(data.job)
      setBidmessage(`Your bid of £${formdata.fee} has been placed`)
    } catch (err){
      console.log(err)
    }
  }

  //*Get bids


 


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
      <div className="job-bid-container" onSubmit={handleBidSubmit}>
        <form className="job-bid-form">
          <div className="field">
            <label className="bid-label">Place a Bid</label>
            <div className="control">
              <textarea
                placeholder="Any info about your bid"
                className="input"
                name="text"
                onChange={handleChange}
                value={formdata.text}
              />
            </div>
          </div>
          <div className="field">
            <label className="bid-label">Place a Bid</label>
            <div className="control">
              <input
                placeholder="Bid Amount"
                className="input"
                name="fee"
                onChange={handleChange}
                value={formdata.fee}
              />
            </div>
          </div>
          <p>{bidmessage}</p>
          <div className="bid-submit-button-container">
            <button>Place Bid</button>
          </div>
        </form>
      </div>

      
		 </div>
		
  )
}

export default JobShow