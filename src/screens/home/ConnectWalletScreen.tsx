/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../utils/colors';
import { fontWeights, sizes } from '../../utils/sizings';
import StepIndicator from 'react-native-step-indicator';
import ConnectWalletUtils from '../../handles/connectWallet.utils';
import InputText from '../../components/common/inputText/InputText';
import icons from '../../utils/icons/icons';

const labels = ["Select", "Scan", "Confirm"];
const customStyles = {
  stepIndicatorSize: 40,
  currentStepIndicatorSize: 35,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#0038F5',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#0038F5',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#0038F5',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#0038F5',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#0038F5',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 18,
  currentStepLabelColor: '#0038F5',
};

function ConnectWalletScreen() {
  const connectWalletUtils = ConnectWalletUtils();
  const {
    onChangeCardNumber,
    cardNumber,
    indexPage,
    setIndexPage,
    amount,
    setAmount,
    submitBalence,
  } = connectWalletUtils;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Add wallet to pay</Text>
      <Text style={styles.subTitle}>Easy to pay Digital Art with 3 step</Text>
      <StepIndicator
         customStyles={customStyles}
         currentPosition={indexPage}
         labels={labels}
         stepCount={3}
      />
      
      <View style={styles.marginBottom8} />
      <View style={styles.marginBottom8} />
      <View style={styles.marginBottom8} />

      {indexPage === 0 && <InputText
        value={cardNumber}
        onChange={onChangeCardNumber}
        label='Card number'
      />}

      {indexPage === 1 && <InputText
        value={amount}
        onChange={setAmount}
        label='Amount'
      />}

      {indexPage === 2 && 
        <View>
          <View style={styles.wrapTextConfirm}>
            <Text style={styles.confirmTitle}>Your card number: </Text>
            <Text style={styles.confirmText}>{cardNumber}</Text>
          </View>
          <View style={styles.wrapTextConfirm}>
            <Text style={styles.confirmTitle}>Your amount: </Text>
            <Text style={styles.confirmText}>{amount}</Text>
          </View>
        </View>
      }

      <View style={styles.marginBottom8} />
      <View style={styles.marginBottom8} />
      <View style={styles.marginBottom8} />
      <View style={styles.marginBottom8} />
      
      <View style={styles.wrapNavigate}>
        <TouchableOpacity onPress={indexPage === 0 ? undefined : () => setIndexPage(indexPage-1)}>
          <View style={[styles.wrapNavigateItem, indexPage === 0 && styles.hideButton]}>
            <Image source={icons.nextIcon} style={[styles.iconArrow, styles.iconBack]} />
            <Text style={styles.navigateText}>Back</Text>
          </View>
        </TouchableOpacity>

        {indexPage < 2 && <TouchableOpacity onPress={() => setIndexPage(indexPage + 1)}>
          <View style={styles.wrapNavigateItem}>
            <Text style={styles.navigateText}>Next</Text>
            <Image source={icons.nextIcon} style={[styles.iconArrow]} />
          </View>
        </TouchableOpacity>}

        {indexPage === 2 &&  <TouchableOpacity onPress={submitBalence}>
          <View style={styles.wrapNavigateItem}>
            <Text style={styles.navigateText}>Save</Text>
            <Image source={icons.nextIcon} style={[styles.iconArrow]} />
          </View>
        </TouchableOpacity>}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayBackground,
    paddingHorizontal: sizes.size_16,
  },
  title: {
    fontSize: sizes.size_24,
    lineHeight: sizes.size_32,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
    marginBottom: sizes.size_8,
  },
  subTitle: {
    fontSize: sizes.size_16,
    lineHeight: sizes.size_22,
    fontWeight: fontWeights.fontWeight_400,
    color: colors.grayLabel,
    marginBottom: sizes.size_32,
  },
  marginBottom8: {
    marginBottom: sizes.size_8,
  },
  wrapNavigate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigateText: {
    color: colors.accentColor,
    fontSize: sizes.size_16,
    lineHeight: sizes.size_22,
    fontWeight: fontWeights.fontWeight_500,
    marginHorizontal: sizes.size_8,
  },
  wrapNavigateItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconArrow: {
    width: sizes.size_16,
    height: sizes.size_16,
    tintColor: colors.accentColor,
  },
  iconBack: {
    transform: [{ rotate: '180deg'}],
  },
  hideButton: {
    opacity: 0,
  },
  wrapTextConfirm: {
    flexDirection: 'row',
  },
  confirmTitle: {
    fontSize: sizes.size_16,
    fontWeight: fontWeights.fontWeight_400,
    lineHeight: sizes.size_24,
    color: colors.grayLabel,
  },
  confirmText: {
    fontSize: sizes.size_16,
    fontWeight: fontWeights.fontWeight_700,
    lineHeight: sizes.size_24,
    color: colors.grayBody,
  }
});

export default ConnectWalletScreen;
