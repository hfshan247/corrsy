import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState: any = {
  lessonDataArray: [],
  lessonPresentArray: [],
};

const LessonReducer = (state: any = initialState, action: AnyAction): any => {
  switch (action.type) {
    case actionTypes.UPDATE_LESSONS_API:
      return {
        ...state,
        lessonDataArray: state.lessonDataArray.concat(action.lessonData),
      };
    case actionTypes.UPDATE_LESSONS_RUNTIME:
      return {
        ...state,
        lessonPresentArray: state.lessonPresentArray.push(action.currentLesson),
      };
    default:
      return state;
  }
};

export default LessonReducer;
