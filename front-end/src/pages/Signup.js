import React, { useState, useEffect, useContext } from 'react'
//import { useDispatch } from 'react-redux';
//import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from "react-router-dom";
import './Signup.css'
import axios from 'axios';
import { AuthContext } from '../context/store';

export default function Signup() {
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const {authstate} = useContext(AuthContext)

  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")


  useEffect(() => {

    if(authstate.auth){
      console.log("you already login");
      navigate('/');

  
    }else{
      console.log("카몬 mate");
    }
  
  }, [])


  const onUsernameHandler = (event) => {
    setUsername(event.target.value);
}

  const onPasswordHandler = (event) => {
      setPassword(event.target.value)
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.target.value)
  }


  const onSubmitHandler = () => {

    if (Password !== ConfirmPassword) {
        return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }

    let body = {
        username: Username,
        password: Password,
    }

    axios.request({
      method:'POST',
      url:'http://localhost:3030/offchain/auth/register',
      data: body
    })
    .then((res) => {
      console.log(res.data)
      navigate('/login')
    })
    .catch((err) => {
      if(err.response.status === 409) {
        alert('이미 존재하는 username 입니다.')
      }
      else{
      alert('Failed to sign up')
      }
    })
  }





  return (
    <div className='signup'>
    <div className='form_container'>
      <div className='title'>Signup</div>

      <div className='inputs'>

        <input type="username" value={Username} onChange={onUsernameHandler} placeholder="Username" />
        <input type="password" value={Password} onChange={onPasswordHandler}  placeholder="Password" />
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} placeholder="Confirm Password"/>

        <br />
        <div className='submit'>
          <button type="submit" onClick={onSubmitHandler}>
            회원가입
          </button>
        </div>

      </div>
    </div>
    </div>

  )
}