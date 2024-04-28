import {AnyAction} from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState: any = {
  chaptersArray: [{subjectId: '', subjectChapters: []}],
};

const ChapterReducer = (state: any = initialState, action: AnyAction): any => {
  switch (action.type) {
    case actionTypes.UPDATE_CHAPTERS_API:
      return {
        ...state,
        chaptersArray: state.chaptersArray.concat({
          subjectId: action.subjectId,
          subjectChapters: action.chapters,
        }),
      };
    case actionTypes.UPDATE_PROGRESS:
      const chapterIndex = 1; // Index of the chapter within chaptersArray
      const lessonIndex = 0; // Index of the lesson within the selected chapter
      const selectedChapter =
        state.chaptersArray[chapterIndex].subjectChapters[0];
      var allLessons = selectedChapter.lessons;
      const updatedLessons = allLessons.map((lesson, idx) => {
        if (idx === lessonIndex) {
          return {
            ...lesson,
            activeWidgetIndex: action.progress,
          };
        } else {
          return lesson;
        }
      });
      const updatedSubjectChapters = [
        {
          ...selectedChapter,
          lessons: updatedLessons,
        },
      ];
      const updatedChaptersArray = state.chaptersArray.map(
        (subjectChapter, idx) => {
          if (idx === chapterIndex) {
            return {
              ...subjectChapter,
              subjectChapters: updatedSubjectChapters,
            };
          } else {
            return subjectChapter;
          }
        },
      );
      return {
        ...state,
        chaptersArray: updatedChaptersArray,
      };
    default:
      return state;
  }
};

export default ChapterReducer;
