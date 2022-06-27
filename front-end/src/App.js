import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Explore from './pages/Explore';
import Marketplace from './pages/Marketplace';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notfound from './pages/Notfound';
import { AuthContext } from './context/store';
import { useEffect, useReducer } from 'react';
import { authReducer, initialState} from './context/reducer';
import axios from 'axios';

function App() {
  const [authstate, dispatch] = useReducer(authReducer, initialState)
  useEffect(() => {
    check();
  },[])
  const check = async () =>{
    try{
    let res = await axios.request({
      method: 'GET',
      url: 'http://localhost:3030/offchain/auth/check',
      withCredentials: true
    })
    login(res.data)
  }
  catch(err){
    logout()
  }
  }
  const login = (user) => {
    dispatch({type: 'LOGIN', username: user.username})
  }
  
  const logout = () => {
    dispatch({type: 'LOGOUT'});
  }

  return (
    <AuthContext.Provider value={{authstate, login, logout}}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className='app_body'>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/mypage/*' element={<Mypage />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/marketplace' element={<Marketplace />} />
                <Route path='*' element={<Notfound />} />
              </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
