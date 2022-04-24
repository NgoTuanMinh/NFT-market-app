import * as React from 'react';
import {sizes} from '../../../utils/sizings';
import Slider from '@react-native-community/slider';
import colors from '../../../utils/colors';
import {StyleSheet, Text, View} from 'react-native';

interface SliderCustomProps {
  onChange: (e: any) => void;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  value?: number;
}

const SliderCustom = ({
  onChange,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  value = 0,
}: SliderCustomProps) => {
  const renderMarginLeft = () => {
    if (value === 100) {
      return value - 8;
    } else if (value > 75) {
      return value - 4;
    } else if (value > 50) {
      return value - 1;
    } else if (value > 25) {
      return value;
    } else {
      return value + 1;
    }
  };

  return (
    <View style={styles.wrapSlide}>
      <Slider
        minimumTrackTintColor={colors.accentColor}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        onSlidingComplete={onChange}
        step={step}
        tapToSeek={true}
      />
      <Text style={[styles.textValueDefault, styles.textValueLeft]}>
        {minimumValue}
      </Text>
      <Text style={[styles.textValueDefault, styles.textValueRight]}>
        {maximumValue}
      </Text>
      <Text style={[styles.textValue, {marginLeft: `${renderMarginLeft()}%`}]}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapSlide: {
    position: 'relative',
    height: sizes.size_32,
  },
  textValue: {
    position: 'absolute',
    top: -sizes.size_16,
    width: sizes.size_20,
  },
  textValueDefault: {
    position: 'absolute',
    top: sizes.size_40,
  },
  textValueLeft: {
    left: 4,
  },
  textValueRight: {
    right: 0,
  },
});

export default SliderCustom;
