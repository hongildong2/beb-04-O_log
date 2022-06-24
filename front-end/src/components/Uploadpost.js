import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/store';
import './Uploadpost.css'

export default function Uploadpost() {
  const {authstate} = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    title: '',
    link:''
  })
  const handleSubmit = () => { //인증 여부 확인 후 post 요청
    if( !inputs.title || !inputs.link ) {
      alert('제목, 링크 모두 입력해주세요');
      return;
    }
    // axios.request({
    //   method: 'POST',
    //   url:'',
    //   headers: {'Authroization': `Bearer ${토큰}`}
    // })
    // .then((res) => {
    //   console.log(res);
    //   setInputs({title: '', link: ''})
    // })
    // .catch((err) => console.log(err))
        {/*withCredentials:true */}
      
  }
  const handleInputs = (e) => {
    if(e.target.id === 'title') setInputs({...inputs, title: e.target.value});
    else setInputs({...inputs, link: e.target.value})
  }
  return (
    <div className='form_container'>
      <div className='title'>Upload Your Post</div>
      <div className='input_section'>
        <div className='inputs'>
          <input placeholder='제목' id='title' value={inputs.title} onChange={handleInputs} />
          <input placeholder='링크' id='link' value={inputs.link} onChange={handleInputs} />
        </div>
        <div className='submit'>
          <button onClick={handleSubmit}>upload</button>
        </div>
      </div>
    </div>
  )
}
