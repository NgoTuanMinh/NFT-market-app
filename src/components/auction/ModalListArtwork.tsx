import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Modal, Portal, Text } from 'react-native-paper';
import { Artwork } from '../../types/artwork';
import colors from '../../utils/colors';
import icons from '../../utils/icons/icons';
import { sizes } from '../../utils/sizings';
import ButtonCommon from '../common/buttons/commonButton/CommonButton';

interface IProps {
  showModalSelectImage: boolean;
  setShowModalSelectImage: (val: boolean) => void;
  listArtworkOwner: Artwork[];
  imageSelected: number | undefined;
  setImageSelecte: (val: number | undefined) => void;
}

interface IImageItem {
  image: Artwork;
  imageSelected: number | undefined;
  setImageSelecte: (val: number | undefined) => void;
}

const ImageItem = ({image, imageSelected, setImageSelecte}: IImageItem) => {
  return (
    <TouchableOpacity onPress={() => setImageSelecte(image?.id)} >
      <View style={styles.wrapItem}>
        <Image style={styles.itemImage} source={{uri: image?.imageUrl}} />
        {(Number(imageSelected) === Number(image?.id)) && <Image style={styles.selectedIcon} source={icons.selectedIcon} />}
      </View>
    </TouchableOpacity>
  )
}

const ModalListArtwork = ({
  showModalSelectImage,
  setShowModalSelectImage,
  listArtworkOwner,
  imageSelected,
  setImageSelecte,
}: IProps) => {  
  return (
    <View style={styles.wrapper}>
      <Portal>
        <Modal visible={showModalSelectImage} onDismiss={() => setShowModalSelectImage(false)} contentContainerStyle={styles.containerStyle}>    
          <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={styles.wrapModalSelect}>
              {listArtworkOwner.map((item, idx) => 
                <ImageItem
                  image={item}
                  key={idx}
                  imageSelected={imageSelected}
                  setImageSelecte={setImageSelecte}
                />)}
            </View>
          </ScrollView>
          <View style={styles.button}>
            <ButtonCommon
              onPress={() => setShowModalSelectImage(false)}
              title='Done'
            />
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapModalSelect: {
    minHeight: sizes.size_500,
    padding: sizes.size_4,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    overflow: 'hidden',
  },
  containerStyle: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: sizes.size_16,
    borderRadius: sizes.size_16,
  },
  wrapItem: {
    borderRadius: sizes.size_16,
    margin: sizes.size_4,
    position: 'relative',
  },
  itemImage: {
    width: sizes.size_150,
    height: sizes.size_150,
    borderRadius: sizes.size_16,
  },
  selectedIcon: {
    tintColor: colors.primaryBlue,
    position: 'absolute',
    right: sizes.size_4,
    bottom: sizes.size_4,
  },
  button: {
    width: sizes.size_160,
    position: 'absolute',
    bottom: sizes.size_12,
  }
});

export default ModalListArtwork;
