import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='title'>오늘의 Log</div>
      <div className='navbar_links'>
        <Link to='explore'><span className='navbar_link'>explore</span></Link>
        <Link to='marketplace'><span className='navbar_link'>market place</span></Link>
        <Link to='mypage'><span className='navbar_link'>my page</span></Link>
        <Link to='login'><span className='navbar_link'>log in</span></Link>
        <Link to='signup'><span className='navbar_link'>sign up</span></Link>
      </div>
    </div>
  )
}
