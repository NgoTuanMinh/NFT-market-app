import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { fontWeights, sizes } from '../../utils/sizings';
import Avatar from '../common/avatar/Avatar';

interface IProps {
  soldByAvatar: string | any;
  soldByName: string;
  soldPrice: number;
}

const SoldDetail = ({ soldByAvatar, soldByName, soldPrice }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <Image source={images.emojiStar} style={styles.emojiStar} />

      <View style={styles.wrapPrice}>
        <Text style={styles.priceTitle}>Sold for </Text>
        <Text style={styles.price}>{soldPrice.toFixed(2)} ETH</Text>
        <Text style={styles.convertPrice}>
          {'$'}
          {soldPrice.toFixed(2)}
        </Text>
      </View>

      <View style={styles.wrapName}>
        <Text style={styles.nameTitle}>Owner by</Text>
        <Avatar urlAvatar={soldByAvatar} name={'david'} height={30} />
        <Text style={styles.name}>@{soldByName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: sizes.size_24,
    paddingVertical: sizes.size_12,
    borderRadius: sizes.size_24,
    marginBottom: sizes.size_16,
    backgroundColor: colors.white,
    position: 'relative',
  },
  wrapPrice: {
    flexDirection: 'row',
    paddingTop: sizes.size_8,
    alignItems: 'flex-end',
  },
  priceTitle: {
    fontSize: sizes.size_20,
    lineHeight: sizes.size_28,
    fontWeight: fontWeights.fontWeight_400,
    color: colors.grayBody,
  },
  price: {
    marginLeft: sizes.size_12,
    fontSize: sizes.size_24,
    lineHeight: sizes.size_32,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
  },
  convertPrice: {
    fontSize: sizes.size_16,
    lineHeight: sizes.size_24,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayPlaceHolder,
    marginLeft: sizes.size_12,
  },
  wrapName: {
    flexDirection: 'row',
    paddingTop: sizes.size_8,
    marginBottom: sizes.size_8,
  },
  nameTitle: {
    fontSize: sizes.size_20,
    lineHeight: sizes.size_28,
    fontWeight: fontWeights.fontWeight_400,
    color: colors.grayBody,
    marginRight: sizes.size_12,
  },
  name: {
    fontSize: sizes.size_16,
    lineHeight: sizes.size_24,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayBody,
    marginLeft: sizes.size_8,
  },
  wrapEmojiStar: {},
  emojiStar: {
    position: 'absolute',
    top: sizes.size_12,
    right: sizes.size_12,
  },
});

export default SoldDetail;
