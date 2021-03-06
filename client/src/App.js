import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//*Icons
import { IconContext } from 'react-icons'

//*Shared Folder
import Home from './components/shared/Home'
import Nav from './components/shared/Nav'

//*Auth 
import Register from './components/auth/Register'
import Login from './components/auth/Login'

//*Job Folder
import JobIndex from './components/jobs/JobIndex'
import JobShow from './components/jobs/JobShow'
import JobNew from './components/jobs/JobNew'
import JobEdit from './components/jobs/JobEdit'

//*User
import UserIndex from './components/users/UserIndex'
import UserEdit from './components/users/UserEdit'
import UserShow from './components/users/UserShow'


function App() {
  return (
    <>
      <IconContext.Provider value={{ color: 'white', style: { verticalAlign: 'middle' } }}>

        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/jobs/:id/edit" component={JobEdit} />
            <Route path="/jobs/new" component={JobNew} />
            <Route path="/jobs/:id" component={JobShow} />
            <Route path="/jobs/" component={JobIndex} />
            <Route path="/users/edit" component={UserEdit} />
            <Route path="/users/" component={UserIndex} />
            <Route path="/user" component={UserShow} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>

        </BrowserRouter>

      </IconContext.Provider>
    </>
  )
}


export default App
