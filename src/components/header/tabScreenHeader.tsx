import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import TextComponent from '../text';
import {commonHeaderStyle} from './styles';

type Props = {
  viewStyle?: any;
  headerText?: string;
};

const TabHeader: FunctionComponent<Props> = props => {
  const {viewStyle, headerText} = props;
  return (
    <View style={[commonHeaderStyle.textHeaderMainView, viewStyle]}>
      <TextComponent
        text={headerText}
        textStyle={commonHeaderStyle.textHeaderText}
        viewStyle={{}}
      />
    </View>
  );
};

export default TabHeader;
