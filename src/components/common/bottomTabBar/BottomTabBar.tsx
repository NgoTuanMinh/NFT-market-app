import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import icons from '../../../utils/icons/icons';
import I18n from '../../../utils/language/i18n';
import screenName from '../../../utils/screenName';
import { sizes } from '../../../utils/sizings';
import { verifyModelIphone } from '../../../utils/validation';
import colors from '../../../utils/colors';

export default function BottomTabBar({ state, descriptors, navigation }: any) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const isNavigationBar = verifyModelIphone();
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View
      style={{
        ...styles.containerStyle,
        // paddingTop: insets.top,
        // paddingBottom: insets.bottom,
      }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const getLinkImage = () => {
          if (route.name === screenName.HOME_STACK) {
            return icons.homeIcon;
          } else if (route.name === screenName.PROFILE_STACK) {
            return icons.profileIcon;
          } else if (route.name === screenName.EXPLORE_STACK) {
            return icons.exploreIcon;
          } else if (route.name === screenName.UPLOAD_STACK) {
            return icons.uploadIcon;
          }
        };

        const getTabName = () => {
          if (route.name === screenName.HOME_STACK) {
            return I18n.t('TAB_HOME');
          } else if (route.name === screenName.PROFILE_STACK) {
            return I18n.t('TAB_PROFILE');
          } else if (route.name === screenName.EXPLORE_STACK) {
            return I18n.t('TAB_EXPLORE');
          } else if (route.name === screenName.UPLOAD_STACK) {
            return I18n.t('TAB_UPLOAD');
          }
        };

        const onPress = () => {
          navigation.navigate(route.name);
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index.toString()}
            accessibilityRole="button"
            accessibilityState={{ selected: isFocused }}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              isFocused ? styles.tabButtonFocused : styles.tabButton,
              // eslint-disable-next-line react-native/no-inline-styles
              { marginBottom: isNavigationBar ? sizes.size_20 : 0 },
            ]}>
            <Image
              style={[styles.tabIcon, isFocused ? styles.tabIconFocused : null]}
              source={getLinkImage()}
            />
            <Text
              style={[
                { color: isFocused ? colors.accentColor : colors.darkBlue },
              ]}>
              {getTabName()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height: sizes.size_56,
    justifyContent: 'center',
  },
  tabButton: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: sizes.size_56,
    alignSelf: 'flex-end',
  },
  tabButtonFocused: {
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: sizes.size_56,
    alignSelf: 'flex-end',
    borderBottomWidth: sizes.size_1,
    borderColor: colors.accentColor,
  },
  tabIcon: {
    height: sizes.size_24,
    width: sizes.size_24,
    resizeMode: 'contain',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizes.size_12,
  },
  tabIconFocused: {
    tintColor: colors.accentColor,
  },
});
