import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';

type Props = {
  text?: string;
  viewStyle?: any;
  textStyle?: any;
  nmberofLines?: number;
};

const TextComponent: FunctionComponent<Props> = props => {
  const {text, viewStyle, nmberofLines, textStyle} = props;
  return (
    <View style={viewStyle}>
      <Text style={textStyle} numberOfLines={nmberofLines}>
        {text}
      </Text>
    </View>
  );
};
export default TextComponent;
