import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nftcard from '../components/Nftcard'
import './Marketplace.css'

export default function Marketplace() {
  const [nfts, setNfts] = useState([]);

  useEffect(()=> {
    getNfts()
  },[])

  const getNfts = () => {
    axios.request({
      method: 'get',
      url: 'http://localhost:3030/offchain/nftmarket/allNFT',
      withCredentials: true
    })
    .then((res)=>{
      setNfts(res.data)
      console.log(res.data)
    })
    .catch((err) => {console.log(err)})
  }
  
  return (
    <div className='marketplace'>
      <div className='typo'>
        <div>만년필 구매 후 보상을 강화해보세요</div>
      </div>
      <div className='container'>
        {nfts.map((el, idx) => {
          return <Nftcard key={idx} 
            name={el.name} 
            description={el.description} 
            image={el.image} 
            NFTrewardFactor={el.NFTrewardFactor}
            tokenURI={el.tokenURI}
            price={el.price}
            attributes={el.attributes}
            />
        })}
      </div>
    </div>
  )
}
