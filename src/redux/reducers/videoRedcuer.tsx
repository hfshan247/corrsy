import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';
const reducerInitialState = {
  queue: [],
  current: null,
  videoList: [],
};

const videoReducer = (state = reducerInitialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.ADD_QUEUE_QUEUE: {
      return {
        ...state,
        queue: [...state.queue, action.data], // creating new reference
      };
    }

    case actionTypes.SET_CURRENT_STATE: {
      return {
        ...state,
        current: action.data,
      };
    }

    case actionTypes.REMOVE_FROM_QUEUE: {
      return {
        ...state,
        current: null,
        queue: [...state.queue].filter(x => x.id !== action.data.id),
      };
    }

    case actionTypes.SET_VIDEO_LIST: {
      return {
        ...state,
        videoList: action.data,
      };
    }

    default: {
      return state;
    }
  }
};

export default videoReducer;
