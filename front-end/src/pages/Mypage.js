import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import Card from '../components/Card'
import Mynft from '../components/Mynft'
import Orginfo from '../components/Orginfo'
import Uploadpost from '../components/Uploadpost'
import { AuthContext } from '../context/store'
import './Mypage.css'

export default function Mypage() {
  const [myPosts, setMyPosts] = useState([])
  const { authstate } = useContext(AuthContext);


  useEffect(()=>{
    getMyPosts();
  },[])

  const getMyPosts = () => {
    axios.request({
      method:'GET',
      url: 'http://localhost:3030/offchain/posts/mypage',
      withCredentials: true
    })
    .then((res) => {
      setMyPosts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className='mypage'>
      <div className='mypage_form'>
        <Uploadpost />
      </div>
      <div className='mypage_container'>
        <div className='mypage_info'>
          <div className='title'>
            <div>오늘의 {authstate.username} 님</div>
          </div>
          <Orginfo />
          <div className='posts_info'>
            <span>올린 포스트 </span>
            <span>{myPosts.length} 개</span>
          </div>
          <div className='posts_info'>
            잔디
          </div>
          <Mynft/>
        </div>
        <div className='mypage_posts'>
          <div className='title'>Your Posts</div>
          <div className='mypost_container'>
            {myPosts.map((el, idx) => {
              //아직 pull 전이라 미흡
              return <Card key={idx} created_at={el.created_at} username={el.username}/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
