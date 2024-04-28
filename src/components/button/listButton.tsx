import React, {FunctionComponent} from 'react';
import {TouchableOpacity} from 'react-native';

type Props = {
  onPress: any;
  overrideStyle?: any;
  children?: any;
};

const ListButton: FunctionComponent<Props> = props => {
  const {onPress, children, overrideStyle} = props;
  return (
    <TouchableOpacity style={[overrideStyle]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
export default ListButton;
