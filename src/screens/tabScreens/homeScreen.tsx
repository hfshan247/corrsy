import React, {FunctionComponent, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GlobalStyles} from '../../utils/globalStyles';
import {TabHeader} from '../../components/header';
import {FlatList, View} from 'react-native';
import {commonStyles} from './styles';
import {ChapterList, LessonList, SubjectList} from '../../components/lists';
import {useSelctorReducer} from '../../hooks/selectorRecuerHooks';

type Props = {
  navigation: any;
};

const HomeScreen: FunctionComponent<Props> = props => {
  const {navigation} = props;
  const {fetchSubject, fetchChapters, fetchLessons} = useSelctorReducer();
  const [subjectData, setSubjectData] = useState([]);
  const [chapterData, setChapterData] = useState([]);
  const [subjectId, setSujbectId] = useState('');
  const renderItem = (item: any) => {
    return (
      <SubjectList
        subjectName={item.item.subjectName}
        subjcetIcon={item.item.subjectIcon}
        onPress={() => {
          setSujbectId(item.item.subjectId);
        }}
      />
    );
  };
  const renderLessonItem = (item: any) => {
    return (
      <LessonList
        percantageValue={item.item.activeWidgetIndex}
        lessonNumber={item.item.lessonNumber}
        lessonIcon={
          item.item.lessonIcon != ''
            ? item.item.lessonIcon
            : 'https://corrsy-image-bucket.s3.me-south-1.amazonaws.com/math-1-1660209535120.png'
        }
        lessonTitle={item.item.lessonTitle}
        onPress={() => {
          navigation.navigate('textImageScreen', {
            widgets: fetchLessons.lessonDataArray[0].lessonWidgets,
            lessonChapterId: fetchLessons.lessonDataArray[0].lessonChapterId,
            lessonSubjectId: fetchLessons.lessonDataArray[0].lessonSubjectId,
            lessonNumber: fetchLessons.lessonDataArray[0].lessonNumber,
          });
          const type =
            fetchLessons.lessonDataArray[0].lessonWidgets[0].widgetType;
          if (type === 'textAndImages') {
            navigation.navigate('textImageScreen', {
              widgets: fetchLessons.lessonDataArray[0].lessonWidgets,
              lessonChapterId: fetchLessons.lessonDataArray[0].lessonChapterId,
              lessonSubjectId: fetchLessons.lessonDataArray[0].lessonSubjectId,
              lessonNumber: fetchLessons.lessonDataArray[0].lessonNumber,
            });
          }
        }}
      />
    );
  };
  const renderChapterItem = (item: any) => {
    return (
      <ChapterList
        chapterIcon={item.item.chapterIcon}
        chapterName={item.item.chapterName}
        data={item.item.lessons}
        renderItem={renderLessonItem}
      />
    );
  };
  useEffect(() => {
    if (subjectId != '') {
      const chapters: any = fetchChapters?.chaptersArray.filter((ele: any) => {
        return ele.subjectId === subjectId;
      });
      setChapterData(chapters[0].subjectChapters);
    }
  }, [subjectId, fetchChapters]);
  useEffect(() => {
    setSubjectData(Object.values(fetchSubject)[0]);
  }, [navigation]);

  return (
    <SafeAreaView>
      <TabHeader
        headerText="Profile"
        viewStyle={[
          GlobalStyles.columnCenter,
          {justifyContent: 'space-around'},
        ]}
        fromHomeScreen={true}
      />
      <View style={commonStyles.homeFlatlistSubjectStyle}>
        <FlatList
          data={subjectData}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={chapterData}
        renderItem={renderChapterItem}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={GlobalStyles.paddingBottom32}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
