import axios from 'axios';

const check = async () => {
  try{
  let res =await axios.request({
    method: 'GET',
    url: 'http://localhost:3030/offchain/auth/check',
    withCredentials: true
  })
  let data = res.data;
  console.log(data)
  return data
}catch(e){
  console.log(e)
}
}


export const initialState = {
  auth: check()? true : false,
  username: check().username 
}

export const authReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN':
      return{
        ...state,
        auth: true,
        username: action.username,

      }
    case 'LOGOUT': 
      return{
        ...state,
        auth: false,
        username: undefined,
      }
    default:
      throw new Error('error')
  }
}

export const initialState_m = {
  messages: [],
}

export const messageReducer = (state, action) => {
  switch(action.type){
    case 'ENQUEUE_MESSAGE':
      return {
        ...state, messages: [...state.messages, action.payload]
      }
    case 'DEQUEUE_MESSAGE':
      return {
        ...state, messages: state.messages.slice(1)
      }
    default:
      return state;
  }
}