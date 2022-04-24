import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonCommon from '../../components/common/buttons/commonButton/CommonButton';
import InputFile from '../../components/common/inputFile/InputFile';
import UploadArtUtils from '../../handles/uploadArt.ultils';
import { sizes } from '../../utils/sizings';

function UploadArtScreen() {
  const uploadArtUtils = UploadArtUtils();
  const { filePath, setFilePath, uploadFile } = uploadArtUtils;

  return (
    <View style={styles.container}>
      <Text>Upload art screen</Text>
      <InputFile filePath={filePath} setFilePath={setFilePath} />
      <ButtonCommon title="Upload file to firebase" onPress={uploadFile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: sizes.size_100,
  },
});

export default UploadArtScreen;
