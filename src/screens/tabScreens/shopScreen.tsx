import React, {FunctionComponent} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TabHeader} from '../../components/header';

type Props = {
  navigation: any;
};

const ShopScreen: FunctionComponent<Props> = props => {
  return (
    <SafeAreaView>
      <TabHeader headerText="Shop" />
    </SafeAreaView>
  );
};
export default ShopScreen;
