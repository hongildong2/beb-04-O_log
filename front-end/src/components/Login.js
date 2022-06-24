import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from "react-router-dom";
//import { withRouter } from 'react-router-dom';


function LoginPage(props) {
  //console.log("loginpage");
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();


  const onEmailHandler = (event)=> {
    //console.log("onEmailHandler");
    setEmail(event.currentTarget.value);
    //console.log("onEmailHandler End");
  }


  const onPasswordHandler = (event)=> {
    //console.log("onPasswordHandler");
    try{
      setPassword(event.currentTarget.value);

    }catch (error){
      console.error(error);
    }

    //console.log("onPasswordHandler End");
  }

  //const navigate = useNavigate();
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

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh'
    }}>

        <form style={{display: 'flex', flexDirection: 'column' }}
          onSubmit={onSubmitHandler}
        >
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler} />
          <label>Password</label>
          <input type="password" value={Password} onChange={onPasswordHandler} />

          <br />
          <button>
            Login
          </button>
        </form>
        
        </div>
  )
}

export default LoginPage;
