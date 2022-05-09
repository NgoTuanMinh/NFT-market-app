import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { navigate } from '../../navigation/service';
import colors from '../../utils/colors';
import images from '../../utils/images';
import screenName from '../../utils/screenName';
import { sizes } from '../../utils/sizings';
import ButtonCommon from '../common/buttons/commonButton/CommonButton';

interface FooterProps {
  showConnectWallet?: boolean;
}

export default function Footer({ showConnectWallet = true }: FooterProps) {
  const onPress = () => {
    console.log('onPress');
  };

  return (
    <View style={styles.wrapFooter}>
      <Image source={images.logoFooter} style={styles.logo} />

      <Image source={images.logoDescription} style={styles.logoDescription} />

      {showConnectWallet && (
        <ButtonCommon
          title="Connect your wallet"
          primary={true}
          onPress={() => navigate(screenName.CONNECT_WALLET_SCREEN)}
        />
      )}
      <View style={{ marginBottom: sizes.size_12 }} />

      <ButtonCommon title="Discover more" primary={false} onPress={onPress} />
      <View style={{ marginBottom: sizes.size_12 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapFooter: {
    padding: sizes.size_16,
    backgroundColor: colors.grayBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: sizes.size_16,
    marginTop: sizes.size_32,
  },
  logo: {
    marginBottom: sizes.size_12,
  },
  logoDescription: {
    marginBottom: sizes.size_32,
  },
});
