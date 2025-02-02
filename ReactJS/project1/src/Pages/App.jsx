import React from 'react'
import { Link } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <h1>App</h1>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/app">App</Link></li>
        </ul>
    </div>
  )
}

export default App
