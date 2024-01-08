// userActions.js
export const loginRequest = (userData) => ({
  type: "LOGIN_REQUEST",
  payload: userData,
});

export const loginSuccess = (userInfo) => ({
  type: "LOGIN_SUCCESS",
  payload: userInfo,
});

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
