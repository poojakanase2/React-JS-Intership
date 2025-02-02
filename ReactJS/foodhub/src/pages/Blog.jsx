import React from 'react'
import { Link } from 'react-router-dom'


const Blog = () => {
  return (
    <div>
    <h1>Blog</h1>
      <ul>
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/ContactUs">ContactUs</Link></li>
          <li><Link to="/Order">Order</Link></li>
        </ul>    
        </div>
  )
}

export default Blog