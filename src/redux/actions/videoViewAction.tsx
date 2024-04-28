import * as actionTypes from './actionTypes';

export const updateVidoView = (videoViewObject: any) => {
  return {
    type: actionTypes.UPDATE_VIDEO_VIEW,
    videoViewObject,
  };
};
