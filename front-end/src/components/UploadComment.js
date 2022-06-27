import {useContext, useState} from 'react'
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../context/store';
import './UploadComment.css'

export default function UploadComment() {
  const [input, setInput] = useState('');
  const location = useLocation();
  const {authstate} = useContext(AuthContext);

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    //로그인상태인지 확인
    //location.pathname.slice(8,) page 주인
    //요청
    // axios.request({
    //   method: 'POST',
    //   url:'',
    //   data:{
    //     username: authstate.username,//작성자
    //     content: input
    //   },
    //   withCredentials: true
    // })
    // .then((res) => {
    //   console.log(res)
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }

  return (
    <div className='upload_comment'>
      <div className='input'>
        <input type='text' value={input} onChange={handleInput} placeholder='댓글 추가...'/>
      </div>
      <button onClick={handleClick}>add</button>
    </div>
  )
}
