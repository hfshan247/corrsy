import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../utils/globalStyles';

export const styles = StyleSheet.create({
  textHeaderMainView: {
    width: '100%',
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export const commonHeaderStyle = {
  textHeaderMainView: [
    GlobalStyles.row,
    GlobalStyles.marginBottom24,
    GlobalStyles.fullCenter,
    GlobalStyles.minskColorBackground,
    styles.textHeaderMainView,
  ],
  textHeaderText: [GlobalStyles.centerText, GlobalStyles.whiteText22],
  headerIconStyle: [
    GlobalStyles.marginTop0,
    GlobalStyles.fullCenter,
    GlobalStyles.left0,
    {height: 28},
  ],
};
