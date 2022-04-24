import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../utils/colors';
import {sizes} from '../../../utils/sizings';

interface TokenProps {
  value?: string;
  isActive?: boolean;
}

const Token = ({value, isActive = false}: TokenProps) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#0000EA', '#7708BE']}
      style={styles.wrapButton}>
      <View
        style={[
          styles.wrapTag,
          !isActive ? {backgroundColor: colors.mediumGray} : null,
        ]}>
        <Text
          style={[styles.textTag, !isActive ? {color: colors.black} : null]}>
          {value}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapButton: {
    width: '100%',
    borderRadius: sizes.size_10,
  },
  wrapTag: {
    width: '100%',
    height: sizes.size_40,
    borderRadius: sizes.size_8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTag: {
    color: colors.white,
  },
});

export default Token;
