import React, { useContext, useState } from 'react'
//import { useDispatch } from 'react-redux';
//import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/store';
import './Login.css'

export default function Login() {
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)

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
  /*
  const onSubmitHandler = (event)=> {
    console.log('submit1');
    event.preventDefault(); // 페이지 리프레시가 안됨
    console.log('submit2');


    let body = {
      email: Email,
      password: Password
    }
    console.log('body');

    dispatch(loginUser(body)).then(response => {
      console.log('body2', response);
        if (response.payload.loginSuccess) {
          console.log('ping1');
            //props.history.push('/');
            //props.navigate('/');
            navigate('/');
            console.log('ping2');
        } else {
            alert('Error˝')
        }
    })
    console.log('body3');
    //axios.post('/api/user/login', body).then(body)

  }
*/


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