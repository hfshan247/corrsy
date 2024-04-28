import * as actionTypes from './actionTypes';

export const friendPageListData = (friendList: any) => {
  return {
    type: actionTypes.UPDTE_FRIENDS_PAGE_LIST,
    friendList,
  };
};
