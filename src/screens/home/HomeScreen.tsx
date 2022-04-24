import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import HotBid from '../../components/home/HotBid';
import LiveAuction from '../../components/home/LiveAuction';
import RecommendAuction from '../../components/home/RecommendAuction';
import Banner from '../../components/layout/Banner';
import Footer from '../../components/layout/Footer';
import colors from '../../utils/colors';
import images from '../../utils/images';
import screenName from '../../utils/screenName';
import { fontWeights, sizes } from '../../utils/sizings';

function HomeScreen({ navigation }: any) {
  const onPress = () => {
    console.log('123');
  };

  const goToDetailSold = (id: number) => {
    navigation.navigate(screenName.DETAIL_AUCTION_SCREEN, {
      auctionId: id,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Banner />

        <RecommendAuction
          imageUrl={'https://wallpaperaccess.com/full/7280.jpg'}
          avatarUrlCreator={
            'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='
          }
          nameCreator="Pawel Czerwinski"
          nameProduct="Silent Wave"
          liked={false}
          reservePrice={1.5}
          viewArtWork={onPress}
          placeABid={onPress}
          likeAuction={onPress}
        />

        <View style={styles.wrapLiveAuctionTitle}>
          <View style={styles.liveStatus} />
          <Text style={styles.liveAuctionTitle}>Live auctions</Text>
        </View>

        <LiveAuction
          timeEnd={'2022-04-23T16:23:49.000Z'}
          imageUrl={'https://wallpaperaccess.com/full/391239.jpg'}
          avatarUrlCreator={
            'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='
          }
          nameCreator="Pawel Czerwinski"
          nameProduct="Silent Wave"
          liked={false}
          currentBid={1.5}
          viewAuction={() => goToDetailSold(1)}
          likeAuction={onPress}
          isOnline={true}
        />

        <LiveAuction
          timeEnd={'2022-04-22T08:33:26.677Z'}
          imageUrl={'https://wallpaperaccess.com/full/391240.jpg'}
          avatarUrlCreator={
            'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='
          }
          nameCreator="Pawel Czerwinski"
          nameProduct="Silent Wave"
          liked={false}
          currentBid={1.5}
          viewAuction={() => goToDetailSold(2)}
          likeAuction={onPress}
          isOnline={true}
        />

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
