import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { fontWeights, sizes } from '../../utils/sizings';

interface IProps {
  imageUrl: string | any;
  title: string;
  redirectTo: () => void;
}

const LinkItem = ({ imageUrl, title, redirectTo }: IProps) => {
  return (
    <View style={styles.wrapLink}>
      <View style={styles.wrapImage}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={redirectTo} style={styles.wrapIconRedirect}>
        <Image source={images.external} style={styles.iconRedirect} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapLink: {
    paddingHorizontal: sizes.size_16,
    paddingVertical: sizes.size_16,
    borderRadius: sizes.size_16,
    marginBottom: sizes.size_16,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  wrapImage: {},
  image: {
    width: sizes.size_30,
    height: sizes.size_30,
  },
  title: {
    marginLeft: sizes.size_32,
    alignItems: 'center',
    fontSize: sizes.size_16,
    lineHeight: sizes.size_24,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
  },
  wrapIconRedirect: {
    marginLeft: 'auto',
  },
  iconRedirect: {
    width: sizes.size_24,
    height: sizes.size_24,
  },
});

export default LinkItem;
