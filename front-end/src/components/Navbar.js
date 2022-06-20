import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='explore'>explore</Link>
      <Link to='marketplace'>marketplace</Link>
      <Link to='mypage'>mapage</Link>
      <Link to='login'>login</Link>
      <Link to='signup'>signup</Link>
    </div>
  )
}
