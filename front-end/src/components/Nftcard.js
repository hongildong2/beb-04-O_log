import React from 'react'
import './Nftcard.css'

export default function Nftcard(props) {
  
  const handleClick = () => {

  }

  return (
    <div className='nftcard' onClick={handleClick}>
      <img className='nftcard_image' src='logo192.png' />
      <div className='nftcard_content'>
        <span className='name'>이름</span>
        <span className='reward'>리워드</span>
        <span className='price'>가격</span>
      </div>
    </div>
  )
}
