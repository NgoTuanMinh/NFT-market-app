import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import ButtonCommon from '../../components/common/buttons/commonButton/CommonButton';
import InputText from '../../components/common/inputText/InputText';
import { authActions } from '../../store/reducers/authReducer';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { fontWeights, sizes } from '../../utils/sizings';

function LoginScreen() {
  // const goToDetailSold = (id: number) => {
  //   navigation.navigate(screenName.DETAIL_AUCTION_SCREEN, {
  //     auctionId: id,
  //   });
  // };
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();

  const onChangeInput = (valueString: string, name?: string) => {
    if (name === 'userName') {
      setUserName(valueString);
    } else if (name === 'password') {
      setPassword(valueString);
    }
  };

  const submitLogin = () => {
    dispatch(authActions.login({ userName, password }));
  };

  return (
    <View style={styles.container}>
      <Image source={images.nftImage} style={styles.image} />
      <View style={styles.wrapInput}>
        <Text style={styles.signInTitle}>Sign In</Text>
        <InputText
          onChange={onChangeInput}
          name="userName"
          value={userName}
          label="User Name"
        />
        <View style={{ marginBottom: sizes.size_24 }} />
        <InputText
          onChange={onChangeInput}
          name="password"
          value={password}
          label="Password"
          type="password"
        />
        <View style={{ marginBottom: sizes.size_32 }} />
        <ButtonCommon title="Sign In" onPress={submitLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayBackground,
    // paddingHorizontal: sizes.size_16,
  },
  image: {
    height: sizes.size_250,
    width: '100%',
    resizeMode: 'contain',
  },
  wrapInput: {
    paddingHorizontal: sizes.size_16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInTitle: {
    fontSize: sizes.size_24,
    lineHeight: sizes.size_32,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayBody,
    marginBottom: sizes.size_20,
    marginTop: sizes.size_8,
  },
});

export default LoginScreen;
