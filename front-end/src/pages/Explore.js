import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import './Explore.css'

export default function Explore() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [])

  //모든 포스트 요청
  const getPosts = () => {
    axios.request({
      method:'GET',
      url:'http://localhost:3030/offchain/posts'
    })
    .then((res) => {
      //console.log(res.data)
      setPosts(res.data);
    })
    .catch((err) => {
      //console.log(err)
    })
  }

  return (
    <div className='explore'>
      <div className='container'>
        {posts.map((el, idx) => {
          return <Card key={idx} postImageUrl={el.postImageUrl} blogLink={el.blogLink} title={el.title} created_at={el.created_at} username={el.username} />
        })}
      </div>
    </div>
  )
}
