let localUsername = localStorage.getItem('currentUser')? localStorage.getItem('currentUser') : '';
let localToken = localStorage.getItem('token')? localStorage.getItem('token') : '';


export const initialState = {
  auth: localUsername? true :false,
  username: undefined || localUsername,
  token: undefined || localToken
}

export const authReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN':
      return{
        ...state,
        auth: true,
        username: action.user.username,
        token: action.user.token
      }
    case 'LOGOUT': 
      return{
        ...state,
        auth: false,
        username: '',
        token:''
      }
    default:
      throw new Error('error')
  }
}