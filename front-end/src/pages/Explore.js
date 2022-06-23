import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import './Explore.css'

export default function Explore() {
  let temp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14] //모든 포스트 요청
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = () => {
    // axios.request({
    //   method:'GET',
    //   url:''
    // })
    // .then((res) => {
    //   console.log(res.data)
    //   setPosts(res.data);
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }

  return (
    <div className='explore'>
      <div className='container'>
        {temp.map((el, idx) => {
          return <Card key={idx} num={el} />
        })}
      </div>
    </div>
  )
}
