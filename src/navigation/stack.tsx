import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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
import { useSelector } from 'react-redux';
import { selectSessionLogin } from '../store/reducers/authReducer';
import CreateAuctionScreen from '../screens/upload/CreateAuction';
import screenName from '../utils/screenName';

const Stack = createStackNavigator();
const Home = createStackNavigator();
const Auth = createStackNavigator();
const Explore = createStackNavigator();
const Upload = createStackNavigator();
const Profile = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export const RootStack = () => {
  const [accessToken, setAccessToken] = useState<string>('');

  const selectSession = useSelector(selectSessionLogin);
  const { accessToken: selectAccessToken } = selectSession;

  useEffect(() => {
    handleGetAccessToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectAccessToken]);

  const handleGetAccessToken = async () => {
    if (selectAccessToken && selectAccessToken !== '') {
      setAccessToken(selectAccessToken);
    } else {
      const accessTokenGeted = await getAccessToken();
      setAccessToken(accessTokenGeted);
    }
  };

  return (
    <>
      <Header />
      <Stack.Navigator>
        {accessToken ? (
          <Stack.Screen
            name={screenName.BOTTOM_STACK}
            component={BottomStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name={screenName.AUTH_STACK}
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
        name={screenName.HOME_SCREEN}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name={screenName.DETAIL_AUCTION_SCREEN}
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
      {/* <Home.Screen name={screenName.HOME_SCREEN} component={HomeScreen} options={{header: ({ navigation }) => <Header title="Home" isBackButton={false} navigation={navigation} />}} /> */}
    </Home.Navigator>
  );
};

const ExploreStack = () => {
  return (
    <Explore.Navigator
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
      <Explore.Screen
        name={screenName.EXPLORE_SCREEN}
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
        name={screenName.LOGIN_SCREEN}
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
      name={screenName.CREATE_AUCTION_SCREEN}
      component={CreateAuctionScreen}
      options={{ headerShown: false }}
      />
      <Upload.Screen
        name={screenName.UPLOAD_SCREEN}
        component={UploadArtScreen}
        options={({ route }: any) => ({
          headerTitle: route?.params?.name,
          headerBackTitle: '',
          headerStatusBarHeight: 0,
          headerBackTitleStyle: { display: 'none' },
          headerStyle: { backgroundColor: colors.grayBackground },
        })}
      />
    </Upload.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Profile.Navigator
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
      <Profile.Screen
        name={screenName.PROFILE_SCREEN}
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
          name={screenName.HOME_STACK}
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <BottomTab.Screen
          name={screenName.EXPLORE_STACK}
          component={ExploreStack}
          options={{ headerShown: false }}
        />
        <BottomTab.Screen
          name={screenName.UPLOAD_STACK}
          component={UploadStack}
          options={{ headerShown: false }}
        />
        <BottomTab.Screen
          name={screenName.PROFILE_STACK}
          component={ProfileStack}
          options={{ headerShown: false }}
        />
      </BottomTab.Navigator>
    </>
  );
};
