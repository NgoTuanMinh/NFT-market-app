import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CreateFixedAuction from '../../components/auction/CreateFixedAuction';
import CreateNormalAuction from '../../components/auction/CreateNormalAuction';
import ModalListArtwork from '../../components/auction/ModalListArtwork';
import ButtonCommon from '../../components/common/buttons/commonButton/CommonButton';
import CreateAuctionUtils from '../../handles/createAuction.ultils';
import { navigate } from '../../navigation/service';
import colors from '../../utils/colors';
import icons from '../../utils/icons/icons';
import screenName from '../../utils/screenName';
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
    listArtworkOwner,
    setShowModalSelectImage,
    showModalSelectImage,
    imageSelected,
    setImageSelecte,
    imageDetailSelected,
  } = createAuctionUtils;

  return (
    <>
      <View style={styles.wrapBars}>
        <View style={styles.wrapButton}>
          <ButtonCommon
            title="Fixed price"
            onPress={() => setIndexScreen(0)}
            primary={indexScreen === 0}
            buttonStyles={{ borderWidth: 0 }}
          />
        </View>
        <View style={[styles.wrapButton, { marginLeft: sizes.size_12 }]}>
          <ButtonCommon
            title="Auction"
            primary={indexScreen === 1}
            onPress={() => setIndexScreen(1)}
            buttonStyles={{ borderWidth: 0 }}
          />
        </View>
      </View>
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.wrapUploadHere}>
          <Text style={styles.uploadHereTitle}>
            If you want to upload new artwork,{' '}
          </Text>
          <TouchableOpacity onPress={() => navigate(screenName.UPLOAD_SCREEN)}>
            <Text style={styles.uploadHereLink}>upload here.</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapSelectImage}>
          <View style={styles.selectImage}>
            {!imageDetailSelected && (
              <TouchableOpacity onPress={() => setShowModalSelectImage(true)}>
                <View style={styles.wrapPlusIcon}>
                  <Image source={icons.plusIcon} style={styles.plusIcon} />
                </View>
              </TouchableOpacity>
            )}
            {imageDetailSelected && (
              <TouchableOpacity onPress={() => setShowModalSelectImage(true)}>
                <View style={styles.wrapPlusIcon}>
                  <Image
                    source={{ uri: imageDetailSelected?.imageUrl }}
                    style={styles.imageSelected}
                  />
                  <Image
                    source={icons.replaceIcon}
                    style={[styles.plusIcon, styles.replaceIcon]}
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {indexScreen === 1 && (
          <CreateNormalAuction
            price={price}
            onChangePrice={setPrice}
            showDatePicker={showDatePicker}
            setShowDatePicker={setShowDatePicker}
            date={date}
            setDate={setDate}
            createAuction={createAuction}
          />
        )}
        {indexScreen === 0 && <CreateFixedAuction />}

        <ModalListArtwork
          showModalSelectImage={showModalSelectImage}
          setShowModalSelectImage={setShowModalSelectImage}
          listArtworkOwner={listArtworkOwner}
          setImageSelecte={setImageSelecte}
          imageSelected={imageSelected}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.size_16,
    backgroundColor: colors.grayBackground,
  },
  wrapBars: {
    flexDirection: 'row',
    padding: sizes.size_8,
    backgroundColor: colors.white,
    borderRadius: sizes.size_24,
    marginTop: sizes.size_8,
  },
  wrapButton: {
    borderRadius: sizes.size_24,
    overflow: 'hidden',
    // width: '50%',
    flex: 1,
    borderColor: colors.accentColor,
    borderWidth: sizes.size_1,
  },
  wrapUploadHere: {
    flexDirection: 'row',
    // marginTop: sizes.size_16,
    // paddingLeft: sizes.size_8,
  },
  uploadHereTitle: {
    fontSize: sizes.size_16,
    lineHeight: sizes.size_24,
    fontWeight: fontWeights.fontWeight_400,
    color: colors.grayLabel,
  },
  uploadHereLink: {
    fontSize: sizes.size_16,
    lineHeight: sizes.size_24,
    fontWeight: fontWeights.fontWeight_500,
    color: colors.primaryBlue,
  },
  wrapSelectImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizes.size_16,
  },
  selectImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: sizes.size_250,
    width: sizes.size_250,
    backgroundColor: colors.white,
    borderRadius: sizes.size_32,
  },
  wrapPlusIcon: {
    margin: sizes.size_8,
    width: sizes.size_200,
    height: sizes.size_200,
    backgroundColor: colors.grayBackground,
    borderRadius: sizes.size_24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  plusIcon: {
    width: sizes.size_48,
    height: sizes.size_48,
  },
  imageSelected: {
    width: sizes.size_200,
    height: sizes.size_200,
    borderRadius: sizes.size_24,
  },
  replaceIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    tintColor: colors.white,
  },
});

export default CreateAuctionScreen;
