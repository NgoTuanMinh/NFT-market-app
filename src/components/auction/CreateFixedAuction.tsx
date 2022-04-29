import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { sizes } from '../../utils/sizings';

interface IProps {}

const CreateFixedAuction = ({}: IProps) => {
  return (
    <View style={styles.wrapper}>
      <Text>Create Fixed Auction</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateFixedAuction;
