import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../utils/globalStyles';
import {} from '../../constants/colorConstant';

export const styles = StyleSheet.create({
  widht24height24: {width: 24, height: 24},
  borderWidth2: {borderWidth: 1},
  primaryButtonAnimation: {
    borderStyle: 'solid',
    left: 24,
  },
  radioButtonTextView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: '7%',
  },

  segmentedTabStyle: {
    width: '30%',
  },
  segmentedImage: {
    width: 15,
    height: 15,
  },
  segmentedImageView: {
    width: 30,
    height: 30,
  },
  animationViewStyle: {
    gap: 10,
  },
  uploadButtonView: {
    position: 'absolute',
    width: '90%',
    bottom: 40,
  },
});

export const commonFooterStyles = {
  buttonMainView: [
    GlobalStyles.fullCenter,
    GlobalStyles.viewSelfCenter,
    GlobalStyles.bottom60,
    GlobalStyles.borderRadius20,
    GlobalStyles.marginHorizontal10,
    styles.uploadButtonView,
  ],
};
