import * as actionTypes from './actionTypes';

export const addToQueue = (data: any) => {
  return {
    type: actionTypes.ADD_QUEUE_QUEUE,
    data,
  };
};

export const setCurrent = (data: any) => {
  return {
    type: actionTypes.SET_CURRENT_STATE,
    data,
  };
};

export const removeFromQueue = (data: any) => {
  return {
    type: actionTypes.REMOVE_FROM_QUEUE,
    data,
  };
};

export const setVideoList = (data: any) => {
  return {
    type: actionTypes.SET_VIDEO_LIST,
    data,
  };
};
