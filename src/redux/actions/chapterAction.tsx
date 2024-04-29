import * as actionTypes from './actionTypes';

export const addChapters = (subjectId: string, chapter: any) => {
  return {
    type: actionTypes.ADD_CHAPTER,
    subjectId,
    chapter,
  };
};

export const updateChaptersFromApi = (subjectId: string, chapters: any) => {
  return {
    type: actionTypes.UPDATE_CHAPTERS_API,
    subjectId,
    chapters,
  };
};

export const updateProgess = (subjectId, chapterId, lessonNumber, progress) => {
  return {
    type: actionTypes.UPDATE_PROGRESS,
    subjectId,
    chapterId,
    lessonNumber,
    progress,
  };
};
