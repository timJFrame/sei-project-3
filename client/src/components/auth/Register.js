import React from 'react'
import useForm from '../../utils/useform'
import { registerUser } from '../../lib/api'
import { useHistory } from 'react-router-dom'
import UserForm from '../users/UserForm'

function Register() {
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


  const { formdata, handleChange, errors, setErrors } = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    photo: '',
    city: '',
    bio: '',
    isAuctioneer: false,
    bidderCategories: [],
    bidderIsAvailable: false
  })


  const handleMultiItems = (selected, name) => {
    const selectedItems = selected ? selected.map(item => item.value) : []
    handleChange({ target: { name, value: selectedItems } })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(formdata)
      console.log(formdata)
      history.push('/login')
    } catch (err) {
      console.log
      setErrors(err.response.data.errors)
    }
  }

  return (
    <>
      <div className="container-general"
      >
        {!userType &&
          <div className="card center glass-morphism">
            <div className="user-choice-box">
              <h3>Select Account Type</h3>
              <div className="buttons ">
                <button className="btn" onClick={handleUserChoice}>Bidder</button>
                <button className="btn" onClick={handleUserChoice}>Auctioneer</button>
              </div>
            </div>
          </div>
        }{userType &&
          <UserForm
            handleUserChoice={handleUserChoice}
            userType={userType}
            selectOptions={selectOptions}
            handleMultiItems={handleMultiItems}
            handleSubmit={handleSubmit}
            formdata={formdata}
            handleChange={handleChange}
            errors={errors}
          />
        }
      </div>

    </>
  )
}

export default Register
