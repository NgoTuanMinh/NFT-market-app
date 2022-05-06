import * as React from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { sizes } from '../../../utils/sizings';

interface InputTextProps {
  onChange: (value: string | any, name?: string) => void;
  value: string | any;
  label: string;
  name?: string;
  type?: string;
  placeHolder?: string;
  numberOfLines?: number;
  style?: any;
}

const InputText = ({
  onChange,
  value = '',
  label,
  name,
  type = 'text',
  placeHolder,
  numberOfLines = 1,
  style,
}: InputTextProps) => {
  return (
    <View style={styles.wrapInput}>
      <TextInput
        style={[styles.input, { ...style }]}
        label={label}
        onChangeText={(textValue: string) => onChange(textValue, name)}
        value={value}
        mode="outlined"
        blurOnSubmit={true}
        onSubmitEditing={Keyboard.dismiss}
        secureTextEntry={type === 'password'}
        keyboardType={type === 'number' ? 'numeric' : 'default'}
        placeholder={placeHolder}
        autoCapitalize="none"
        multiline={true}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapInput: {
    width: '100%',
  },
  input: {
    borderRadius: sizes.size_10,
    height: sizes.size_56,
    width: '100%',
  },
});

export default InputText;
