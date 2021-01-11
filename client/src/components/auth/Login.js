import React from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { useHistory } from 'react-router-dom'

function Login(){
  const history = useHistory()

  const [formdata, setFormdata] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      console.log('submitted')
      const { data } = await loginUser(formdata)
      console.log('logged in')
      setToken(data.token)
      history.push('/jobs')
      
    } catch (err){
      console.log(err)
    }
  }

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  
  )
}

export default Login