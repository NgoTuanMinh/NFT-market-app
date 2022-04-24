import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { ref, uploadBytesResumable, uploadBytes } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCp-FXuizTbARdvC_EHoqtwhqoNhTGxksM',
  authDomain: 'upload-image-ad9a7.firebaseapp.com',
  projectId: 'upload-image-ad9a7',
  storageBucket: 'upload-image-ad9a7.appspot.com',
  messagingSenderId: '939388302465',
  appId: '1:939388302465:web:cad8a31eb0b1990d764980',
  measurementId: 'G-SD41HK00GC',
};

export const uploadFiles = async (file: any) => {
  if (!file) {
    return;
  }
  let urlFile;
  const storeageRef = ref(firebaseStore, `/files/${file.name}`);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const uploadTask = await uploadBytesResumable(storeageRef, file);
  await uploadBytes(storeageRef, file).then(snapshot => {
    console.log('Uploaded a blob or file!', snapshot);
    const pathSlice = snapshot.metadata.fullPath.split('/')[1];
    urlFile = `https://firebasestorage.googleapis.com/v0/b/${snapshot.metadata.bucket}/o/files%2F${pathSlice}?alt=media`;
  });
  return urlFile;
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseStore = getStorage(app);
