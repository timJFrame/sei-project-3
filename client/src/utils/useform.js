import React from 'react'

function useform(intialState) {
  const [formdata, setFormdata] = React.useState(intialState)
  const [errors, setErrors] = React.useState(intialState)


  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked :
      e.target.value
    const nextState = { ...formdata, [e.target.name]: value }
    const nextErrorState = { ... errors, [e.target.name]: '' }
    setFormdata(nextState)
    setErrors(nextErrorState)
    console.log(e.target.name)
  }
	
	
  return {
    formdata,
    errors,
    handleChange,
    setFormdata,
    setErrors
  }
}

export default useform