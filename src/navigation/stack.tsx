import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenName from '../utils/screenName';
import colors from '../utils/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from '../components/common/bottomTabBar/BottomTabBar';
import {
  DetailAuctionScreen,
  ExploreScreen,
  HomeScreen,
  ProfileScreen,
} from '../screens';
import DialogCommon from '../components/common/dialog/Dialog';
import Header from '../components/layout/Header';
import LoginScreen from '../screens/home/LoginSceen';
import { getAccessToken } from '../utils/storage';
import UploadArtScreen from '../screens/upload/UploadArtScreen';

const Stack = createStackNavigator();
const Home = createStackNavigator();
const Auth = createStackNavigator();
const Explore = createStackNavigator();
const Upload = createStackNavigator();
const Profile = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export const RootStack = () => {
  const [accessToken, setAccessToken] = useState<string>('');

  useEffect(() => {
    handleGetAccessToken();
  }, []);

  const handleGetAccessToken = async () => {
    const accessTokenGeted = await getAccessToken();
    setAccessToken(accessTokenGeted);
  };

  return (
    <>
      <Header />
      <Stack.Navigator>
        {accessToken ? (
          <Stack.Screen
            name={ScreenName.BOTTOM_STACK}
            component={BottomStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name={ScreenName.AUTH_STACK}
            component={AuthStack}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
      <DialogCommon />
    </>
  );
};

const HomeStack = () => {
  return (
    <Home.Navigator
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
      <Home.Screen
        name={ScreenName.HOME_SCREEN}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name={ScreenName.DETAIL_AUCTION_SCREEN}
        component={DetailAuctionScreen}
        // options={{ headerShown: false }}
        options={({ route }: any) => ({
          headerTitle: route?.params?.name,
          headerBackTitle: '',
          headerStatusBarHeight: 0,
          headerBackTitleStyle: { display: 'none' },
          headerStyle: { backgroundColor: colors.grayBackground },
        })}
      />
      {/* <Home.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} options={{header: ({ navigation }) => <Header title="Home" isBackButton={false} navigation={navigation} />}} /> */}
    </Home.Navigator>
  );
};

const ExploreStack = () => {
  return (
    <Explore.Navigator
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
      <Explore.Screen
        name={ScreenName.EXPLORE_SCREEN}
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
    </Explore.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Auth.Navigator
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
      <Auth.Screen
        name={ScreenName.LOGIN_SCREEN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
};

const UploadStack = () => {
  return (
    <Upload.Navigator
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
      <Upload.Screen
        name={ScreenName.UPLOAD_SCREEN}
        component={UploadArtScreen}
        options={{ headerShown: false }}
      />
    </Upload.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Profile.Navigator
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
      <Profile.Screen
        name={ScreenName.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Profile.Navigator>
  );
};

const BottomStack = () => {
  return (
    <>
      <BottomTab.Navigator tabBar={(props: any) => <BottomTabBar {...props} />}>
        <BottomTab.Screen
          name={ScreenName.HOME_STACK}
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <BottomTab.Screen
          name={ScreenName.EXPLORE_STACK}
          component={ExploreStack}
          options={{ headerShown: false }}
        />
        <BottomTab.Screen
          name={ScreenName.UPLOAD_STACK}
          component={UploadStack}
          options={{ headerShown: false }}
        />
        <BottomTab.Screen
          name={ScreenName.PROFILE_STACK}
          component={ProfileStack}
          options={{ headerShown: false }}
        />
      </BottomTab.Navigator>
    </>
  );
};
