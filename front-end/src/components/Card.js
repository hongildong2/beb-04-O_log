import React from 'react'
import './Card.css'

export default function Card(props) {
  const tempUrl='https://github.com/codestates/beb-04-O_log'

  return (
    <div className='card'>
      <div className='card_reward'>Reward</div>
      <a href={tempUrl} target="_blank">
        <img className='card_image' src={props.postImageUrl} />
      </a>
      <div className='card_content'>
        <div className='card_content_main'>
          <span className='title'>{props.title}</span>
          <div className='created_at'>
            <span className='created_at_element'>{props.created_at.slice(0,10)}</span>
          </div>
        </div>
        <div className='divider'></div>
        <div className='user'>
          <img className='image' src='logo192.png' />
          <span className='username'>{props.username}</span>
        </div>
      </div>
    </div>
  )
}
