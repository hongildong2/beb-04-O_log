import React from 'react'
import './Comment.css'

export default function Comment(props) {
  return (
    <div className='comment'>
      <div className='content'>
        {props.content}
      </div>
      <div className='info'>
        <span className='username'>{props.username}</span>
        <span className='created_at'>{props.created_at.slice(0,10)+' '+props.created_at.slice(11,19)}</span>
      </div>
    </div>
  )
}
