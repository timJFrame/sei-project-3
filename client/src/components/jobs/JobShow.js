/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams, Link, useHistory }  from 'react-router-dom'
import { getSingleJob, deleteJob, createBid, getBids, createComment, getComments } from '../../lib/api'
import { isOwner } from '../../lib/auth'
import useform from '../../utils/useform'


function JobShow(){
  const [job, setJob] = React.useState(null)
  const [bids, setBids] = React.useState(null)
  const [bidmessage, setBidmessage] = React.useState(null)
  const [comments, setComments] = React.useState(null)
  const [commentMessage, setCommentmessage] = React.useState(null)
  const isJobOwner = isOwner(job?.jobOwner._id)
  console.log(isJobOwner)
  const { id } = useParams()
  const history = useHistory()

  //*Getting a single job
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleJob(id)
        console.log(data)
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
  const { formdata, handleChange, setFormdata, setErrors } = useform({
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
      setFormdata({ text: '', fee: '' })
    } catch (err){
      setErrors(err)
    }
  }

   
 
  
  

  //*Post comment form data
  const [commentdata, setCommentdata] = React.useState({
    text: ''
  })

  //*Handle gets user input from comment form field
  const handleCommentChange = (e) => {
    setCommentdata({ ...commentdata, [e.target.name]: e.target.value })
  }

  //* Handles submitting new comments
  const handleCommentSubmit = async (e) => {
    try {
      e.preventDefault()
      await createComment(id, commentdata)
      setCommentmessage('Your comment was been made')
      setCommentdata({ text: '' })
      const { data } = await getSingleJob(id)
      console.log(data)
      setJob(data)
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
          {
            job.jobComments.map(comment => (
              <div key={comment._id}>
                <p>Comment: {comment.text}</p>
              </div>
            ))
          }
          {
            job.jobBids.map(bid => (
              <div key={bid._id}>
                <p>Bidder Name: {bid.owner.name}</p>
                <p>Amount Bidded: {bid.fee}</p>
                <p>Bidder Message: {bid.text}</p>
              </div>
            ))
          }
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
            <button type="submit">Place Bid</button>
          </div>
          <div className="show-bids-container">
          
          </div>
        </form>
      </div>
      <div className="comment-form-container" onSubmit={handleCommentSubmit}>
        <form className="comment-form" >
          <div className="field">
            <label>Add a comment</label>
            <div className="control">
              <textarea
                placeholder="Add comment here"
                name="text"
                value={commentdata.text}
                onChange={handleCommentChange}
              />
            </div>
          </div>
          <p>{commentMessage}</p>
          <div className="submit-comment-button-div">
            <button type="submit">Submit Comment</button>
          </div>
        </form>
      </div>
      
		 </div>
		
  )
}

export default JobShow