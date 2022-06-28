

export const initialState = {
  auth: false,
  username: undefined
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