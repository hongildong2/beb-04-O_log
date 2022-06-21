import React, { useEffect } from 'react'
import Card from '../components/Card'
import Mynft from '../components/Mynft'
import Orginfo from '../components/Orginfo'
import Uploadpost from '../components/Uploadpost'
import './Mypage.css'

export default function Mypage() {
  let temp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  
  //메인페이지에 컴포넌트 올릴 때 함수 위치 조정 필요
  const handleSubmit = () => {

  }

  const handleSync = () => {
    //요청
  }

  return (
    <div className='mypage'>
      <div className='mypage_form'>
        <Uploadpost handleSubmit={handleSubmit}/>
      </div>
      <div className='mypage_container'>
        <div className='mypage_info'>
          <div className='title'>
            <div>오늘의 eunmin 님</div>
          </div>
          <Orginfo handleSync={handleSync}/>
          <div className='posts_info'>
            <span>올린 포스트 </span>
            <span>30 개</span>
          </div>
          <div className='posts_info'>
            잔디
          </div>
          <Mynft data={temp}/>
        </div>
        <div className='mypage_posts'>
          <div className='title'>Your Posts</div>
          <div className='mypost_container'>
            {temp.map((el, idx) => {
              return <Card key={idx} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
