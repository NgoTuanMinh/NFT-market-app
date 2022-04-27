import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CreateFixedAuction from '../../components/auction/CreateFixedAuction';
import ButtonCommon from '../../components/common/buttons/commonButton/CommonButton';
import CreateAuctionUtils from '../../handles/createAuction.ultils';
import colors from '../../utils/colors';
import { fontWeights, sizes } from '../../utils/sizings';

function CreateAuctionScreen() {
  const createAuctionUtils = CreateAuctionUtils();
  const {
    indexScreen,
    setIndexScreen,
    price,
    setPrice,
    showDatePicker,
    setShowDatePicker,
    date,
    setDate,
    createAuction,
  } = createAuctionUtils;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapBars}>
        <View style={styles.wrapButton}>
          <ButtonCommon
            title='Fixed price'
            onPress={() => setIndexScreen(0)}
            primary={indexScreen === 0}
            buttonStyles={{borderWidth: 0}}
          />
        </View>
        <View style={[styles.wrapButton, {marginLeft: sizes.size_12}]}>
          <ButtonCommon
            title='Auction'
            primary={indexScreen === 1}
            onPress={() => setIndexScreen(1)}
            buttonStyles={{borderWidth: 0}}
          />
        </View>
      </View>
      <CreateFixedAuction
        price={price}
        onChangePrice={setPrice}
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker}
        date={date}
        setDate={setDate}
        createAuction={createAuction}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: sizes.size_16,
    backgroundColor: colors.grayBackground,
  },
  wrapBars: {
    flexDirection: 'row',
    padding: sizes.size_8,
    backgroundColor: colors.white,
    borderRadius: sizes.size_24,
  },
  wrapButton: {
    borderRadius: sizes.size_24,
    overflow: 'hidden',
    // width: '50%',
    flex: 1,
    borderColor: colors.accentColor,
    borderWidth: sizes.size_1,
  }
});

export default CreateAuctionScreen;
