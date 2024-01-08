// userReducer.js
const initialState = {
  userData: {},
  userInfo: null,
  error: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        userData: action.payload,
        loading: true,
        error: null,
        userInfo: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      console.error("Login failed:", action.payload); // 에러 콘솔 출력
      return {
        ...state,
        error: action.payload,
        loading: false,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default userReducer;
