import React, {FunctionComponent, useState, useEffect} from 'react';
import {View} from 'react-native';
import TextComponent from '../../components/text';
import {SafeAreaView} from 'react-native-safe-area-context';
import PNGIMAGE from '../../components/images/pngImage';
import StackScreenHeader from '../../components/header/stackScreenHeader';
import {GlobalStyles} from '../../utils/globalStyles';
import {SCREEN_HEIGHT} from '../../constants/basicConstant';
import MultipleButtonFooter from '../../components/footer/multipleButtonFooter';
import {useDispatchReducer} from '../../hooks/dispatchReducerHooks';
type Props = {
  navigation: any;
  route: any;
};

const TextImageScreen: FunctionComponent<Props> = props => {
  const {navigation, route} = props;
  const {updateProgressChpaterFunction} = useDispatchReducer();
  const [currentWidgetIndex, setCurrentWidgetIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [widgetArray, setWidgetArray] = useState([]);
  const [totalwidgetsLength, setTotalWidgetsLength] = useState(1);
  const [widgetContent, setWidgetContent] = useState(
    route.params.widgetContent,
  );
  useEffect(() => {
    if (currentWidgetIndex) {
    }
  }, [currentWidgetIndex]);
  useEffect(() => {
    const widgetContentArray = route.params.widgets.map(ele => {
      return ele.widgetContent;
    });
    setWidgetArray(route.params.widgets);
    setWidgetContent(widgetContentArray);
    setTotalWidgetsLength(route.params.widgets.length);
  }, [navigation]);
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          height: SCREEN_HEIGHT,
          alignItems: 'center',
        }}>
        <StackScreenHeader
          onPress={() => navigation.goBack()}
          progressValue={currentWidgetIndex + 1 / totalwidgetsLength}
        />
        <TextComponent
          text={widgetContent && widgetContent[currentWidgetIndex].contentTitle}
        />
        {widgetContent && widgetContent[currentWidgetIndex]?.image != '' ? (
          <PNGIMAGE
            imageURl={widgetContent[currentWidgetIndex]?.image}
            imageViewStyle={[
              {width: 100, height: 100},
              GlobalStyles.borderRadius0,
              GlobalStyles.viewSelfCenter,
              GlobalStyles.marginBottom14,
            ]}
            imageStyle={[
              {width: '100%', height: '100%'},
              GlobalStyles.borderRadius0,
            ]}
            fromApi={true}
          />
        ) : (
          <View
            style={{
              width: 100,
              height: 100,
              borderWidth: 1,
              borderColor: 'red',
            }}></View>
        )}
        <TextComponent
          text={widgetContent && widgetContent[currentWidgetIndex]?.description}
        />
        <MultipleButtonFooter
          onPress={() => {
            let progress = Math.round(
              (currentWidgetIndex + 1 / totalwidgetsLength) * 100,
            );
            if (progress < 0) {
              progress = 0;
            } else if (progress > 100) {
              progress = 100;
            }
            setProgressValue(progress);
            updateProgressChpaterFunction(
              route.params.lessonSubjectId,
              route.params.lessonChapterId,
              route.params.lessonNumber,
              progress,
            );
            if (currentWidgetIndex < widgetArray.length - 1) {
              const type =
                widgetArray && widgetArray[currentWidgetIndex + 1].widgetType;
              if (type === 'textAndImages') {
                setCurrentWidgetIndex(currentWidgetIndex + 1);
              }
            }
          }}
          buttonText={
            currentWidgetIndex === widgetArray.length - 1 ? 'Done' : 'Continue'
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default TextImageScreen;
