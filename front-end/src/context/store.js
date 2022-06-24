import React, { createContext , useReducer} from 'react'
import {user} from './auth'
import { authReducer, initialState } from './reducer'

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const [authstate, dispatch] = useReducer(authReducer, initialState);
  const login = (id, password) => {
    console.log(id, password)
    if(id === user.id && password === user.password) {
      dispatch({type: 'LOGIN', user:{username: user.id, token: 'sdf'}})
      localStorage.setItem('currentUser', user.id)
      localStorage.setItem('token', 'token')
    };
  }
  const logout = () => {
    dispatch({type: 'LOGOUT'});
    localStorage.removeItem('currentUser')
  }

  return(
    <AuthContext.Provider value={{authstate, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
