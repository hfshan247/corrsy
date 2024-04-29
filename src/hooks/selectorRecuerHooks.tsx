import {useSelector} from 'react-redux';

export const useSelctorReducer = () => {
  const fetchSubject = useSelector((state: {subjectObject: object}) => {
    return state.subjectObject;
  });
  const fetchChapters = useSelector((state: {chapterObject: any}) => {
    return state.chapterObject;
  });
  const fetchLessons = useSelector((state: {lessonObject: any}) => {
    return state.lessonObject;
  });
  return {
    fetchSubject,
    fetchChapters,
    fetchLessons,
  };
};
