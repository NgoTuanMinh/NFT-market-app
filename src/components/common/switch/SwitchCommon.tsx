import React from 'react';
import {Switch} from 'react-native';
import colors from '../../../utils/colors';

interface SwitchCommonProps {
  onChange: (isSelected: boolean) => void;
  isEnabled: boolean;
}

const SwitchCommon = ({onChange, isEnabled}: SwitchCommonProps) => {
  return (
    <Switch
      trackColor={{false: colors.gray, true: colors.accentColor}}
      thumbColor={isEnabled ? colors.white : colors.white}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onChange}
      value={isEnabled}
    />
  );
};

export default SwitchCommon;
