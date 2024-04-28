import React, {FunctionComponent} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {TabHeader} from '../../components/header';
import PNGIMAGE from '../../components/images/pngImage';
import {studentAvatarImage} from '../../constants/imageConstant';
import {GlobalStyles} from '../../utils/globalStyles';
import {whiteColor} from '../../constants/colorConstant';
import TextComponent from '../../components/text';

type Props = {
  navigation: any;
};

const ProfileScreen: FunctionComponent<Props> = props => {
  return (
    <SafeAreaView>
      <TabHeader headerText="Profile" />
      <View>
        <PNGIMAGE
          imageURl={studentAvatarImage}
          imageViewStyle={[
            GlobalStyles.viewSelfCenter,
            GlobalStyles.marginBottom8,
            {borderWidth: 1, borderColor: whiteColor, width: 100, height: 100},
          ]}
          imageStyle={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
        <TextComponent
          text="Corssy User"
          viewStyle={[GlobalStyles.viewSelfCenter]}
          textStyle={[GlobalStyles.semiBoldText600, GlobalStyles.blackText18]}
        />
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
