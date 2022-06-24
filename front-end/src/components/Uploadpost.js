import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/store';
import './Uploadpost.css'

export default function Uploadpost() {
  const {authstate} = useContext(AuthContext);
  const [link, setlink] = useState('')

  const handleSubmit = () => { //인증 여부 확인 후 post 요청
    if(!link) return;
    if(!authstate.auth) {
      alert('로그인 필요')
      return;
    }
    axios.request({
      method: 'POST',
      url:'http://localhost:3030/offchain/posts',
      body:{blogLink: link},
      withCredentials: true
    })
    .then((res) => {
      console.log(res);
      setlink('')
    })
    .catch((err) => console.log(err))
  }

  const handlelink = (e) => {
    setlink(e.target.value)
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
