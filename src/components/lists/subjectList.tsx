import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {loganColor, transparentColor} from '../../constants/colorConstant';
import {GlobalStyles} from '../../utils/globalStyles';
import PNGIMAGE from '../images/pngImage';
import TextComponent from '../text';
import {ListButton} from '../button';

type Props = {
  subjectName?: string;
  selectedItem?: boolean;
  subjcetIcon?: string;
  onPress;
};

const SubjectList: FunctionComponent<Props> = props => {
  const {subjectName, subjcetIcon, selectedItem, onPress} = props;
  return (
    <ListButton onPress={onPress}>
      <View style={[GlobalStyles.marginHorizontal8]}>
        <View
          style={[
            GlobalStyles.marginBottom8,
            GlobalStyles.borderRadius10,
            GlobalStyles.mischkaBackground,
            GlobalStyles.paddingHorizontal16,
            GlobalStyles.paddingVeritcal12,
            GlobalStyles.row,
            {
              borderWidth: 2,
              borderColor: selectedItem ? loganColor : transparentColor,
              columnGap: 8,
            },
          ]}>
          <PNGIMAGE
            imageURl={subjcetIcon}
            imageViewStyle={{width: 20, height: 20}}
            imageStyle={{width: '100%', height: '100%'}}
            fromApi={true}
          />
          <TextComponent
            text={subjectName}
            textStyle={[GlobalStyles.regularText400, GlobalStyles.abbeyText18]}
          />
        </View>
      </View>
    </ListButton>
  );
};

export default SubjectList;
