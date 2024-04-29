import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {
  butterFlyBusColor,
  schoolBusYellowColor,
} from '../../constants/colorConstant';
import {studentAvatarImage} from '../../constants/imageConstant';
import PNGIMAGE from '../images/pngImage';
import TextComponent from '../text';
import {commonHeaderStyle, styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  viewStyle?: any;
  headerText?: string;
  fromHomeScreen?: boolean;
};

const TabHeader: FunctionComponent<Props> = props => {
  const {viewStyle, headerText, fromHomeScreen} = props;
  return (
    <View style={[commonHeaderStyle.textHeaderMainView, viewStyle]}>
      {fromHomeScreen ? (
        <>
          <PNGIMAGE
            imageURl={studentAvatarImage}
            imageViewStyle={styles.imageStyle}
            imageStyle={{width: '100%', height: '100%'}}
            resizeMode="center"
          />
          <View>
            <View style={commonHeaderStyle.imageStyle}>
              <AntDesign name={'star'} size={32} color={schoolBusYellowColor} />
            </View>
            <TextComponent
              text="50"
              textStyle={commonHeaderStyle.starTextStyle}
              viewStyle={commonHeaderStyle.starTextViewStyle}
            />
          </View>
          <View style={commonHeaderStyle.imageStyle}>
            <Ionicons
              name={'notifications'}
              size={32}
              color={butterFlyBusColor}
            />
          </View>
        </>
      ) : (
        <TextComponent
          text={headerText}
          textStyle={commonHeaderStyle.textHeaderText}
          viewStyle={{}}
        />
      )}
    </View>
  );
};

export default TabHeader;
