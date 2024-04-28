import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState: any = {
  subCategoryObject: [
    {
      category: {},
      sub_category: [],
    },
  ],
};

const subCategoryReducer = (
  state: any = initialState,
  action: AnyAction,
): any => {
  switch (action.type) {
    case actionTypes.UPDATE_SUB_CATEGORY:
      return {
        ...state,
        subCategoryObject: action.subCategories,
      };
    default:
      return state;
  }
};

export default subCategoryReducer;
