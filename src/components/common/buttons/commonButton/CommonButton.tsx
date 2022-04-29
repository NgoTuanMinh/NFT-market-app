import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import colors from '../../../../utils/colors';
import { fontWeights, sizes } from '../../../../utils/sizings';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps {
  title: string;
  onPress: () => void;
  primary?: boolean;
  buttonStyles?: StyleProp<ViewStyle>;
  imageSource?: any;
}

const ButtonCommon = ({
  title,
  onPress,
  primary = true,
  buttonStyles,
  imageSource,
  ...props
}: ButtonProps) => {
  const mainButton = (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        primary ? styles.buttonPrimary : styles.buttonSecondary,
        buttonStyles,
        imageSource && { flexDirection: 'row' },
      ]}
      {...props}>
      {imageSource && <Image source={imageSource} style={styles.image} />}
      <Text style={primary ? styles.titlePrimary : styles.titleSecondary}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return primary ? (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#0000EA', '#7708BE']}
      style={styles.wrapButton}>
      {mainButton}
    </LinearGradient>
  ) : (
    <View style={styles.wrapButton}>{mainButton}</View>
  );
};

const styles = StyleSheet.create({
  wrapButton: {
    width: '100%',
    borderRadius: sizes.size_10,
  },
  button: {
    borderRadius: sizes.size_10,
    paddingVertical: sizes.size_16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.accentColor,
  },
  buttonPrimary: {
    backgroundColor: colors.primaryColor,
  },
  buttonSecondary: {
    backgroundColor: colors.white,
  },
  titlePrimary: {
    color: colors.white,
    fontSize: sizes.size_16,
    fontWeight: fontWeights.fontWeight_700,
  },
  titleSecondary: {
    color: colors.accentColor,
    fontSize: sizes.size_16,
    fontWeight: fontWeights.fontWeight_700,
  },
  image: {
    width: sizes.size_24,
    height: sizes.size_24,
    marginRight: sizes.size_8,
    tintColor: colors.white,
  },
});

export default ButtonCommon;
