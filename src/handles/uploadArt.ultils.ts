import { useState } from 'react';
import { Platform } from 'react-native';
import { uploadFiles } from '../utils/firebase/config.firebase';

interface Utils {
  filePath: any;
  setFilePath: any;
  uploadFile: () => void;
  onChangeItemName: (valStr: string) => void;
  itemName: string;
  onChangeTags: (valStr: string) => void;
  tags: string;
  onChangeDescription: (valStr: string) => void;
  description: string;
  createProduct: () => void;
}

export default function UploadArtUtils(): Utils {
  const [filePath, setFilePath] = useState<any>({});
  const [itemName, setItemName] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const uploadFile = async () => {
    const uri = filePath?.uri;
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    const urlFile = await uploadFiles(uploadUri);
    console.log('urlFile=============11111111111', urlFile);
  };

  const onChangeItemName = (valStr: string) => setItemName(valStr);
  const onChangeTags = (valStr: string) => setTags(valStr);
  const onChangeDescription = (valStr: string) => setDescription(valStr);

  const createProduct = () => {
    console.log('create product');
  }

  return {
    filePath,
    setFilePath,
    uploadFile,
    itemName,
    onChangeItemName,
    tags,
    onChangeTags,
    description,
    onChangeDescription,
    createProduct,
  };
}
