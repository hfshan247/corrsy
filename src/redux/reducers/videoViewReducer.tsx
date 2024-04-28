import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';
const videoVidewInital = {
  show_taly: true,
  show_prompt: true,
  show_skill_category: true,
};

const videoViewReducer = (state = videoVidewInital, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.UPDATE_VIDEO_VIEW:
      return {
        videoVidewInital: action.videoViewObject,
      };
    case actionTypes.SET_VIDEO_VIEW:
      return {
        videoVidewInital: action.data,
      };
    default: {
      return state;
    }
  }
};

export default videoViewReducer;
