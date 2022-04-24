import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputText from '../../components/common/inputText/InputText';

function ExploreScreen() {
  const [text, setText] = useState<string>('');
  return (
    <View style={styles.container}>
      <Text>Explore screen</Text>
      <InputText
        onChange={value => setText(value)}
        label="Input test"
        name="inputTest"
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExploreScreen;
