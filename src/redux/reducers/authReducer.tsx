import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState: any = {
  authUserObject: {
    isLogin: false,
    isLogout: false,
    isDelete: false,
    isRegister: false,
    authObjectEmail: '',
    authObjectToken: '',
    loginPrompt: {},
    authError: '',
    registerAuthError: '',
  },
};

const AuthReducer = (state: any = initialState, action: AnyAction): any => {
  switch (action.type) {
    case actionTypes.UPDATE_AUTH:
      return {
        ...state,
        authUserObject: action.auth,
      };
    case actionTypes.SET_REQUEST_LOGIN_EMAIL_PASSWORD:
      return {
        ...state,
        authUserObject: action.data,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        authUserObject: {
          isLogin: false,
          isLogout: false,
          isDelete: false,

          isRegister: false,
          authObjectEmail: '',
          authObjectToken: '',
          loginPrompt: {},
          authError: action.data,
          registerAuthError: '',
        },
      };
    case actionTypes.REGISTER_ERROR:
      return {
        ...state,
        authUserObject: {
          isLogin: false,
          isLogout: false,
          isRegister: false,
          isDelete: false,

          authObjectEmail: '',
          authObjectToken: '',
          loginPrompt: {},
          authError: '',
          registerAuthError: action.data,
        },
      };
    case actionTypes.LOGOUT_AUTH:
      return {
        ...state,
        authUserObject: {
          isLogin: false,
          isLogout: false,
          isRegister: false,
          isDelete: false,

          authObjectEmail: '',
          authObjectToken: '',
          loginPrompt: {},
          authError: '',
          registerAuthError: '',
        },
      };

    case actionTypes.DELETE_AUTH:
      return {
        ...state,
        authUserObject: {
          isLogin: false,
          isLogout: false,
          isRegister: false,
          isDelete: true,

          authObjectEmail: '',
          authObjectToken: '',
          loginPrompt: {},
          authError: '',
          registerAuthError: '',
        },
      };

    case actionTypes.UPDATE_ERROR_STATE:
      return {
        ...state,
        authUserObject: {
          isLogin: false,
          isLogout: false,
          isRegister: false,
          authObjectEmail: '',
          authObjectToken: '',
          loginPrompt: {},
          authError: '',
          registerAuthError: '',
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
