import React from 'react';
import {StyleSheet, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../../../utils/colors';
import {sizes} from '../../../utils/sizings';
import { verifyModelIphone } from '../../../utils/validation';

interface DropdownProps {
  onChange: (value: string, index: number) => void;
  items: DropdownItemProps[];
  placeHolder?: DropdownItemProps | undefined;
}

interface DropdownItemProps {
  label: string;
  value: any;
}

const DropdownCommon = ({onChange, items, placeHolder}: DropdownProps) => {
  const isIOS = verifyModelIphone();

  return (
    <RNPickerSelect
      onValueChange={onChange}
      items={items}
      placeholder={placeHolder}
      style={pickerSelectStyles}
      Icon={() => {
        return (
          isIOS 
          ? 
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: colors.transparent,
              borderTopWidth: sizes.size_6,
              borderTopColor: colors.gray,
              borderRightWidth: sizes.size_6,
              borderRightColor: colors.transparent,
              borderLeftWidth: sizes.size_6,
              borderLeftColor: colors.transparent,
              width: 0,
              height: 0,
              top: sizes.size_20,
              right: sizes.size_10,
            }}
          />
          :
          null
        );
      }}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: sizes.size_16,
    paddingVertical: sizes.size_12,
    paddingHorizontal: sizes.size_10,
    borderWidth: sizes.size_1,
    borderColor: colors.accentColor,
    borderRadius: sizes.size_6,
    color: colors.black,
    paddingRight: sizes.size_30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: sizes.size_16,
    paddingHorizontal: sizes.size_10,
    paddingVertical: sizes.size_12,
    borderWidth: sizes.size_1,
    borderColor: colors.accentColor,
    borderRadius: sizes.size_6,
    color: colors.black,
    paddingRight: sizes.size_30, // to ensure the text is never behind the icon
  },
});
export default DropdownCommon;
