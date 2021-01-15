import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { getSingleUser, editUser } from '../../lib/api'
import useForm from '../../utils/useform'
import UserForm from '../users/UserForm'


function UserEdit() {
  const history = useHistory()
  const { pathname } = useLocation()


  const [userType, setUserType] = React.useState(null)

  const handleUserChoice = (e) => {
    setUserType(e.target.innerHTML.toLowerCase())
  }

  const selectOptions = [
    { value: 'Appe Developer', label: 'Apple Developer' },
    { value: 'Andriod Developer', label: 'Andriod Developer' },
    { value: 'Back-end Developer', label: 'Back-End Developer' },
    { value: 'Front-End Devloper', label: 'Front-End Developer' },
    { value: 'Game Developer', label: 'Game Developer Developer' },
    { value: 'UI Designer', label: 'UI Developer Developer' }
  ]

  const { formdata, handleChange, errors, setErrors, setFormdata } = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    bio: '',
    photo: '',
    city: '',
    isAuctioneer: false,
    bidderCategories: [],
    bidderIsAvailable: false
  })


  const handleMultiItems = (selected, name) => {
    const selectedItems = selected ? selected.map(item => item.value) : []
    handleChange({ target: { name, value: selectedItems } })
  }

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getSingleUser()
      setFormdata(data)
    }
    getData()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await editUser(formdata)
      history.push('/user')

    } catch (err) {
      console.log(err)
      setErrors(err.response.data.errors)
    }
  }
 
  
  return (
    <>
      <UserForm
        handleUserChoice={handleUserChoice}
        userType={userType}
        selectOptions={selectOptions}
        handleMultiItems={handleMultiItems}
        handleSubmit={handleSubmit}
        formdata={formdata}
        handleChange={handleChange}
        errors={errors}
        pathname={pathname}
      />


    </>
  )
}

export default UserEdit