import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';
const tutorialOptionIntial = {tutorialOptionIntial: false};

const tutorialOptionReducer = (
  state = tutorialOptionIntial,
  action: AnyAction,
) => {
  switch (action.type) {
    case actionTypes.SET_TUTORIAL_OPTION:
      return {
        tutorialOptionIntial: action.showTutorial,
      };
    default: {
      return state;
    }
  }
};

export default tutorialOptionReducer;
