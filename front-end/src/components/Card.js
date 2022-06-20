import React from 'react'
import './Card.css'

export default function Card(props) {
  
  const handleClick = () => {

  }

  return (
    <div className='card' onClick={handleClick}>
      <div className='card_reward'>Reward</div>
      <img className='card_image' src='logo192.png' />
      <div className='card_content'>
        <span className='title'>제목</span>
        <span className='created_at'>날짜</span>
        <div className='divider'></div>
        <div className='user'>
          <img className='image' src='logo192.png' />
          <span className='username'>username</span>
        </div>
      </div>
    </div>
  )
}
