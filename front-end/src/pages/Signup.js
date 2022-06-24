import React, { useState } from 'react'
//import { useDispatch } from 'react-redux';
//import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from "react-router-dom";
import './Signup.css'

export default function Signup() {
  //const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onUsernameHandler = (event) => {
    setUsername(event.currentTarget.value);
}

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value)
  }
  /*
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
        return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }

    let body = {
        email: Email,
        password: Password,
        name: Name
    }
    dispatch(registerUser(body))
        .then(response => {
            if (response.payload.success) {
              navigate('/login');
            } else {
                alert("Failed to sign up")
            }
        })
    }
    */


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