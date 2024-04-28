import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {GlobalStyles} from '../../utils/globalStyles';
import TextComponent from '../text';
import {commonFooterStyles} from './style';

type Props = {
  onPress?: any;
  buttonText?: string;
  textButtonText?: string;
  textButtonPress?: any;
  overrideStyle?: any;
  iconButtonText?: string;
  iconButtonPress?: any;
  isIconButtonShow?: boolean;
  isTextButtonShow?: boolean;
};

const MultipleButtonFooter: FunctionComponent<Props> = props => {
  const {
    onPress,
    buttonText,
    textButtonPress,
    overrideStyle,
    textButtonText,
    isTextButtonShow,
  } = props;
  return (
    <View
      style={[
        commonFooterStyles.buttonMainView,
        GlobalStyles.paddingVeritcal18,
        GlobalStyles.marginBottom18,
        GlobalStyles.minskColorBackground,
      ]}>
      <TouchableOpacity
        style={[
          GlobalStyles.row,
          GlobalStyles.rowCenter,
          GlobalStyles.borderRadius20,
          overrideStyle,
        ]}
        onPress={onPress}>
        <TextComponent
          text={buttonText}
          textStyle={[
            GlobalStyles.whiteText22,
            GlobalStyles.centerText,
            GlobalStyles.semiBoldText600,
          ]}
        />
      </TouchableOpacity>
      {isTextButtonShow && (
        <TouchableOpacity style={[overrideStyle]} onPress={textButtonPress}>
          <TextComponent
            text={textButtonText}
            textStyle={[GlobalStyles.regularText400, GlobalStyles.whiteText22]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MultipleButtonFooter;
