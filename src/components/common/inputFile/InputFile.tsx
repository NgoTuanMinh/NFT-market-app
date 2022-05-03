import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import { launchImageLibrary } from 'react-native-image-picker';
import colors from '../../../utils/colors';
import icons from '../../../utils/icons/icons';
import { sizes } from '../../../utils/sizings';

interface InputFileProps {
  filePath: any;
  setFilePath: any;
}

const InputFile = ({ filePath, setFilePath }: InputFileProps) => {
  const chooseFile = async (type: any) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
    };
    await launchImageLibrary(options, (response: any) => {
      //   console.log('Response = ', response?.assets[0]);

      if (response.didCancel) {
        // Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode === 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode === 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode === 'others') {
        Alert.alert(response.errorMessage || '');
        return;
      }
      const file = response?.assets[0];
      console.log('base64 -> ', file?.base64);
      console.log('uri -> ', file?.uri);
      console.log('width -> ', file?.width);
      console.log('height -> ', file?.height);
      console.log('fileSize -> ', file?.fileSize);
      console.log('type -> ', file?.type);
      console.log('fileName -> ', file?.fileName);
      setFilePath(file);
    });
  };

  return (
    <View style={styles.container}>
      {filePath?.uri && (
        <Image source={{ uri: filePath?.uri }} style={styles.imageStyle} />
      )}
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => chooseFile('photo')}>
        <Image source={icons.imageIcon} style={styles.uploadIcon} />
        <Text style={styles.textStyle}>Choose Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputFile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayBackground,
    alignItems: 'center',
    marginBottom: sizes.size_16,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: sizes.size_4,
    width: sizes.size_200,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: sizes.size_24,
    borderWidth: sizes.size_1,
  },
  imageStyle: {
    width: sizes.size_100,
    height: sizes.size_100,
    marginBottom: sizes.size_16,
  },
  uploadIcon: {
    width: sizes.size_24,
    height: sizes.size_24,
  },
});
