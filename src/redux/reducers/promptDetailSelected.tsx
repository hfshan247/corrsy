import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState: any = {
  promptSelectedDetail: [
    {
      selectedPrompt: {},
      curretnIndex: 0,
    },
  ],
};

const promptSelectedReudcer = (
  state: any = initialState,
  action: AnyAction,
): any => {
  switch (action.type) {
    case actionTypes.UPDATE_SELECT_PROMPT_DETAILS:
      return {
        ...state,
        promptSelectedDetail: action.promptObject,
      };
    default:
      return state;
  }
};

export default promptSelectedReudcer;
