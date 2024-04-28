import React, {FunctionComponent, useEffect} from 'react';
import {View} from 'react-native';
import TextComponent from '../../components/text';
import {commonStyles, styles} from './index';

type Props = {
  navigation: any;
};

const SplashScreen: FunctionComponent<Props> = props => {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('tabs');
    }, 2000);
  }, [navigation]);
  return (
    <View style={[styles.splashMain, commonStyles.splashMainView]}>
      <TextComponent text="Corssy" />
    </View>
  );
};

export default SplashScreen;
