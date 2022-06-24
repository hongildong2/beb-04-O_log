import axios from 'axios';
import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/store';
import './Navbar.css'

export default function Navbar() {
  const {authstate, logout} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogout = () => {
    axios.request({
      method: 'POST',
      url:'http://localhost:3030/offchain/auth/logout',
      withCredentials:true
    })
    .then((res) => {
      logout()
      navigate('/')
    })
    .catch((err) => {
      console.log(err);
    })
  }
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
        {authstate.auth ? 
          <span>
            <Link to='mypage'><span className='navbar_link'>my page</span></Link>
            <span className='navbar_link' onClick={handleLogout}>logout</span>
          </span>
          :
          <span>
            <Link to='login'><span className='navbar_link'>log in</span></Link>
            <Link to='signup'><span className='navbar_link'>sign up</span></Link>
          </span>
        }
      </div>
    </div>
  )
}
