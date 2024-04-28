import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState: any = {
  mainCategoryObject: [
    {
      background: '',
      categories: [],
      coreLevel: [],
      streak: [],
      isMember: false,
    },
  ],
};

const categoryReducer = (state: any = initialState, action: AnyAction): any => {
  switch (action.type) {
    case actionTypes.UPDATE_CATEGORY:
      return {
        ...state,
        mainCategoryObject: action.categoryies,
      };
    default:
      return state;
  }
};

export default categoryReducer;
