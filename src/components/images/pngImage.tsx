/**
 * From server image: {uri: imageURl}
 */
import React, {FunctionComponent} from 'react';
import {Image, View} from 'react-native';
import {GlobalStyles} from '../../utils/globalStyles';

type Props = {
  imageURl?: string | any;
  imageStyle?: any;
  imageViewStyle?: any;
  overRideImageStyle?: any;
  resizeMode?: any;
};

const PNGIMAGE: FunctionComponent<Props> = props => {
  const {imageURl, imageStyle, resizeMode, imageViewStyle} = props;
  return (
    <View style={[GlobalStyles.borderRadius50, imageViewStyle]}>
      <Image
        source={imageURl}
        style={[GlobalStyles.borderRadius50, imageStyle]}
        resizeMode={resizeMode}
      />
    </View>
  );
};
export default PNGIMAGE;
