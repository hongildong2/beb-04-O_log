import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Orginfo.css'

export default function Orginfo() {
  const [myORG, setMyORG] = useState(0)
  const temp = {
    total: 20,
    received: 15
  } //내 org get 요청
  useEffect(() => {
    getMyORG()
  }, [])

  const getMyORG = () => {
    //user 정보 받아오기
    // axios.request({
    //   method: 'GET',
    //   url: '',
    //   headers:{'Authorization': `Bearer ${토큰}`}
    // })
    // .then((res) => {
    //   console.log(res.data);
    //   setMyORG(res.data)
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
  }

  const handleSync = () => { //post 요청
    //username 받아오기
    // axios.request({
    //   method: 'POST',
    //   url:'',
    //   headers:{'Authorization': `Bearer ${토큰}`},
    //   body:{
    //     username: {}
    //   }
    // })
    // .then((res) => {
    //   console.log(res)
    //   getMyORG();
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }

  return (
    <div className='org_info'>
        <div className='org_element sub'>total</div>
        <div className='org_element big'>{temp.total} ORG</div>
        <div className='org_element sub'>사용가능한 ORG {temp.received}</div>
        <div className='org_element section'>
          <button onClick={handleSync}>sync</button>
        </div>
    </div>
  )
}
