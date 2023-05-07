// authReducer.js

const initialState = {
    isLoggedIn: false,
    school: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoggedIn: true,
          school: action.payload,
          error: null,
        };
      case 'LOGIN_ERROR':
        return {
          ...state,
          isLoggedIn: false,
          school: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  