import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState: any = {
  subjectArray: [],
  isAppInstall: false,
};

const SubjectReducer = (state: any = initialState, action: AnyAction): any => {
  switch (action.type) {
    case actionTypes.ADD_SUBJECTS:
      return {
        ...state,
        subjectArray: state.concat(action.subjects),
      };
    case actionTypes.UPDATE_SUBJECT_API:
      return {
        ...state,
        subjectArray: action.subjects,
        isAppinstall: true,
      };
    default:
      return state;
  }
};

export default SubjectReducer;
