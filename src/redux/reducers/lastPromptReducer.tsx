import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState: any = {
  lastPrompt: {
    categoryName: '',
    subCategoryName: '',
    promptText: '',
    isDataHave: false,
  },
};

const lastPromptReducer = (
  state: any = initialState,
  action: AnyAction,
): any => {
  switch (action.type) {
    case actionTypes.UPDATE_LAST_PROMPT:
      return {
        ...state,
        lastPrompt: action.lastPromptObject,
      };
    case actionTypes.SET_LAST_PROMPT:
      return {
        ...state,
        lastPrompt: action.data,
      };
    default:
      return state;
  }
};

export default lastPromptReducer;
