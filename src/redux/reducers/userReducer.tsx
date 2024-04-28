import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState: UserState = {
  authUser: {
    name: '',
    proifleAvatar: '',
    userName: '',
  },
};

const userReducer = (
  state: UserState = initialState,
  action: AnyAction,
): UserState => {
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        authUser: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
