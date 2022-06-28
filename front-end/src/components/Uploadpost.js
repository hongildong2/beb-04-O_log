import React, { useContext, useState } from 'react'
import axios from 'axios'
import './Uploadpost.css'
import { AuthContext, MessageContext } from '../context/store';

export default function Uploadpost(props) {
  const [link, setlink] = useState('')
  const {authstate} = useContext(AuthContext);
  const {notify} = useContext(MessageContext);


  const handlelink = (e) => {
    setlink(e.target.value)
  }

  //post 업로드 요청
  const handleSubmit = () => {
    if(!link) return;
    if(!authstate.auth) {
      notify('로그인 후 시도해 주세요', 'error')
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
      if(props.getMyOLG) props.getMyOLG();
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
