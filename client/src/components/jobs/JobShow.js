/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { getSingleJob, deleteJob, createBid, createComment, editBid, editJob, messageUser } from '../../lib/api'
import { isOwner } from '../../lib/auth'
import useform from '../../utils/useform'


function JobShow() {
  const [job, setJob] = React.useState(null)
  const [bidmessage, setBidmessage] = React.useState(null)
  const [commentMessage, setCommentmessage] = React.useState(null)
  const isJobOwner = isOwner(job?.jobOwner._id)
  const { id } = useParams()
  const history = useHistory()
  const [noBids, setNoBids] = React.useState(null)

  //*Getting a single job
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleJob(id)
        setJob(data)
        console.log(data)
      } catch (err) {
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
    } catch (err) {
      console.log(err)
    }
  }

  //*Getting form data for placnig bid
  const { formdata, handleChange, setFormdata, setErrors } = useform({
    text: '',
    fee: ''
  })


  //*Submitting bid function
  const handleBidSubmit = async (e) => {
    try {
      e.preventDefault()
      const { data } = await createBid(id, formdata)
      console.log(data.job)
      setBidmessage(`Your bid of £${formdata.fee} has been placed`)
      setFormdata({ text: '', fee: '' })
    } catch (err) {
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
      setJob(data)
    } catch (err) {
      console.log(err)
    }
  }

  //*Handles accepting bid
  const handleAcceptingBid = async (bidId, bidOwnerId) => {
    try {
      await editJob(id, { jobIsLive: false })
      await editBid(id, bidId, { status: 'accepted' })
      await messageUser(bidOwnerId, { text: 'your bid has been accpeted' })
      const { data } = await getSingleJob(id)
      setNoBids(true)
      setJob(data)
    } catch (err){
      console.log(err)
    }
  }


  return (
    <div className="container-general">
      <div className="glass-morphism card" style={{
        width: '80vw'
      }}>
        {job ?
          <>
            <div>
              <h2 style={{ margin: '20px 0' }}>{job.jobTitle}</h2>
              <hr style={{ width: '80%', marginLeft: '10%' }} />
              <div className="main-container">
                <div className="container-row">

                  <div className="card-image-container">
                    <img src={job.jobPhoto} alt={job.jobTitle} className="card-image"
                      style={{
                        height: '400px'
                      }}
                    />
                  </div>
                  <div className="right-container">
                    <div className="small-container" >
                      <p>Description: <br /><span>{job.jobDescription}</span></p>
                      <p style={{ marginTop: '5px' }}>Job Owner: <span>{job.jobOwner.name}</span></p>
                      <p style={{ marginTop: '5px' }}>Category: <span>{job.jobCategory}</span></p>
                    </div>
                    <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                      <div className="card-footer-element">
                        <p>Deadline: <span>{job.jobDeadline}</span></p>
                      </div>
                      <div className="card-footer-element">
                        <p>Fee: <span>{job.jobFee}£</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container-row">
                  <div className="container-jobs-sm">
                    {
                      job.jobComments.map(comment => (
                        <div key={comment._id} >
                          <p style={{
                            color: 'white',
                            textAlign: 'left',
                            marginLeft: '10%'
                          }}><strong>{comment.owner.name} commented:</strong></p>
                          <p style={{
                            color: 'white',
                            textAlign: 'left',
                            marginLeft: '10%'
                          }}>{comment.text}</p>
                          <br/>
                        </div>
                      ))
                    }
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
                        <p style={{ color: 'white' }}>{commentMessage}</p>
                        <div>
                          <button type="submit" className="btn-submit">Submit Comment</button>
                        </div>
                      </form>
                    </div>

                  </div>

                  <div className="container-jobs-sm">

                    <div className="job-bid-container" onSubmit={handleBidSubmit}>
                      <form className="job-bid-form">
                        <div className="field">
                          <label className="bid-label shadow" style={{
                            color: 'dar'
                          }}>Place a Bid</label>
                          <div className="control">
                            <textarea
                              placeholder="Any info about your bid"
                              className="input"
                              name="text"
                              onChange={handleChange}
                              value={formdata.text}
                              style={{
                                maxWidth: '200px',
                                minHeight: '140px'
                              }}
                            />
                          </div>
                        </div>



                        <div className="field">
                          <div className="bid-inputs">
                            <label className="bid-label" style={{
                              color: 'grey'
                            }}>Select a Value</label>
                            <div className="control">
                              <input
                                placeholder="Bid Amount"
                                className="input"
                                name="fee"
                                type="number"
                                min="1"
                                onChange={handleChange}
                                value={formdata.fee}
                                style={{
                                  maxWidth: '140px'
                                }}
                              />
                            </div>
                          </div>
                          <p style={{ color: 'white' }}>{bidmessage}</p>
                          <div className="">
                            <button type="submit"
                              className="btn-submit"
                              style={{
                                marginTop: '5px'
                              }} >Place Bid</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {isJobOwner &&

                <div className="card-body" style={{
                  height: 'auto',
                  justifyContent: 'center',
                  padding: '5px'
                }}>

                  <div className="job-show-buttons">
                    <button className="btn-cancel-lg" onClick={handleDelete}>
                      Delete Job
                    </button>
                    <button className="btn-secondary-lg">
                      <Link style={{ color: 'white' }} to={`/jobs/${id}/edit`}>
                        Edit Job
                      </Link>
                    </button>
                    {job.jobBids.map(bid => (
                      <>
                        <hr />
                        <div key={bid._id} style={{
                          display: 'flex',
                          justifyContent: 'flex-start'

                        }}>
                          <div style={{
                            display: 'flex',
                            textAlign: 'left',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            padding: ' 0 10px'
                          }}>
                            <div>
                              <p>Bidder Name: <span>{bid.owner.name}</span></p>
                              <p>Amount Bidded: <span>{bid.fee}£</span></p>
                              <p>Bidder Message: <span>{bid.text}</span></p>
                              <p>Bid Status: <span>{bid.status}</span></p>
                            </div>
                            {!noBids &&
                              <div className="button-accept">
                                <button className="btn-submit" onClick={() => handleAcceptingBid(bid._id, bid.owner._id)}>Accept this Bid</button>
                              </div>
                            }
                          </div>

                        </div>
                      </>
                    ))
                    }
                  </div>
                </div>
              }

            </div>
          </>
          :
          <h2>Loading</h2>
        }
      </div>
    </div >
  )
}
export default JobShow