import { useState } from 'react';

interface Utils {
  indexScreen: number;
  setIndexScreen: (index: number) => void;
  price: string;
  setPrice: (val: string) => void;
  showDatePicker: boolean;
  setShowDatePicker: (val: boolean) => void;
  date: any,
  setDate: (val: any) => void;
  createAuction: () => void;
}

export default function CreateAuctionUtils(): Utils {
  const [indexScreen, setIndexScreen] = useState<number>(0);
  const [price, setPrice] = useState<string>('');
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
	const [date, setDate] = useState(new Date());
  
  const createAuction = () => {
    console.log('create auction');
  }

  return {
    indexScreen,
    setIndexScreen,
    price,
    setPrice,
    setShowDatePicker,
    showDatePicker,
    date,
    setDate,
    createAuction,
  };
}
