import * as actionTypes from './actionTypes';

export const updateTutorialOption = (showTutorial: boolean) => {
  return {
    type: actionTypes.SET_TUTORIAL_OPTION,
    showTutorial,
  };
};
