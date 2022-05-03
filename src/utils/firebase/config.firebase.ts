import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { Platform } from 'react-native';
import storage from '@react-native-firebase/storage';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const androidCredentials = {
  apiKey: 'AIzaSyCp-FXuizTbARdvC_EHoqtwhqoNhTGxksM',
  authDomain: 'upload-image-ad9a7.firebaseapp.com',
  projectId: 'upload-image-ad9a7',
  storageBucket: 'upload-image-ad9a7.appspot.com',
  messagingSenderId: '939388302465',
  appId: '1:939388302465:web:cad8a31eb0b1990d764980',
  measurementId: 'G-SD41HK00GC',
};

const iosCredentials = {
  apiKey: 'AIzaSyAkJ7FN4wdhQQVaEuNZOPsAz7ARTCXay-0',
  authDomain: 'upload-image-9c99.firebaseapp.com',
  projectId: 'app-firebase-9c99',
  storageBucket: 'upload-image-9c99.appspot.com',
  messagingSenderId: '939388302465',
  appId: '1:285699601271:ios:592f76912b1b5ebddaa772',
  measurementId: 'G-SD41HK00GC',
};

export const uploadFiles = async (fileUri: any) => {
  const filename = fileUri.substring(fileUri.lastIndexOf('/') + 1);
  const uploadUri =
    Platform.OS === 'ios' ? fileUri.replace('file://', '') : fileUri;
  const imageRef = storage().ref(filename);
  const task = imageRef.putFile(uploadUri);
  task.on('state_changed', () => {
    // setTransferred(
    //   Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
    // );
    // console.log('snapShot=============', snapshot);
  });
  try {
    await task;
    const url = await imageRef.getDownloadURL().catch(error => {
      throw error;
    });
    return url;
  } catch (e) {
    console.error(e);
  }
};

const credentials = Platform.select({
  android: androidCredentials,
  ios: iosCredentials,
});

// Initialize Firebase
export const app = initializeApp(credentials as any);
export const firebaseStore = getStorage(app);
