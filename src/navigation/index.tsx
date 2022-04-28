import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './stack';
import { navigationRef } from './service';

const AppNavigator = () => (
  <SafeAreaProvider>
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default AppNavigator;
