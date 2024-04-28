import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState: any = {
  promptDetails: [
    {
      category: '',
      prompts: [],
      sub_category: {},
    },
  ],
};

const promptDetailReducer = (
  state: any = initialState,
  action: AnyAction,
): any => {
  switch (action.type) {
    case actionTypes.UPDATE_PROMPT_DETAILS:
      return {
        ...state,
        promptDetails: action.promptDetials,
      };
    default:
      return state;
  }
};

export default promptDetailReducer;
