import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/store';
import axios from 'axios';
import './Login.css';

export default function Login() {

  const navigate = useNavigate();
  const {authstate, login} = useContext(AuthContext);

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const onUsernameHandler = (event) => {
    setUsername(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value);
  }

  useEffect(() => {

    if(authstate.auth){
      console.log("you already login");
      navigate('/');
    }else{
      console.log("카몬 mate");
    }
    return () => {
    }
  }, [])

  const onSubmitHandler = (event)=> {
    
    let body = {
      username: Username,
      password: Password
    }

    axios.request({
      method:'POST',
      url:'http://localhost:3030/offchain/auth/login',
      data: body,
      withCredentials: true
    })
    .then((res) => {
      const user = res.data;
      login({id: user.id, username: user.username})
      navigate('/')
    })
    .catch((err) => {
      console.log(err)
      alert('Error')
    })
  }

  return (
    <div className='login'>
  <div className='form_container'>
    <div className='title'>Login</div>

    <div className='inputs'>

      <input type="username" value={Username} onChange={onUsernameHandler} placeholder="Username" />
      <input type="password" value={Password} onChange={onPasswordHandler}  placeholder="Password" />
      
      <br />
      <div className='submit'>
        <button type="submit" onClick={onSubmitHandler}>
            로그인 하기
        </button>
      </div>

    </div>
  </div>
  </div>

  )
}