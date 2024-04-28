import * as actionTypes from './actionTypes';

export const updateCategoryData = (categoryies: any) => {
  return {
    type: actionTypes.UPDATE_CATEGORY,
    categoryies,
  };
};
