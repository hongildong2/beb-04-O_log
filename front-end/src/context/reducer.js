
import {Cookies} from 'react-cookie';
const cookies = new Cookies()
const getCookie = () => {
  return cookies.get('JWT_token')
}
export const initialState = {
  auth: getCookie() ? true :false,
  username: undefined
}

export const authReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN':
      return{
        ...state,
        auth: true,
        username: action.user.username,

      }
    case 'LOGOUT': 
      return{
        ...state,
        auth: false,
        username: '',
      }
    default:
      throw new Error('error')
  }
}