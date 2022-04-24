import { useState } from 'react';
import { Platform } from 'react-native';
import { uploadFiles } from '../utils/firebase/config.firebase';

interface Utils {
  filePath: any;
  setFilePath: any;
  uploadFile: () => void;
}

export default function UploadArtUtils(): Utils {
  const [filePath, setFilePath] = useState<any>({});

  const uploadFile = async () => {
    const uri = filePath?.uri;
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    const urlFile = await uploadFiles(uploadUri);
    console.log('urlFile=============11111111111', urlFile);
  };

  return {
    filePath,
    setFilePath,
    uploadFile,
  };
}
