import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import MyComments from '../components/MyComments'
import Mynft from '../components/Mynft'
import MyPosts from '../components/MyPosts'
import Orginfo from '../components/Olginfo'
import Uploadpost from '../components/Uploadpost'
import { AuthContext } from '../context/store'
import './Mypage.css'


export default function Mypage() {
  const [myOLG, setMyOLG] = useState(0)
  const [received, setReceived] = useState(0);
  const [myPosts, setMyPosts] = useState([])
  const { authstate } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    console.log(authstate)
    // if(!authstate.auth){
    //   console.log("your not login back to main");
    //   navigate('/');

    // }else{
    //   console.log("login true");
    //   getMyPosts();
    // }
    getMyPosts();
    getMyOLG();
    
  },[location.pathname])

  //location.pathname의 포스트 호출(인증 상관없이)
  const getMyPosts = () => {
    axios.request({
      method:'GET',
      url: `http://localhost:3030/offchain/posts/mypage/${location.pathname.slice(8,)}`,
      withCredentials: true
    })
    .then((res) => {
      //console.log(res.data)
      setMyPosts(res.data)
    })
    .catch((err) => {
      //console.log(err)
    })
  }

  //내 OLG 요청(status)
  const getMyOLG = () => {
    if(!(authstate.username === location.pathname.slice(8,))) return;
    axios.request({
      method: 'GET',
      url: 'http://localhost:3030/offchain/userinfo/status',
      withCredentials: true
    })
    .then((res) => {
      //console.log(res.data);
      setMyOLG(res.data.expectedToken + res.data.receivedToken)
      setReceived(res.data.receivedToken);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //OLG Sync 요청
  const handleSync = () => {

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
      alert('')
    })
  }

  return (
    <div className='mypage'>
      {location.pathname.slice(8) === authstate.username ?
      <div className='mypage_form'>
      <Uploadpost getMyPosts={getMyPosts} getMyOLG={getMyOLG} />
    </div> :
    ''}
      <div className='mypage_container'>
        <div className='mypage_info'>
          <div className='title'>
            Profile
          </div>
          <div className='username'>
            <div className='label'>username</div>
            <div>{location.pathname.slice(8)}</div>
          </div>
          {location.pathname.slice(8) === authstate.username ?
            <Orginfo myOLG={myOLG} received={received} handleSync={handleSync}/>
          :''}
          <div className='posts_info'>
            <span>올린 포스트 </span>
            <span>{myPosts.length} 개</span>
          </div>
          <Mynft/>
        </div>
        <MyPosts myPosts={myPosts}/>
        <div className='mypage_comment'>
          <div className='title'>
            <div>Comments</div>
          </div>
          <MyComments />
        </div>
      </div>
    </div>
  )
}
