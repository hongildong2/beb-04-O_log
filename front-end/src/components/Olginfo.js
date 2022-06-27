import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/store'
import './Olginfo.css'

export default function OLGinfo() {
  const [myOLG, setMyOLG] = useState(0)
  const {authstate} = useContext(AuthContext);
  const temp = {
    total: 20,
    received: 15
  } //내 OLG get 요청
  useEffect(() => {
    getMyOLG()
  }, [])

  const getMyOLG = () => {
    //user 정보 받아오기
    // axios.request({
    //   method: 'GET',
    //   url: '',
    //   headers:{'Authorization': `Bearer ${토큰}`}
    // })
    // .then((res) => {
    //   console.log(res.data);
    //   setMyOLG(res.data)
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
  }

  const handleSync = () => { //post 요청

    if(!authstate.username) {
      alert('로그인이 필요합니다.')
      return;
    }
    axios.request({
      method: 'POST',
      url:'http://localhost:3030/onchain/walletSync',
      data:{
        username: authstate.username
      },
      withCredentials: true
    })
    .then((res) => {
      console.log(res)
      getMyOLG();
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className='olg_info'>
        <div className='olg_element sub'>total</div>
        <div className='olg_element big'>{temp.total} OLG</div>
        <div className='olg_element sub'>사용가능한 OLG {temp.received}</div>
        <div className='olg_element section'>
          <button onClick={handleSync}>sync</button>
        </div>
    </div>
  )
}
