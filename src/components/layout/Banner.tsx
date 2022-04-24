import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontWeights, sizes } from '../../utils/sizings'
import colors from '../../utils/colors'

export default function Banner() {
  return (
    <View style={styles.wrapBanner}>
      <Text style={styles.textBanner1}>Discover, collect, and sell</Text>
      <Text style={styles.textBanner2}>Your Digital Art</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapBanner: {
		padding: sizes.size_16,
    // paddingBottom: 0,
		backgroundColor: colors.grayBackground,
    justifyContent: 'center',
    alignItems: 'center',
	},
	textBanner1: {
    fontSize: sizes.size_18,
    lineHeight: sizes.size_28,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayLabel,
	},
  textBanner2: {
    fontSize: sizes.size_32,
    lineHeight: sizes.size_36,
    color: colors.grayTitleActive,
    fontWeight: fontWeights.fontWeight_700,
    marginTop: sizes.size_4,
  }
})