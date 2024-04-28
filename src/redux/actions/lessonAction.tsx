import * as actionTypes from './actionTypes';

export const updateLessonfromAPi = (lessonData: any) => {
  return {
    type: actionTypes.UPDATE_LESSONS_API,
    lessonData,
  };
};

export const updateLesson = (lessonData: any) => {
  return {
    type: actionTypes.UPDATE_LESSONS_RUNTIME,
    lessonData,
  };
};
