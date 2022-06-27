import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
<<<<<<< HEAD
import './Login.css';
=======
import './Login.css'
import { AuthContext } from '../context/store';
>>>>>>> d4070e2c830b80afb2aa9ea108a381935f1603e1

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
      //console.log("you already login");
      navigate('/');
    }else{
      //console.log("카몬 mate");
    }
    return () => {
    }
  }, [])

<<<<<<< HEAD
  const onSubmitHandler = (event)=> {
    
=======
  const onSubmitHandler = ()=> {
    // console.log('submit1');
    // event.preventDefault(); // 페이지 리프레시가 안됨
    // console.log('submit2');


>>>>>>> d4070e2c830b80afb2aa9ea108a381935f1603e1
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
      if(err.response.status === 401) alert('잘못된 비밀번호 입니다.')
      else alert('Error')
    })
  }

<<<<<<< HEAD
=======
  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      onSubmitHandler();
    }
  }



>>>>>>> d4070e2c830b80afb2aa9ea108a381935f1603e1
  return (
    <div className='login'>
  <div className='form_container'>
    <div className='title'>Login</div>

    <div className='inputs'>

      <input type="username" value={Username} onChange={onUsernameHandler} placeholder="Username" onKeyPress={onKeyPress} />
      <input type="password" value={Password} onChange={onPasswordHandler}  placeholder="Password" onKeyPress={onKeyPress} />
      
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