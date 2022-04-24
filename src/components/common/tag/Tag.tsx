import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CONSTANT_TAG} from '../../../constant';
import colors from '../../../utils/colors';
import {sizes} from '../../../utils/sizings';

interface TagProps {
  type: string;
}

const Tag = ({type}: TagProps) => {
  let name = '',
    color = '';
  if (type === CONSTANT_TAG.ALERT) {
    name = 'Alert';
    color = colors.alert;
  } else if (type === CONSTANT_TAG.INFO) {
    name = 'Info';
    color = colors.info;
  } else if (type === CONSTANT_TAG.SUCCESS) {
    name = 'Success';
    color = colors.success;
  } else if (type === CONSTANT_TAG.WARNING) {
    name = 'Warning';
    color = colors.warning;
  } else {
    name = '';
    color = '';
  }

  return (
    <View style={[styles.wrapTag, {backgroundColor: color}]}>
      <Text style={styles.textTag}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Tag;
