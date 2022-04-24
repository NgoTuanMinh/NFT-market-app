import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import colors from '../../utils/colors';
import {fontWeights, sizes} from '../../utils/sizings';

interface IProps {
  imageUrl: string;
  nameProduct: string;
  viewAuction: () => void;
  highestBid: number;
  reservePrice: number;
}

const HotBid = ({imageUrl, nameProduct, highestBid, reservePrice}: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapImage}>
        <Image source={{uri: imageUrl}} style={styles.image} />
      </View>

      <View style={styles.wrapInfo}>
        <View style={styles.leftInfoAuction}>
          <Text style={styles.textNameProduct}>{nameProduct}</Text>
          <View style={styles.wrapHighestBid}>
            <Text style={styles.highestBidDescription}>Highest bid </Text>
            <Text style={styles.highestBid}>{highestBid} ETH</Text>
          </View>
        </View>
        <View style={styles.rightInfoAuction}>
          <Text style={styles.reservePrice}>{reservePrice} ETH</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: sizes.size_8,
  },
  wrapImage: {
    overflow: 'hidden',
    borderRadius: sizes.size_28,
    marginBottom: sizes.size_8,
  },
  image: {
    borderRadius: sizes.size_28,
    width: sizes.size_250,
    height: sizes.size_300,
    resizeMode: 'cover',
  },
  wrapInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: sizes.size_250,
    paddingHorizontal: sizes.size_12,
  },
  leftInfoAuction: {
    // position: 'relative',
  },
  textNameProduct: {
    fontSize: sizes.size_16,
    fontWeight: fontWeights.fontWeight_700,
    lineHeight: sizes.size_24,
    color: colors.grayTitleActive,
  },
  wrapHighestBid: {
    flexDirection: 'row',
  },
  highestBidDescription: {
    fontSize: sizes.size_13,
    lineHeight: sizes.size_20,
    fontWeight: fontWeights.fontWeight_500,
    color: colors.grayLabel,
  },
  highestBid: {
    color: colors.grayBody,
    fontSize: sizes.size_14,
    fontWeight: fontWeights.fontWeight_700,
    lineHeight: sizes.size_20,
  },
  rightInfoAuction: {
    borderWidth: sizes.size_1,
    borderRadius: sizes.size_32,
    borderColor: colors.grayLine,
    paddingVertical: sizes.size_4,
    paddingHorizontal: sizes.size_16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reservePrice: {
    color: colors.grayTitleActive,
    fontSize: sizes.size_16,
    lineHeight: sizes.size_24,
    fontWeight: fontWeights.fontWeight_700,
  },
});

export default HotBid;
