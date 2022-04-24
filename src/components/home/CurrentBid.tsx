import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useCountdown } from '../../hooks/countdown';
import colors from '../../utils/colors';
import { fontWeights, sizes } from '../../utils/sizings';
import ButtonCommon from '../common/buttons/commonButton/CommonButton';

interface IProps {
  currentBid: number;
  timeEnd: string | Date;
  placeABid: () => void;
}

const CurrentBid = ({ currentBid, placeABid, timeEnd }: IProps) => {
  const [days, hours, minutes, seconds] = useCountdown(timeEnd);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.currentBidTitle}>Current Bid</Text>
      <View style={styles.wrapCurrentBid}>
        <Text style={styles.currentBid}>{currentBid.toFixed(2)} ETH</Text>
        <Text style={styles.convertPrice}>
          {'$'}
          {currentBid.toFixed(5)}
        </Text>
      </View>

      <Text style={styles.endTimeTitle}>Auction ending in</Text>

      <View style={styles.wrapTime}>
        {days > 0 && (
          <View style={styles.wrapTimeItem}>
            <Text style={styles.time}>{hours < 10 ? `0${hours}` : hours}</Text>
            <Text style={styles.timeDetail}>hours</Text>
          </View>
        )}
        {hours && hours > 0 && (
          <View style={styles.wrapTimeItem}>
            <Text style={styles.time}>{hours < 10 ? `0${hours}` : hours}</Text>
            <Text style={styles.timeDetail}>hours</Text>
          </View>
        )}
        {(minutes || minutes === 0) && (
          <View style={styles.wrapTimeItem}>
            <Text style={styles.time}>
              {minutes < 10 ? `0${minutes}` : minutes}
            </Text>
            <Text style={styles.timeDetail}>minutes</Text>
          </View>
        )}
        {(seconds || seconds === 0) && (
          <View style={styles.wrapTimeItem}>
            <Text style={styles.time}>
              {seconds < 10 ? `0${seconds}` : seconds}
            </Text>
            <Text style={styles.timeDetail}>seconds</Text>
          </View>
        )}
      </View>

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
  currentBidTitle: {
    fontSize: sizes.size_20,
    lineHeight: sizes.size_28,
    fontWeight: fontWeights.fontWeight_400,
    color: colors.grayBody,
    marginBottom: sizes.size_8,
  },
  wrapCurrentBid: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: sizes.size_12,
  },
  currentBid: {
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
  endTimeTitle: {
    fontSize: sizes.size_20,
    lineHeight: sizes.size_24,
    fontWeight: fontWeights.fontWeight_400,
    color: colors.grayBody,
    marginTop: sizes.size_8,
    marginBottom: sizes.size_8,
  },
  wrapTime: {
    flexDirection: 'row',
  },
  wrapTimeItem: {
    marginRight: sizes.size_12,
    marginBottom: sizes.size_32,
  },
  time: {
    fontSize: sizes.size_24,
    lineHeight: sizes.size_32,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
  },
  timeDetail: {
    fontSize: sizes.size_13,
    lineHeight: sizes.size_20,
    color: colors.grayLabel,
    fontWeight: fontWeights.fontWeight_500,
  },
});

export default CurrentBid;
