import * as React from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function goback() {
  navigationRef?.goBack();
}

export function navigate(name, params) {
  navigationRef?.navigate(name, params);
}

export function navigateAndSetToTop(screenName) {
  /*Clear and set screenName on top of stack*/
  navigationRef?.reset({
    index: 0,
    routes: [{ name: screenName }],
  });
}
