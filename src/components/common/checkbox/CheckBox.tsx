import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import colors from '../../../utils/colors';

interface CheckBoxProps {
  onPress?: (isSelected: boolean) => void;
  isSquare?: boolean;
}

const CheckBox = ({onPress, isSquare = false}: CheckBoxProps) => {
  return (
    <BouncyCheckbox
      size={25}
      fillColor={colors.accentColor}
      // eslint-disable-next-line react-native/no-inline-styles
      iconStyle={{
        borderColor: colors.accentColor,
        borderRadius: isSquare ? 4 : 25 / 2,
      }}
      onPress={onPress}
    />
  );
};

export default CheckBox;
