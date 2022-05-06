/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Image, Linking, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, Text } from 'react-native-paper';
import Avatar from '../../components/common/avatar/Avatar';
import BidActivity from '../../components/home/BidActivity';
import CurrentBid from '../../components/home/CurrentBid';
import LinkItem from '../../components/home/Link';
import ModalPlaceBid from '../../components/home/ModalPlaceABid';
import ReservePrice from '../../components/home/ReservePrice';
import SoldDetail from '../../components/home/SoldDetail';
import TagItem from '../../components/home/Tag';
import Footer from '../../components/layout/Footer';
import AuctionDetailUtils from '../../handles/auctionDetail.ultils';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { fontWeights, sizes } from '../../utils/sizings';

function DetailAuctionScreen({ route, navigation }: any) {
  const { auctionId } = route?.params;

  const auctionUtils = AuctionDetailUtils(auctionId);
  const {
    onChangePlaceBid,
    priceBidPlaced,
    handleHideModalPlaceBid,
    handleShowModalPlaceBid,
    showModalPlaceBid,
    screenName,
    auctionDetail,
    isLoading,
    listTag,
    isLiveAuction,
    isNoActivity,
    isSold,
    placeABid,
    userInfo,
    listBidDisplay,
  } = auctionUtils;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: screenName,
    });
  }, [screenName, navigation]);

  if (!auctionDetail) {
    return <></>;
  }

  if (isLoading) {
    return <ActivityIndicator animating={true} />;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.wrapImage}>
        <Image
          source={{ uri: auctionDetail?.product?.imageUrl }}
          style={styles.image}
        />
      </View>

      <View style={styles.wrapNameProduct}>
        <Text style={styles.nameProduct}>{auctionDetail?.product?.name}</Text>
        <View style={styles.wrapIconHeart}>
          <Image source={images.heart} style={styles.iconHeart} />
        </View>
      </View>

      <View style={styles.wrapSeller}>
        <Avatar
          urlAvatar={undefined}
          name={auctionDetail?.seller?.userInformation?.displayName}
          height={30}
        />
        <Text style={styles.sellerName}>
          @{auctionDetail?.seller?.userInformation?.displayName}
        </Text>
      </View>

      <Text style={styles.textDescriptionProduct}>
        {auctionDetail?.product?.description}
      </Text>

      <View style={styles.wrapListTag}>
        {listTag.map((tagValue: string, idx: number) => (
          <TagItem type={tagValue} key={idx} />
        ))}
      </View>

      <View style={styles.wrapListLink}>
        <LinkItem
          imageUrl={images.image1}
          title="View on Etherscan"
          redirectTo={() => Linking.openURL('https://etherscan.io/')}
        />
        <LinkItem
          imageUrl={images.iconStar}
          title="View on IPFS"
          redirectTo={() => Linking.openURL('https://ipfs.io/')}
        />
        <LinkItem
          imageUrl={images.chartPie}
          title="View IPFS Metadata"
          redirectTo={() =>
            Linking.openURL(
              'https://docs.ipfs.io/how-to/best-practices-for-nft-data/',
            )
          }
        />
      </View>

      {isSold && (
        <SoldDetail
          soldByAvatar={'https://wallpaperaccess.com/full/391240.jpg'}
          soldByName={'david'}
          soldPrice={
            Number(
              auctionDetail?.sessionInformation?.largestBid?.bidPrice?.toFixed(
                2,
              ),
            ) ||
            Number((auctionDetail?.sessionInformation?.reservePrice).toFixed(2))
          }
        />
      )}

      {isNoActivity && (
        <ReservePrice
          reservePrice={auctionDetail?.sessionInformation?.reservePrice}
          placeABid={handleShowModalPlaceBid}
        />
      )}

      {isLiveAuction && (
        <CurrentBid
          currentBid={auctionDetail?.sessionInformation?.largestBid?.bidPrice || auctionDetail?.sessionInformation?.reservePrice}
          placeABid={handleShowModalPlaceBid}
          timeEnd={auctionDetail?.sessionInformation?.timeEnd}
        />
      )}

      {listBidDisplay.length > 0 && <Text style={styles.activityListText}>Activity</Text>}

      {listBidDisplay.length > 0 &&
        listBidDisplay.map((bidDisplay, idx) => (
          <BidActivity
            bidByAvatar={bidDisplay?.bidByAvatar}
            bidByName={bidDisplay?.bidByName}
            bidPrice={bidDisplay?.bidPrice}
            bidTime={bidDisplay?.bidTime}
            isWinner={bidDisplay?.isWinner}
            key={`BidActivity-${idx}`}
          />
        ))}

      <ModalPlaceBid
        visible={showModalPlaceBid}
        hideModal={handleHideModalPlaceBid}
        minBid={
          Number(auctionDetail?.sessionInformation?.largestBid?.bidPrice) ||
          Number(auctionDetail?.sessionInformation?.reservePrice)
        }
        placeAbid={placeABid}
        bidPrice={priceBidPlaced}
        onChangeInput={onChangePlaceBid}
        balence={Number(userInfo?.balence?.amount)}
      />

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayBackground,
    paddingTop: sizes.size_24,
    paddingHorizontal: sizes.size_16,
  },
  wrapImage: {
    overflow: 'hidden',
    borderRadius: sizes.size_32,
    marginBottom: sizes.size_8,
    alignItems: 'center',
  },
  image: {
    borderRadius: sizes.size_32,
    width: sizes.size_320,
    height: sizes.size_400,
    resizeMode: 'cover',
  },
  wrapNameProduct: {
    flexDirection: 'row',
    marginTop: sizes.size_8,
    alignItems: 'center',
    paddingLeft: sizes.size_24,
    paddingRight: sizes.size_32,
    justifyContent: 'space-between',
  },
  nameProduct: {
    fontSize: sizes.size_24,
    lineHeight: sizes.size_32,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
  },
  wrapIconHeart: {
    justifyContent: 'center',
    padding: sizes.size_12,
    backgroundColor: colors.white,
    borderRadius: sizes.size_32,
  },
  iconHeart: {
    width: sizes.size_20,
    height: sizes.size_20,
  },
  wrapSeller: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: sizes.size_8,
    paddingHorizontal: sizes.size_12,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: sizes.size_24,
    borderRadius: sizes.size_32,
  },
  sellerName: {
    fontSize: sizes.size_16,
    fontWeight: fontWeights.fontWeight_700,
    lineHeight: sizes.size_24,
    color: colors.grayBody,
    marginLeft: sizes.size_12,
  },
  textDescriptionProduct: {
    marginHorizontal: sizes.size_24,
    marginTop: sizes.size_12,
    lineHeight: sizes.size_20,
    fontSize: sizes.size_13,
    fontWeight: fontWeights.fontWeight_500,
    color: colors.grayLabel,
    marginBottom: sizes.size_16,
  },
  wrapListTag: {
    flexDirection: 'row',
    marginHorizontal: sizes.size_24,
    flexWrap: 'wrap',
    marginBottom: sizes.size_24,
  },
  wrapListLink: {
    paddingHorizontal: sizes.size_8,
    marginBottom: sizes.size_12,
  },
  activityListText: {
    fontSize: sizes.size_20,
    lineHeight: sizes.size_28,
    fontWeight: fontWeights.fontWeight_400,
    color: colors.grayBody,
    marginBottom: sizes.size_24,
  },
});

export default DetailAuctionScreen;
