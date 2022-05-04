import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import HotBid from '../../components/home/HotBid';
import LiveAuction from '../../components/home/LiveAuction';
import RecommendAuction from '../../components/home/RecommendAuction';
import Banner from '../../components/layout/Banner';
import Footer from '../../components/layout/Footer';
import HomeUtils from '../../handles/home.ultils';
import { Auction } from '../../types/auction';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { fontWeights, sizes } from '../../utils/sizings';

function HomeScreen() {
  const onPress = () => {
    console.log('123');
  };

  const homeUtils = HomeUtils();
  const {
    goToDetailSold,
    listAuction = [],
    checkLikedRecommendAuction,
  } = homeUtils;

  const recommendAuction = listAuction[0];
  const listAuctionOther = listAuction.slice(1);

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Banner />

        <RecommendAuction
          imageUrl={recommendAuction?.product?.imageUrl}
          avatarUrlCreator={
            recommendAuction?.seller?.userInformation?.profileImage || ''
          }
          nameCreator={
            recommendAuction?.seller?.userInformation?.displayName || ''
          }
          nameProduct={recommendAuction?.product?.name}
          liked={checkLikedRecommendAuction(recommendAuction)}
          reservePrice={recommendAuction?.sessionInformation?.reservePrice}
          viewArtWork={onPress}
          placeABid={onPress}
          likeAuction={onPress}
        />

        {listAuctionOther?.length > 0 && (
          <View style={styles.wrapLiveAuctionTitle}>
            <View style={styles.liveStatus} />
            <Text style={styles.liveAuctionTitle}>Live auctions</Text>
          </View>
        )}

        {listAuctionOther.map((auctionItem: Auction, key) => (
          <LiveAuction
            timeEnd={auctionItem?.sessionInformation?.timeEnd}
            imageUrl={auctionItem?.product?.imageUrl}
            avatarUrlCreator={
              auctionItem?.seller?.userInformation?.profileImage || ''
            }
            nameCreator={
              auctionItem?.seller?.userInformation?.displayName || ''
            }
            nameProduct={auctionItem?.product?.name || ''}
            liked={checkLikedRecommendAuction(auctionItem)}
            currentBid={
              auctionItem?.sessionInformation?.largestBid?.bidPrice || auctionItem?.sessionInformation?.reservePrice
            }
            viewAuction={() => goToDetailSold(Number(auctionItem.id))}
            likeAuction={onPress}
            isOnline={true}
            key={key}
          />
        ))}

        <View style={styles.wrapHotBid}>
          <Image source={images.iconHotBid} style={styles.iconHotBid} />
          <Text style={styles.textHotBid}>Hot bid</Text>
        </View>

        <ScrollView
          style={styles.listHotBid}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <HotBid
            imageUrl={'https://wallpaperaccess.com/full/391242.jpg'}
            nameProduct="Silent Wave"
            viewAuction={onPress}
            highestBid={3.0}
            reservePrice={2.3}
          />
          <HotBid
            imageUrl={
              'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            nameProduct="Silent Wave"
            viewAuction={onPress}
            highestBid={3.0}
            reservePrice={2.3}
          />
          <HotBid
            imageUrl={
              'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            nameProduct="Silent Wave"
            viewAuction={onPress}
            highestBid={3.0}
            reservePrice={2.3}
          />
          <HotBid
            imageUrl={
              'https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            }
            nameProduct="Silent Wave"
            viewAuction={onPress}
            highestBid={3.0}
            reservePrice={2.3}
          />
        </ScrollView>
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayBackground,
    paddingHorizontal: sizes.size_16,
  },
  wrapLiveAuctionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.size_16,
    marginBottom: sizes.size_16,
  },
  liveStatus: {
    backgroundColor: colors.alert,
    width: sizes.size_8,
    height: sizes.size_8,
    borderRadius: sizes.size_4,
    marginRight: sizes.size_8,
  },
  liveAuctionTitle: {
    fontSize: sizes.size_24,
    fontWeight: fontWeights.fontWeight_700,
    lineHeight: sizes.size_32,
    color: colors.grayTitleActive,
  },
  listHotBid: {
    marginLeft: -sizes.size_8,
  },
  wrapHotBid: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizes.size_24,
  },
  iconHotBid: {
    marginRight: sizes.size_4,
  },
  textHotBid: {
    fontSize: sizes.size_24,
    fontWeight: fontWeights.fontWeight_700,
    lineHeight: sizes.size_32,
    color: colors.grayTitleActive,
  },
});

export default HomeScreen;
