import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarLinks">
          <Link to="/about">About App</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
  )
}

export default Navbar