import React from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/app">App</Link></li>
        </ul>
    </div>
  )
}

export default Dashboard
