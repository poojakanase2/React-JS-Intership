import React from 'react'

const MainNavbar = () => {
  return (
  
    <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="Order">Order</a></li>
                <li><a href="Blog">Blog</a></li>
                <li><a href="ContactUs">ContactUs</a></li>
            </ul>
            <h1 class="logo">FoodHub</h1>
        </div>
    </nav>

  )
}

export default MainNavbar
