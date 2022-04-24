import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../utils/colors';
import { fontWeights, sizes } from '../../utils/sizings';
import Avatar from '../common/avatar/Avatar';

interface IProps {
  bidByAvatar: string | any;
  bidByName: string;
  bidPrice: number;
  bidTime: string | any;
  isWinner: boolean;
}

const BidActivity = ({
  bidByAvatar,
  bidByName,
  bidPrice,
  bidTime,
  isWinner,
}: IProps) => {
  const convertTime = (time: string | any) => {
    return time;
  };

  return (
    <View style={styles.wrapLink}>
      <View style={styles.wrapImage}>
        <Avatar urlAvatar={bidByAvatar} name={bidByName} height={48} />
      </View>

      <View>
        <Text style={styles.title}>
          {isWinner ? 'Auction won by ' : 'Bid place by @'}
          {bidByName}
        </Text>
        <Text style={styles.bidTime}>{convertTime(bidTime)}</Text>
        <Text style={styles.bidPrice}>
          {isWinner && 'Sold for '}
          {bidPrice.toFixed(2)} ETH
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapLink: {
    paddingHorizontal: sizes.size_16,
    paddingVertical: sizes.size_16,
    borderRadius: sizes.size_24,
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
    marginLeft: sizes.size_16,
    alignItems: 'center',
    fontSize: sizes.size_14,
    lineHeight: sizes.size_20,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
  },
  bidTime: {
    marginLeft: sizes.size_16,
    fontSize: sizes.size_13,
    lineHeight: sizes.size_20,
    fontWeight: fontWeights.fontWeight_500,
    color: colors.grayLabel,
  },
  bidPrice: {
    marginLeft: sizes.size_16,
    fontSize: sizes.size_16,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
    lineHeight: sizes.size_24,
  },
});

export default BidActivity;
