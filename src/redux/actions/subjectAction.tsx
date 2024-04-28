import * as actionTypes from './actionTypes';

export const addSujbects = (subjects: any) => {
  return {
    type: actionTypes.ADD_SUBJECTS,
    subjects,
  };
};

export const updateSubjectsFromApi = (subjects: any) => {
  return {
    type: actionTypes.UPDATE_SUBJECT_API,
    subjects,
  };
};
