import React, { useEffect } from 'react'
import Card from '../components/Card'
import './Explore.css'

export default function Explore() {
  let temp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

  return (
    <div className='explore'>
      <div className='container'>
        {temp.map((el, idx) => {
          return <Card key={idx} num={el} />
        })}
      </div>
    </div>
  )
}
