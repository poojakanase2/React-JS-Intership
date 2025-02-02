import React from 'react'
import { Link } from 'react-router-dom'


const Order = () => {
  return (
    <div>
    <h1>Order</h1>
      <ul>
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/ContactUs">ContactUs</Link></li>
          <li><Link to="/Order">Order</Link></li>
        </ul>    
        </div>
  )
}

export default Order
