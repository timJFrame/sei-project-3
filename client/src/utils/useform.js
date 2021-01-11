import React from 'react'

function useform(intialState) {
  const [formdata, setFormdata] = React.useState(intialState)
  const [errors, setErrors] = React.useState(intialState)


  const handleChange = (e) => {
    const nextState = { ...formdata, [e.target.name]: e.target.value }
    const nextErrorState = { ... errors, [e.target.name]: '' }
    setFormdata(nextState)
    setErrors(nextErrorState)
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