import * as actionTypes from './actionTypes';

export const updateUser = (user: UserObject) => {
  return {
    type: actionTypes.UPDATE_USER,
    user,
  };
};

export const updateAuth = (auth: AuthObject) => {
  return {
    type: actionTypes.UPDATE_AUTH,
    auth,
  };
};

export const logoutAuth = () => {
  return {
    type: actionTypes.LOGOUT_AUTH,
  };
};

export const deleteAuth = () => {
  return {
    type: actionTypes.DELETE_AUTH,
  };
};

export const updateErrorState = () => {
  return {
    type: actionTypes.UPDATE_ERROR_STATE,
  };
};
export const loginEmailPassword = (loginEmailPasswordObject: any) => {
  return {
    type: actionTypes.REQUEST_LOGIN_EMAIL_PASSWORD,
    data: loginEmailPasswordObject,
  };
};

export const loginGoogleSigin = (loginGoolgeSiginObject: any) => {
  return {
    type: actionTypes.REQUEST_LOGIN_GOOGLE_SIGIN,
    data: loginGoolgeSiginObject,
  };
};

export const loginApplseSignin = (loginAppleSiginObject: any) => {
  return {
    type: actionTypes.REQUEST_LOGIN_APPLE_SIGIN,
    data: loginAppleSiginObject,
  };
};

export const registerEmailPassword = (registerEmailPasswordObject: any) => {
  return {
    type: actionTypes.REQUEST_SIGNUP_EMAIL_PASSWORD,
    data: registerEmailPasswordObject,
  };
};

export const registerGoogleSigin = (registerGoogleSiginObject: any) => {
  return {
    type: actionTypes.REQUEST_SIGNUP_GOOGLE_SIGIN,
    data: registerGoogleSiginObject,
  };
};

export const registerAppleSigin = (registerAppleSiginObject: any) => {
  return {
    type: actionTypes.REQUEST_SIGNUP_APPLE_SIGIN,
    data: registerAppleSiginObject,
  };
};
