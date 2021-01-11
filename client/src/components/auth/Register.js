import React from 'react'
import Select from 'react-select'
import ImageUpload from '../shared/ImageUpload'
import { registerUser } from '../../lib/api'
import { useHistory } from 'react-router-dom' 

function Register(){
  const history = useHistory()

  const [userType, setUserType] = React.useState(null)

  const selectOptions = [
    { value: 'Appe Developer', label: 'Apple Developer' },
    { value: 'Andriod Developer', label: 'Andriod Developer' },
    { value: 'Back-end Developer', label: 'Back-End Developer' },
    { value: 'Front-End Devloper', label: 'Front-End Developer' },
    { value: 'Game Developer', label: 'Game Developer Developer' },
    { value: 'UI Designer', label: 'UI Developer Developer' }
  ]


  const handleUserChoice = (e) => {
    setUserType(e.target.innerHTML.toLowerCase())
  }

 
  const [formdata, setFormData]	= React.useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    photo: '',
    city: '',
    isAuctioneer: false,
    bidderCategories: [],
    bidderIsAvailable: false
  })

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked :
      e.target.value
    setFormData({ ...formdata, [e.target.name]: value })
  }

  const handleMultiItems = (selected, name) => {
    const selectedItems = selected ? selected.map(item => item.value) : []
    handleChange({ target: { name, value: selectedItems } })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(formdata)
      history.push('/login')
    } catch (err){
      console.log(err)
    }
  }

  return (
    <>
      <div className="register-question-buttons"> 
        <p>Please Select Account Type</p>
        <button onClick={handleUserChoice}>Auctioneer</button>
        <button onClick={handleUserChoice}>Bidder</button>
      </div>
      {userType &&
      <div className="register-form-container">
        <form className="create-user-form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name </label>
            <div className="control">
             
              <input
                placeholder="Name"
                name="name"
                value={formdata.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
             
              <input
                placeholder="Email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password </label>
            <div className="control">
              <input
                placeholder="Password"
                name="password"
                value={formdata.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password Confirmation</label>
            <div className="control">
              <input
                placeholder="Password Confirmation"
                name="passwordConfirmation"
                value={formdata.passwordConfirmation}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Bio</label>
            <div className="control">
             
              <textarea
                placeholder="Bio"
                name="bio"
                value={formdata.bio}
                onChange={handleChange}
              />
            </div>
          </div>
        
          <div className="field">
            <label className="label">City</label>
            <div className="control">
             
              <input
                placeholder="City"
                name="city"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Are uou a Auctioneer</label>
            <div className="control">
             
              <input
                type="checkbox"
                name="isAuctioneer"
                onChange={handleChange}
                checked={formdata.isAuctioneer}
              />
            </div>
          </div>
          {userType === 'bidder' &&
            <>
              <div className="field">
                <label className="label">Skills</label>
                <div className="control">

                  <Select  
                    options={selectOptions}
                    isMulti
                    onChange={selected => handleMultiItems(selected, 'bidderCategories' )}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Are you Avaliable Now </label>
                <div className="control">
                  <input
                    type="checkbox"
                    name="bidderIsAvailable"
                    value={formdata.bidderIsAvailable}
                    onChange={handleChange}
                  />
                </div>
              </div>
             
            </>
          }
          <div className="field">
            <ImageUpload 
              value={formdata.photo}
              name="photo"
              onChange={handleChange}
              className="input"
              labelText="profileImage"
            />
          </div>
          <div className="field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      }
    </>
  )
}

export default Register
