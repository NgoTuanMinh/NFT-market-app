import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonCommon from '../../components/common/buttons/commonButton/CommonButton';
import InputFile from '../../components/common/inputFile/InputFile';
import InputText from '../../components/common/inputText/InputText';
import UploadArtUtils from '../../handles/uploadArt.ultils';
import colors from '../../utils/colors';
import icons from '../../utils/icons/icons';
import { fontWeights, sizes } from '../../utils/sizings';

function UploadArtScreen() {
  const uploadArtUtils = UploadArtUtils();
  const {
    filePath,
    setFilePath,
    itemName,
    onChangeItemName,
    onChangeTags,
    tags,
    onChangeDescription,
    description,
    createProduct,
  } = uploadArtUtils;

  return (
    <ScrollView style={styles.container}>
      {/* <Text>Upload art screen</Text>
      <InputFile filePath={filePath} setFilePath={setFilePath} />
      <ButtonCommon title="Upload file to firebase" onPress={uploadFile} /> */}
      <Text style={styles.title}>Upload Artwork</Text>
      <InputFile filePath={filePath} setFilePath={setFilePath} />
      <Text style={styles.infoTitle}>Information</Text>
      <InputText
        onChange={onChangeItemName}
        value={itemName}
        label='Item name'
        style={{backgroundColor: colors.white}}
      />
      <View style={{marginBottom: sizes.size_12,}} />
      <InputText
        onChange={onChangeTags}
        value={tags}
        label='Tag'
        style={{backgroundColor: colors.white}}
      />
      <View style={{marginBottom: sizes.size_12,}} />
      <InputText
        onChange={onChangeDescription}
        value={description}
        label='Description'
        numberOfLines={4}
        style={{height: 120, backgroundColor: colors.white}}
      />
      <View style={{marginBottom: sizes.size_24,}} />
      <ButtonCommon
        onPress={createProduct}
        title='Upload'
        imageSource={icons.uploadIcon}
      />
      <View style={{marginBottom: sizes.size_32,}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: sizes.size_16,
    backgroundColor: colors.grayBackground,
  },
  title: {
    fontSize: sizes.size_24,
    lineHeight: sizes.size_32,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayBody,
    marginTop: sizes.size_16,
    marginBottom: sizes.size_16,
  },
  infoTitle: {
    fontSize: sizes.size_14,
    lineHeight: sizes.size_20,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayBody,
    marginVertical: sizes.size_8,
  }
});

export default UploadArtScreen;
