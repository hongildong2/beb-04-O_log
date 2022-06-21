import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const tempAuthentication = true; //인증여부
  const location = useLocation();
  return (
    <div className='navbar'>
      <Link to='/'>
        <div className='title'>오늘의 Log</div>
      </Link>
      <div className='navbar_links'>
        {location.pathname === '/' ?
          '':
          <span>
            <Link to='explore'><span className='navbar_link'>explore</span></Link>
            <Link to='marketplace'><span className='navbar_link'>market place</span></Link>
          </span>
        }
        {tempAuthentication ? 
          <Link to='mypage'><span className='navbar_link'>my page</span></Link>:
          <span>
            <Link to='login'><span className='navbar_link'>log in</span></Link>
            <Link to='signup'><span className='navbar_link'>sign up</span></Link>
          </span>
        }
      </div>
    </div>
  )
}
