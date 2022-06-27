import React, { useContext, useState } from 'react'
import axios from 'axios'
import './Uploadpost.css'
import { AuthContext } from '../context/store';

export default function Uploadpost(props) {
  const [link, setlink] = useState('')
  const {authstate} = useContext(AuthContext);


  const handlelink = (e) => {
    setlink(e.target.value)
  }

  const handleSubmit = () => { //인증 여부 확인 후 post 요청
    if(!link) return;
    if(!authstate.auth) {
      alert('로그인 필요')
      return;
    }
    axios.request({
      method: 'POST',
      url:'http://localhost:3030/offchain/posts',
      data: {blogLink: link},
      withCredentials: true
    })
    .then((res) => {
      alert('업로드 완료!')
      if(props.getMyPosts) props.getMyPosts();
      setlink('')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className='form_container'>
      <div className='title'>Upload Your Post</div>
      <div className='input_section'>
        <div className='inputs'>
          <input placeholder='링크' id='link' value={link} onChange={handlelink} />
        </div>
        <div className='submit'>
          <button onClick={handleSubmit}>upload</button>
        </div>
      </div>
    </div>
  )
}
