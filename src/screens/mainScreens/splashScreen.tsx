import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import TextComponent from '../../components/text';
import {commonStyles, styles} from './index';

type Props = {
  navigation: any;
};

const SplashScreen: FunctionComponent<Props> = () => {
  return (
    <View style={[styles.splashMain, commonStyles.splashMainView]}>
      <TextComponent text="Corssy" />
    </View>
  );
};

export default SplashScreen;
