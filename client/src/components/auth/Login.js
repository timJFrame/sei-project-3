import React from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { useHistory } from 'react-router-dom'
import { BiLogInCircle } from 'react-icons/bi'
import { RiAlertFill } from 'react-icons/ri'


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

      history.push('/user/')
    } catch (err) {
      setError(true)
    }
  }

  const handleFocus = () => {
    setError(false)
  }

  return (
    <div className="container-general">
      <div className="glass-morphism card" style={{
        minWidth: '295px'
      }}>

        <form className="login-form s-b" onSubmit={handleSubmit}>
          <div className="fields center">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
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
                  type="password"
                  value={formdata.password}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </div>
              {error && <p className="field-error"><RiAlertFill color="rgb(201, 4, 4)" /><br />Incorrect Email or Password</p>}
            </div>
          </div>
          <div className="field card-body center half-height">
            <button type="submit"
              className="btn-submit-lg half-width "
              style={{ margin: '0.5rem 0 0.5rem 4.5rem' }}>
              Login < BiLogInCircle />
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login