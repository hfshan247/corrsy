import React, {FunctionComponent, useEffect} from 'react';
import {View} from 'react-native';
import {useApi} from '../../hooks/apiHooks';
import TextComponent from '../../components/text';
import {commonStyles, styles} from './index';
import {useSelctorReducer} from '../../hooks/selectorRecuerHooks';
import {GlobalStyles} from '../../utils/globalStyles';

type Props = {
  navigation: any;
};

const SplashScreen: FunctionComponent<Props> = props => {
  const {navigation} = props;
  const {subjectsApi, chaptersApi, lessonsApi} = useApi();
  const {fetchSubject} = useSelctorReducer();
  useEffect(() => {
    setTimeout(() => {
      if (Object.values(fetchSubject)[2]) {
        navigation.replace('tabs');
      } else {
        chaptersApi();
        lessonsApi();
        subjectsApi();
      }
    }, 2000);
  }, [navigation]);
  return (
    <View style={[styles.splashMain, commonStyles.splashMainView]}>
      <TextComponent
        text="Corssy"
        textStyle={[GlobalStyles.boldText700, GlobalStyles.blackText18]}
        viewStyle={GlobalStyles.viewSelfCenter}
      />
    </View>
  );
};

export default SplashScreen;
