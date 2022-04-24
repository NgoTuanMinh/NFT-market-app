import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useCountdown} from '../../hooks/countdown';
import colors from '../../utils/colors';
import images from '../../utils/images';
import {fontWeights, sizes} from '../../utils/sizings';
import Avatar from '../common/avatar/Avatar';

interface IProps {
  imageUrl: string;
  nameProduct: string;
  nameCreator: string;
  avatarUrlCreator: string;
  viewAuction: () => void;
  likeAuction: () => void;
  liked: boolean;
  currentBid: number;
  isOnline: boolean;
  timeEnd: Date | string;
}

const LiveAuction = ({
  imageUrl,
  nameCreator,
  nameProduct,
  avatarUrlCreator,
  liked = false,
  currentBid,
  viewAuction,
  isOnline = false,
  timeEnd,
}: IProps) => {
  const [days, hours, minutes, seconds] = useCountdown(timeEnd);

  const isSold = days < 0 && hours < 0 && minutes < 0 && seconds < 0;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.wrapInfo}>
          <View style={styles.wrapImage}>
            <TouchableOpacity onPress={viewAuction}>
              <Image source={{uri: imageUrl}} style={styles.image} />
            </TouchableOpacity>
          </View>

          <Text style={styles.nameProduct}>{nameProduct}</Text>

          <View style={styles.wrapInfoCreator}>
            <Avatar
              urlAvatar={avatarUrlCreator}
              isOnline={isOnline}
              height={sizes.size_52}
              name={nameCreator}
            />
            <View style={styles.wrapNameCreator}>
              <Text style={styles.textNameCreator}>{nameCreator}</Text>
              <Text style={styles.textCreatorDescription}>Creator</Text>
            </View>
            <View style={styles.wrapHeart}>
              <Image
                source={liked ? images.heartActive : images.heart}
                style={styles.heart}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={viewAuction}>
        <View
          style={[
            styles.wrapInfoAuction,
            !isSold && styles.wrapInfoAuctionNotSold,
          ]}>
          {!isSold && (
            <>
              <View style={styles.leftInfoAuction}>
                {true && <View style={styles.onlineStatus} />}
                <Text style={styles.leftInfoAuctionText}>Current Bid</Text>
                <Text style={styles.leftInfoAuctionPrice}>
                  {currentBid} ETH
                </Text>
              </View>
              <View>
                <Text style={styles.leftInfoAuctionText}>Ending in</Text>
                <Text style={styles.leftInfoAuctionPrice}>
                  {days > 0 && `${days < 10 ? `0${days}` : days}d `}
                  {hours > 0 && `${hours < 10 ? `0${hours}` : hours}h `}
                  {(minutes || minutes === 0) &&
                    `${minutes < 10 ? `0${minutes}` : minutes}m `}
                  {(seconds || seconds === 0) &&
                    `${seconds < 10 ? `0${seconds}` : seconds}s`}
                </Text>
              </View>
            </>
          )}
          {isSold && (
            <View style={styles.wrapSold}>
              <Text style={styles.soldForTitle}>Sold for </Text>
              <Text style={styles.soldForPrice}>{currentBid} ETH</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: sizes.size_24,
  },
  wrapper: {
    borderRadius: sizes.size_32,
    overflow: 'hidden',
    backgroundColor: colors.white,
    padding: sizes.size_16,
    marginBottom: sizes.size_16,
  },
  wrapInfo: {
    borderRadius: sizes.size_32,
  },
  wrapImage: {
    overflow: 'hidden',
    borderRadius: sizes.size_32,
    marginBottom: sizes.size_8,
  },
  image: {
    borderRadius: sizes.size_32,
    width: sizes.size_320,
    height: sizes.size_400,
    resizeMode: 'cover',
  },
  nameProduct: {
    color: colors.grayTitleActive,
    fontWeight: fontWeights.fontWeight_700,
    fontSize: sizes.size_24,
    lineHeight: sizes.size_32,
  },
  wrapInfoCreator: {
    flexDirection: 'row',
    marginTop: sizes.size_4,
    height: sizes.size_60,
  },
  wrapNameCreator: {
    marginLeft: sizes.size_12,
  },
  textNameCreator: {
    fontSize: sizes.size_18,
    lineHeight: sizes.size_28,
    fontWeight: fontWeights.fontWeight_700,
  },
  textCreatorDescription: {
    fontSize: sizes.size_14,
    fontWeight: fontWeights.fontWeight_500,
    lineHeight: sizes.size_20,
  },
  wrapHeart: {
    marginLeft: 'auto',
    justifyContent: 'center',
    marginBottom: sizes.size_16,
    marginRight: sizes.size_8,
  },
  heart: {
    width: sizes.size_24,
    height: sizes.size_24,
  },
  wrapReservePrice: {
    flexDirection: 'row',
    marginTop: sizes.size_8,
    marginBottom: sizes.size_16,
  },
  reservePriceTitle: {
    fontSize: sizes.size_16,
    lineHeight: sizes.size_22,
    fontWeight: fontWeights.fontWeight_400,
    paddingTop: sizes.size_8,
    color: colors.grayTitleActive,
  },
  reserverPrice: {
    fontSize: sizes.size_24,
    lineHeight: sizes.size_32,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
  },
  wrapInfoAuction: {
    backgroundColor: colors.white,
    borderColor: colors.grayBody,
    borderRadius: sizes.size_50,
    width: '96%',
    paddingVertical: sizes.size_12,
    marginHorizontal: sizes.size_4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  wrapInfoAuctionNotSold: {
    borderWidth: 1,
  },
  leftInfoAuction: {
    position: 'relative',
  },
  leftInfoAuctionText: {
    fontSize: sizes.size_16,
    fontWeight: fontWeights.fontWeight_400,
    color: colors.grayLabel,
  },
  leftInfoAuctionPrice: {
    fontSize: sizes.size_20,
    fontWeight: fontWeights.fontWeight_700,
    lineHeight: sizes.size_28,
    color: colors.grayTitleActive,
  },
  onlineStatus: {
    backgroundColor: colors.success,
    width: sizes.size_10,
    height: sizes.size_10,
    borderRadius: sizes.size_5,
    position: 'absolute',
    top: sizes.size_7,
    left: -sizes.size_12,
    borderWidth: sizes.size_2,
    borderColor: colors.white,
  },
  wrapSold: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  soldForTitle: {
    fontSize: sizes.size_20,
    lineHeight: sizes.size_28,
    color: colors.grayLabel,
    fontWeight: fontWeights.fontWeight_400,
  },
  soldForPrice: {
    fontSize: sizes.size_24,
    lineHeight: sizes.size_32,
    color: colors.grayLabel,
    fontWeight: fontWeights.fontWeight_700,
  },
});

export default LiveAuction;
