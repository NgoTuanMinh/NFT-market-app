import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import ButtonCommon from '../../components/common/buttons/commonButton/CommonButton';
import { authActions } from '../../store/reducers/authReducer';
import { sizes } from '../../utils/sizings';

function ProfileScreen() {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(authActions.logout());

  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
      <ButtonCommon title="Sign out" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.size_12,
  },
});
export default ProfileScreen;
