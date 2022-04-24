import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../utils/colors';
import {fontWeights, sizes} from '../../../utils/sizings';

interface AvatarProps {
  urlAvatar?: string;
  isOnline?: boolean;
  name?: string;
  height?: number;
}

const Avatar = ({urlAvatar, isOnline, name, height}: AvatarProps) => {
  const styles = StyleSheet.create({
    wrapAvatar: {
      width: height,
      height: height,
      position: 'relative',
    },
    avatar: {
      resizeMode: 'cover',
      width: height,
      height: height,
      borderRadius: height && height / 2,
    },
    wrapAvatarText: {
      backgroundColor: colors.primaryColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: height && height / 2,
    },
    avatarText: {
      color: colors.white,
      lineHeight: height,
      fontSize: height && height / 1.2,
      fontWeight: fontWeights.fontWeight_700,
    },
    onlineStatus: {
      backgroundColor: colors.success,
      width: height && height / 3,
      height: height && height / 3,
      borderRadius: height && height / 6,
      position: 'absolute',
      top: height && height / 12,
      right: height && -(height / 9),
      borderWidth: sizes.size_2,
      borderColor: colors.white,
    },
  });

  const renderAvatar = () => {
    if (urlAvatar) {
      return <Image style={styles.avatar} source={{uri: urlAvatar}} />;
    } else {
      return (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#FF9C00', '#FFDB03']}
          style={styles.wrapAvatarText}>
          <Text style={styles.avatarText}>{name?.slice(0, 1)}</Text>
        </LinearGradient>
      );
    }
  };
  return (
    <View style={styles.wrapAvatar}>
      {renderAvatar()}
      {isOnline && <View style={styles.onlineStatus} />}
    </View>
  );
};

export default Avatar;
