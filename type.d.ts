type SubjectData = {
  subjectId: string;
  subjectName: string;
  subjectIcon: string;
  gradeId: string;
  isAppInstall: boolean;
};

type SubjectState = {
  subjects: SubjectData[];
};

type ChapterData = {
  subjectId: string;
  chapterId: string;
  chapterName: string;
  chapterIcon: string;
  chapterNumber: number;
  lessons: [
    {
      lessonID: string;
      lessonTitle: string;
      lessonIcon: string;
      lessonShortDescription: string;
      lessonLongDescription: string;
      lessonRealLifeScnerio: string;
      lessonActiveState: number;
    },
  ];
};

type ChapterState = {
  chapteData: ChapterData;
};

type ChapterAction = {
  type: string;
  chapterData: ChapterData;
};

type DispatchType = (args: ChapterAction) => ChapterAction;
type Users = Array<ChapterData>;
