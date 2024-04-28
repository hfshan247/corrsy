import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState: any = {
  friendsObject: [
    {
      me: {},
      pageList: [],
    },
  ],
};

const friendsPageListReducer = (
  state: any = initialState,
  action: AnyAction,
): any => {
  switch (action.type) {
    case actionTypes.UPDTE_FRIENDS_PAGE_LIST:
      return {
        ...state,
        friendsObject: action.friendList,
      };
    default:
      return state;
  }
};

export default friendsPageListReducer;
