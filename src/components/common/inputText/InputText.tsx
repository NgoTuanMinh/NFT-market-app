import * as React from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { sizes } from '../../../utils/sizings';

interface InputTextProps {
  onChange: (value: string, name?: string) => void;
  value: string;
  label: string;
  name?: string;
  type?: string;
  placeHolder?: string;
}

const InputText = ({
  onChange,
  value = '',
  label,
  name,
  type = 'text',
  placeHolder,
}: InputTextProps) => {
  return (
    <View style={styles.wrapInput}>
      <TextInput
        style={styles.input}
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapInput: {
    width: '100%',
    height: sizes.size_56,
  },
  input: {
    borderRadius: sizes.size_10,
    height: sizes.size_56,
    width: '100%',
  },
});

export default InputText;
