import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../utils/colors';
import { fontWeights, sizes } from '../../utils/sizings';
import ButtonCommon from '../common/buttons/commonButton/CommonButton';

interface IProps {
  reservePrice: number;
  placeABid: () => void;
}

const ReservePrice = ({ reservePrice, placeABid }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.reservePriceTitle}>Reserve Price</Text>
      <View style={styles.wrapReservePrice}>
        <Text style={styles.reservePrice}>{reservePrice.toFixed(2)} ETH</Text>
        <Text style={styles.convertPrice}>
          {'$'}
          {reservePrice.toFixed(5)}
        </Text>
      </View>
      <Text style={styles.description}>
        Once a bid has been placed and the reserve price has been met, a 24 hour
        auction for this artwork will begin.
      </Text>

      <ButtonCommon title="Place a bid" onPress={placeABid} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: sizes.size_24,
    paddingTop: sizes.size_20,
    paddingBottom: sizes.size_36,
    borderRadius: sizes.size_24,
    marginBottom: sizes.size_16,
    backgroundColor: colors.white,
    position: 'relative',
  },
  reservePriceTitle: {
    fontSize: sizes.size_20,
    lineHeight: sizes.size_28,
    fontWeight: fontWeights.fontWeight_400,
    color: colors.grayBody,
    marginBottom: sizes.size_8,
  },
  wrapReservePrice: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: sizes.size_12,
  },
  reservePrice: {
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
  description: {
    fontSize: sizes.size_16,
    lineHeight: sizes.size_22,
    fontWeight: fontWeights.fontWeight_400,
    color: colors.grayLabel,
    marginBottom: sizes.size_32,
  },
});

export default ReservePrice;
