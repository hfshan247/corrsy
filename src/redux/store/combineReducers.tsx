import {combineReducers} from '@reduxjs/toolkit';
import ChapterReducer from '../reducers/chatperReducer';
import LessonReducer from '../reducers/lessonReducer';
import SubjectReducer from '../reducers/subjectReducer';

const rootReducer = combineReducers({
  chapterObject: ChapterReducer,
  subjectObject: SubjectReducer,
  lessonObject: LessonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
