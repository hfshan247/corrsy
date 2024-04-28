import React, {FunctionComponent} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GlobalStyles} from '../../utils/globalStyles';
import {TabHeader} from '../../components/header';

type Props = {
  navigation: any;
};

const ShopScreen: FunctionComponent<Props> = props => {
  return (
    <SafeAreaView>
      <TabHeader headerText="Shop" viewStyle={GlobalStyles.fullCenter} />
    </SafeAreaView>
  );
};
export default ShopScreen;
