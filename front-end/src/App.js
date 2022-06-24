import logo from './logo.svg';
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
import { AuthProvider } from './context/store';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className='app_body'>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/marketplace' element={<Marketplace />} />
                <Route path='*' element={<Notfound />} />
              </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
