import React from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { useHistory } from 'react-router-dom'

function Login() {
  const history = useHistory()
  const [error, setError] = React.useState(false)
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
      console.log(data)
      setToken(data.token)

      history.push('/users/')
    } catch (err) {
      setError(true)
    }
  }

  const handleFocus = () => {
    setError(false)
  }

  return (
    <div className="container-general">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">

            <input
              placeholder="Email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              onFocus={handleFocus}
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
              onFocus={handleFocus}
            />
          </div>
          {error && <p className="error">Sorry your username or passowrd is incorrect</p>}
        </div>
        <div className="field">
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>

  )
}

export default Login