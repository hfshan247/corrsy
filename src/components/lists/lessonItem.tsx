import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {minskColor, silverColor} from '../../constants/colorConstant';
import {GlobalStyles} from '../../utils/globalStyles';
import PNGIMAGE from '../images/pngImage';
import TextComponent from '../text';
import {ListButton} from '../button';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

type Props = {
  percantageValue: number;
  lessonNumber: any;
  lessonIcon: string;
  lessonTitle: string;
  onPress?: any;
};

const LessonList: FunctionComponent<Props> = props => {
  const {percantageValue, lessonNumber, lessonIcon, lessonTitle, onPress} =
    props;
  return (
    <View
      style={[
        {width: '50%'},
        GlobalStyles.fullCenter,
        GlobalStyles.marginBottom14,
      ]}>
      <ListButton onPress={onPress} overrideStyle={GlobalStyles.marginBottom10}>
        <AnimatedCircularProgress
          size={120}
          width={4}
          fill={percantageValue}
          tintColor={minskColor}
          rotation={-90}
          backgroundColor={silverColor}>
          {fill => (
            <View
              style={[
                GlobalStyles.fullCenter,
                {
                  backgroundColor: silverColor,
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                },
              ]}>
              <PNGIMAGE
                imageURl={lessonIcon}
                imageViewStyle={[
                  {width: 40, height: 40},
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
              <TextComponent text={`Lesson ${lessonNumber}`} />
            </View>
          )}
        </AnimatedCircularProgress>
      </ListButton>
      <TextComponent text={lessonTitle} />
    </View>
  );
};

export default LessonList;
