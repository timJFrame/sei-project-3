import React from 'react'

class App extends React.Component {
  async componentDidMount() {
    try {
      const responseJobs = await fetch('/api/jobs')
      const dataJobs = await responseJobs.json()
      console.log(dataJobs)

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return <h1>Hello world!</h1>
  }
}

export default App
