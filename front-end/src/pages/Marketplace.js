import React from 'react'
import Nftcard from '../components/Nftcard'
import './Marketplace.css'

export default function Marketplace() {
  let temp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  return (
    <div className='marketplace'>
      <div className='typo'>
        <div>만년필 구매 후 보상을 강화해보세요</div>
      </div>
      <div className='container'>
        {temp.map((el, idx) => {
          return <Nftcard key={idx} num={el} />
        })}
      </div>
    </div>
  )
}
