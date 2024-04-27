import {Dimensions, Platform} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SMALL_DEVICE = SCREEN_WIDTH <= 420 && SCREEN_HEIGHT <= 695;
export const MULTIPLIER = SMALL_DEVICE ? 1.0 : 1.25;
export const ios = Platform.OS === 'ios';
export const android = Platform.OS === 'android';
export const DEVICE_SIZE = ios
  ? SCREEN_HEIGHT >= 896
    ? 'large'
    : SCREEN_HEIGHT >= 812
    ? 'medium'
    : 'small'
  : SCREEN_HEIGHT >= 896
  ? 'large'
  : SCREEN_HEIGHT >= 700
  ? 'medium'
  : 'small';
