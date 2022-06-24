import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import Card from '../components/Card'
import Mynft from '../components/Mynft'
import Orginfo from '../components/Orginfo'
import Uploadpost from '../components/Uploadpost'
import { AuthContext } from '../context/store'
import './Mypage.css'
import { useNavigate } from "react-router-dom";


export default function Mypage() {
  let temp= [1,2,3,4,5,6,7,8,9,10,11]
  const [myPosts, setMyPosts] = useState()
  const { authstate } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("authstate",authstate);
  useEffect(()=>{
    
    if(!authstate.auth){
      console.log("your not login back to main");
      navigate('/');

    }else{
      console.log("login true");
      getMyPosts();
    }
    
  },[])

  const getMyPosts = () => {
    //username 받아옴
    // axios.request({
    //   method:'GET',
    //   url: '',
    //   headers: {'Authorization': `Bearer ${토큰}`}
    // })
    // .then((res) => {
    //   setMyPosts(res.data)
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }

  return (
    <div className='mypage'>
      <div className='mypage_form'>
        <Uploadpost />
      </div>
      <div className='mypage_container'>
        <div className='mypage_info'>
          <div className='title'>
            <div>오늘의 eunmin 님</div>
          </div>
          <Orginfo />
          <div className='posts_info'>
            <span>올린 포스트 </span>
            <span>{temp.length} 개</span>
          </div>
          <div className='posts_info'>
            잔디
          </div>
          <Mynft/>
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
