import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
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

// const LinkItem = ()

const listTag = [
  'color',
  'circle',
  'black',
  'art',
  'color',
  'circle',
  'black',
  'art',
];

function DetailAuctionScreen({ route, navigation }: any) {
  const redirectTo = () => {
    console.log('123');
  };

  const placeABid = () => {
    console.log('Place a bid');
  };

  const { auctionId } = route?.params;
  console.log('auctionId', auctionId);

  const isSold = false;
  const isNoActivity = true;
  const isLiveAuction = !isSold && !isNoActivity;

  const auctionUtils = AuctionDetailUtils();
  const {
    onChangePlaceBid,
    priceBidPlaced,
    handleHideModalPlaceBid,
    handleShowModalPlaceBid,
    showModalPlaceBid,
  } = auctionUtils;

  const screenName = isSold ? 'Auction Sold' : 'Live Auction';

  useEffect(() => {
    navigation.setOptions({
      headerTitle: screenName,
    });
  }, [screenName, navigation]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.wrapImage}>
        <Image
          source={{ uri: 'https://wallpaperaccess.com/full/7280.jpg' }}
          style={styles.image}
        />
      </View>

      <View style={styles.wrapNameProduct}>
        <Text style={styles.nameProduct}>Silent Color</Text>
        <View style={styles.wrapIconHeart}>
          <Image source={images.heart} style={styles.iconHeart} />
        </View>
      </View>

      <View style={styles.wrapSeller}>
        <Avatar urlAvatar={undefined} name={'openart'} height={30} />
        <Text style={styles.sellerName}>@openart</Text>
      </View>

      <Text style={styles.textDescriptionProduct}>
        Together with my design team, we designed this futuristic Cyberyacht
        concept artwork. We wanted to create something that has not been created
        yet, so we started to collect ideas of how we imagine the Cyberyacht
        could look like in the future.
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
          redirectTo={redirectTo}
        />
        <LinkItem
          imageUrl={images.iconStar}
          title="View on IPFS"
          redirectTo={redirectTo}
        />
        <LinkItem
          imageUrl={images.chartPie}
          title="View IPFS Metadata"
          redirectTo={redirectTo}
        />
      </View>

      {isSold && (
        <SoldDetail
          soldByAvatar={'https://wallpaperaccess.com/full/391240.jpg'}
          soldByName={'david'}
          soldPrice={1.5}
        />
      )}

      {isNoActivity && (
        <ReservePrice reservePrice={1.5} placeABid={handleShowModalPlaceBid} />
      )}

      {isLiveAuction && (
        <CurrentBid
          currentBid={1.5}
          placeABid={placeABid}
          timeEnd={'2022-04-23T16:23:49.000Z'}
        />
      )}

      <Text style={styles.activityListText}>Activity</Text>

      <BidActivity
        bidByAvatar={
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
        bidByName={'David'}
        bidPrice={1.5}
        bidTime={'2022-04-23T16:23:49.000Z'}
        isWinner={true}
      />

      <BidActivity
        bidByAvatar={undefined}
        bidByName={'David'}
        bidPrice={1.5}
        bidTime={'2022-04-23T16:23:49.000Z'}
        isWinner={false}
      />

      <ModalPlaceBid
        visible={showModalPlaceBid}
        hideModal={handleHideModalPlaceBid}
        minBid={0.09}
        placeAbid={placeABid}
        bidPrice={priceBidPlaced}
        onChangeInput={onChangePlaceBid}
        balence={1234}
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
