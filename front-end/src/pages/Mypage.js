import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import MyComments from '../components/MyComments'
import Mynft from '../components/Mynft'
import Orginfo from '../components/Olginfo'
import UploadComment from '../components/UploadComment'
import Uploadpost from '../components/Uploadpost'
import { AuthContext } from '../context/store'
import './Mypage.css'


export default function Mypage() {
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
    
  },[])

  //location.pathname의 포스트 호출(인증 상관없이)
  const getMyPosts = () => {
    axios.request({
      method:'GET',
      url: 'http://localhost:3030/offchain/posts/mypage',
      withCredentials: true
    })
    .then((res) => {
      console.log(res.data)
      setMyPosts(res.data)
    })
    .catch((err) => {
      //console.log(err)
    })
  }

  return (
    <div className='mypage'>
      {location.pathname.slice(8) === authstate.username ?
      <div className='mypage_form'>
      <Uploadpost getMyPosts={getMyPosts} />
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
            <Orginfo />
          :''}
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
              return <Card key={idx} postImageUrl={el.postImageUrl} blogLink={el.blogLink} title={el.title} created_at={el.created_at} username={el.username}/>
            })}
          </div>
        </div>
        <div className='mypage_comment'>
          <div className='title'>
            <div>Comments</div>
          </div>
          <UploadComment />
          <MyComments />
        </div>
      </div>
    </div>
  )
}
