import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';
import * as Progress from 'react-native-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  appBackgroundColor,
  burntSiennaColor,
} from '../../constants/colorConstant';
import {SCREEN_WIDTH} from '../../constants/basicConstant';
import {commonHeaderStyle} from './styles';
type Props = {
  viewStyle?: any;
  onPress?: any;
  progressValue?: number;
};

const StackScreenHeader: FunctionComponent<Props> = props => {
  const {viewStyle, onPress, progressValue} = props;
  return (
    <View style={[commonHeaderStyle.stackHeaderMainView, viewStyle]}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="chevron-back" size={25} />
      </TouchableOpacity>
      <Progress.Bar
        progress={progressValue}
        width={SCREEN_WIDTH / 1.2}
        height={25}
        color={burntSiennaColor}
        unfilledColor={appBackgroundColor}
        style={{borderRadius: 50}}
      />
    </View>
  );
};

export default StackScreenHeader;
