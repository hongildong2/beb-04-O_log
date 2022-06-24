import React, { useContext, useState, useEffect } from 'react'
//import { useDispatch } from 'react-redux';
//import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/store';
import './Login.css'

export default function Login() {
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)
  const { authstate } = useContext(AuthContext);

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

    const onUsernameHandler = (event) => {
      setUsername(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value);
  }

  //임시
  const onSubmitHandler = (evnet) => {
    login(Username, Password)
    navigate('/');//로그인 완료시 메인으로 이동
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
  


  return (
  <form className='form_container' onSubmit>
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
  </form>


  )
}