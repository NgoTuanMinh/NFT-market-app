import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import images from '../../utils/images';
import {sizes} from '../../utils/sizings';
import colors from '../../utils/colors';
import ButtonCommon from '../common/buttons/commonButton/CommonButton';

export default function Footer() {

  const onPress = () => {
    console.log('onPress');
  }

  return (
    <View style={styles.wrapFooter}>
      <Image source={images.logoFooter} style={styles.logo} />

      <Image source={images.logoDescription} style={styles.logoDescription} />

      <ButtonCommon
        title='Earn now'
        primary={true}
        onPress={onPress}
      />
      <View style={{marginBottom: sizes.size_12}} />

      <ButtonCommon
        title='Earn now'
        primary={false}
        onPress={onPress}
      />
      <View style={{marginBottom: sizes.size_12}} />

    </View>
  );
}

const styles = StyleSheet.create({
  wrapFooter: {
    padding: sizes.size_16,
    backgroundColor: colors.grayBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: sizes.size_16,
    marginTop: sizes.size_32,
  },
  logo: {
    marginBottom: sizes.size_12,
  },
  logoDescription: {
    marginBottom: sizes.size_32,
  }
});
