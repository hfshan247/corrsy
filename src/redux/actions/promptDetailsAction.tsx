import * as actionTypes from './actionTypes';

export const updatePromptDetails = (promptDetials: any) => {
  return {
    type: actionTypes.UPDATE_PROMPT_DETAILS,
    promptDetials,
  };
};

export const updateSelectPrompt = (promptObject: any) => {
  return {
    type: actionTypes.UPDATE_SELECT_PROMPT_DETAILS,
    promptObject,
  };
};

export const updateLastPrompt = (lastPromptObject: any) => {
  return {
    type: actionTypes.UPDATE_LAST_PROMPT,
    lastPromptObject,
  };
};
