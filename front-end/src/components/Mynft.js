import React from 'react'
import Nftcard from './Nftcard'
import './Mynft.css'


export default function Mynft() {
  const data = [1,2,3,4] //내 nft 요청
  return (
    <div className='mynfts'>
      <div className='title'>NFTs</div>
      <div className='mynfts_container'>
        {data.map((el, idx) => {
          return <Nftcard key={idx}/>
        })}
      </div>
    </div>
  )
}
