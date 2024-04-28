import * as actionTypes from './actionTypes';

export const updateSubCategoryDataAction = (subCategories: any) => {
  return {
    type: actionTypes.UPDATE_SUB_CATEGORY,
    subCategories,
  };
};
