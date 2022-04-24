import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../utils/colors';
import { fontWeights, sizes } from '../../utils/sizings';

const TagItem = ({type}: {type: string}) => {
	return (
		<View style={styles.wrapTag}>
			<Text style={styles.contentTag}>#{type}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: sizes.size_12,
    paddingVertical: sizes.size_6,
    borderColor: colors.grayLine,
    borderWidth: sizes.size_1,
    borderRadius: sizes.size_20,
    marginRight: sizes.size_6,
    marginBottom: sizes.size_8,
  },
  contentTag: {
    color: colors.grayPlaceHolder,
    fontSize: sizes.size_13,
    fontWeight: fontWeights.fontWeight_500,
    lineHeight: sizes.size_20,
  }
})

export default TagItem;