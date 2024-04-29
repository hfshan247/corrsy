import axios from 'axios';
import {REACT_APP_BASE_URL, API_TOKEN} from '@env';
import {useDispatchReducer} from './dispatchReducerHooks';

const URL_ = REACT_APP_BASE_URL;
export const useApi = () => {
  const {
    updateSubjectsFromApiFunction,
    updateLessonsFromAPiFunction,
    updateChaptersFromApiFunction,
  } = useDispatchReducer();
  const subjectsApi = async () => {
    try {
      var headers = {
        Authorization: `Bearer ${API_TOKEN}`,
      };
      await axios
        .get(
          `${URL_}/courseregistration/65edc62cc1aa0078000f9c01/6625514923f87505231c8f89`,
          {
            headers: headers,
          },
        )
        .then((response: any) => {
          var subjectReduxArray = [];
          Object.values(response.data.data).map((subject: any) => {
            const subjectRedux: any = {
              subjectId: subject.subject._id,
              subjectName: subject.subject.Subject_name,
              subjectIcon: subject.subject.subject_icon,
              gradeId: subject.subject.grade,
            };
            subjectReduxArray.push(subjectRedux);
          });
          updateSubjectsFromApiFunction(subjectReduxArray);
        })
        .catch((e: any) => {});
    } catch (err) {}
  };
  const chaptersApi = async () => {
    try {
      var headers = {
        Authorization: `Bearer ${API_TOKEN}`,
      };
      await axios
        .get(`${URL_}/lessons/subject/6625599323f87505231c960c/`, {
          headers: headers,
        })
        .then((response: any) => {
          const transformedArray = Object.values(response.data.data)
            .map((chapterData: any) => {
              const chaptersInfo = chapterData.chapter.map(chapter => ({
                chapterId: chapter.chapterID,
                chapterIcon: chapter.chapter_icon,
                chapterName: chapter.chapter_name,
                chapterNumber: chapter.chapter_number,
                lessons: [],
              }));

              chapterData.lessons.forEach(lesson => {
                chaptersInfo[0].lessons.push({
                  lessonId: lesson._id,
                  lessonTitle: lesson.title,
                  lessonIcon: lesson.lessonIcon,
                  lessonNumber: lesson.lessonNumber,
                  activeWidgetIndex: 0,
                });
              });

              return chaptersInfo;
            })
            .flat();
          console.log(
            'transform chapters array',
            transformedArray,
            transformedArray[0].lessons,
          );
          updateChaptersFromApiFunction(
            '6625599323f87505231c960c',
            transformedArray,
          );
        })
        .catch((e: any) => {});
    } catch (err) {}
  };
  const lessonsApi = async () => {
    try {
      var headers = {
        Authorization: `Bearer ${API_TOKEN}`,
      };
      await axios
        .get(`${URL_}/lessons?_id=662559d541ce1ef8be9a20b1`, {
          headers: headers,
        })
        .then((response: any) => {
          const lessonData: any = Object.values(response.data.data);
          const lessonInfo = {
            lessonIcon: lessonData[0].lessonIcon,
            lessonNumber: lessonData[0].lessonNumber,
            lessonTitle: lessonData[0].title,
            lessonShortDescription: lessonData[0].shortDescription,
            lessonLongDescription: lessonData[0].longDescription,
            lessonRealLifeScenario: lessonData[0].realLifeScenario,
            lessonSubjectId: lessonData[0].subject,
            lessonChapterId: lessonData[0].chapter,
            lessonWidgetLength: lessonData[0].widgets.length,
            lessonWidgets: lessonData[0].widgets.map(widget => ({
              widgetType: widget.widgetType,
              widgetContent: widget.content,
            })),
          };
          updateLessonsFromAPiFunction(lessonInfo);
        })
        .catch((e: any) => {});
    } catch (err) {}
  };
  return {
    subjectsApi,
    chaptersApi,
    lessonsApi,
  };
};
