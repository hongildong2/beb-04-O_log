import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/store';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate();

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const { authstate } = useContext(AuthContext);

  const onUsernameHandler = (event) => {
    setUsername(event.currentTarget.value);
}

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value);
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value);
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
      <div className='title'>Signup</div>

      <div className='inputs'>

        <input type="username" value={Username} onChange={onUsernameHandler} placeholder="Username" />
        <input type="password" value={Password} onChange={onPasswordHandler}  placeholder="Password" />
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} placeholder="Confirm Password"/>

        <br />
        <div className='submit'>
          <button type="submit">
              로그인 하기
          </button>
        </div>

      </div>
    </form>


  )
}