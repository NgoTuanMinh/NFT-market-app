import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import images from '../../utils/images';
import {isIphoneXorAbove, sizes} from '../../utils/sizings';
import colors from '../../utils/colors';

export default function Header() {
  const isIphoneX = isIphoneXorAbove();

  return (
    <View style={[styles.wrapHeader, isIphoneX && styles.wrapInIos]}>
      <Image source={images.logo} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapHeader: {
    padding: sizes.size_16,
    paddingBottom: 0,
    backgroundColor: colors.grayBackground,
  },
  wrapInIos: {
    paddingTop: sizes.size_48,
  },
  image: {},
});
