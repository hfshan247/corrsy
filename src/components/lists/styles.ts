import {StyleSheet} from 'react-native';
import {regentGrayColor, wildBlueColor} from '../../constants/colorConstant';
import {GlobalStyles} from '../../utils/globalStyles';

export const styles = StyleSheet.create({
  textHeaderMainView: {
    width: '100%',
    height: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageStyle: {
    borderWidth: 1,
    borderColor: wildBlueColor,
    width: 60,
    height: 60,
  },
  starTextViewStyle: {
    width: 40,
    position: 'absolute',
    bottom: -10,
    backgroundColor: regentGrayColor,
  },
});

export const commonListStyles = {
  textHeaderMainView: [
    GlobalStyles.row,
    GlobalStyles.marginBottom24,
    GlobalStyles.minskColorBackground,
    styles.textHeaderMainView,
  ],
  textHeaderText: [GlobalStyles.centerText, GlobalStyles.whiteText22],
  imageStyle: [
    GlobalStyles.borderRadius50,
    GlobalStyles.whiteBackground,
    GlobalStyles.fullCenter,
    styles.imageStyle,
  ],
  starTextViewStyle: [
    GlobalStyles.borderRadius20,
    GlobalStyles.viewSelfCenter,
    styles.starTextViewStyle,
  ],
  starTextStyle: [[GlobalStyles.centerText, GlobalStyles.whiteText16]],
};
