import React, { createContext , useReducer} from 'react'
import {user} from './auth'
import { authReducer, initialState } from './reducer'

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const [authstate, dispatch] = useReducer(authReducer, initialState);

  const login = (user) => {
    dispatch({type: 'LOGIN', user:{username: user.username }})
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
