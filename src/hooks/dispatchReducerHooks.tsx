import {useDispatch} from 'react-redux';
import {
  addChapters,
  updateChaptersFromApi,
  updateProgess,
} from '../redux/actions/chapterAction';
import {updateLessonfromAPi} from '../redux/actions/lessonAction';
import {
  addSujbects,
  updateSubjectsFromApi,
} from '../redux/actions/subjectAction';
export const useDispatchReducer = () => {
  const dispatch: any = useDispatch();
  const addChaptersFunction = (subjectId: string, chapterDatta: any) => {
    dispatch(addChapters(subjectId, chapterDatta));
  };
  const updateChaptersFromApiFunction = (
    subjectId: string,
    chapterDatta: any,
  ) => {
    dispatch(updateChaptersFromApi(subjectId, chapterDatta));
  };
  const updateProgressChpaterFunction = (
    subjectId,
    chapterId,
    lessonNumber,
    progress,
  ) => {
    dispatch(updateProgess(subjectId, chapterId, lessonNumber, progress));
  };
  const updateLessonsFromAPiFunction = (lesosnData: any) => {
    dispatch(updateLessonfromAPi(lesosnData));
  };

  const addSubjectsFunction = (subjectData: any) => {
    dispatch(addSujbects(subjectData));
  };

  const updateSubjectsFromApiFunction = (subjectData: any) => {
    dispatch(updateSubjectsFromApi(subjectData));
  };
  return {
    addChaptersFunction,
    addSubjectsFunction,
    updateLessonsFromAPiFunction,
    updateSubjectsFromApiFunction,
    updateChaptersFromApiFunction,
    updateProgressChpaterFunction,
  };
};
