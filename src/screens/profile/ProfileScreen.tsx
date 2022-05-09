import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import Avatar from '../../components/common/avatar/Avatar';
import ButtonCommon from '../../components/common/buttons/commonButton/CommonButton';
import ProfileUtils from '../../handles/profile.ultil';
import colors from '../../utils/colors';
import { fontWeights, sizes } from '../../utils/sizings';

function ProfileScreen() {
  const profileUtils = ProfileUtils();

  const { handleLogout, isLoading, userInfo } = profileUtils;

  console.log('userInfo======', userInfo);

  if (isLoading) {
    return <ActivityIndicator animating={true} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapInfo}>
        <Avatar
          urlAvatar={userInfo?.userInformation?.profileImage}
          name={userInfo?.userInformation?.displayName}
          height={sizes.size_120}
        />
        <Text style={styles.textName}>
          {userInfo?.userInformation?.displayName}
        </Text>
        <Text style={styles.textId}>{userInfo?.uuid}</Text>
      </View>

      <ButtonCommon title="Sign out" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizes.size_12,
  },
  wrapInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: sizes.size_32,
  },
  textName: {
    marginTop: sizes.size_16,
    fontSize: sizes.size_18,
    lineHeight: sizes.size_28,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayBody,
  },
  textId: {
    marginTop: sizes.size_8,
    fontSize: sizes.size_14,
    lineHeight: sizes.size_20,
    color: colors.grayLabel,
  },
});
export default ProfileScreen;
