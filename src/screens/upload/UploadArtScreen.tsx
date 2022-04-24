import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function UploadArtScreen() {
  return (
    <View style={styles.container}>
      <Text>Upload art screen</Text>
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

export default UploadArtScreen;
