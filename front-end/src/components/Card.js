import React from 'react'
import './Card.css'

export default function Card(props) {
  const tempUrl='https://github.com/codestates/beb-04-O_log'

  return (
    <div className='card'>
      <div className='card_reward'>Reward</div>
      <a href={tempUrl} target="_blank">
        <img className='card_image' src='logo192.png' />
      </a>
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
