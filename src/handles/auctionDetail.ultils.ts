import { useState } from 'react';

interface Utils {
  onChangePlaceBid: (value: string) => void;
  priceBidPlaced: string;
  handleHideModalPlaceBid: () => void;
  handleShowModalPlaceBid: () => void;
  showModalPlaceBid: boolean;
}

export default function AuctionDetailUtils(): Utils {
  const [priceBidPlaced, setPriceBidPlace] = useState<string>('');
  const [showModalPlaceBid, setShowModalPlaceBid] = useState<boolean>(false);

  const onChangePlaceBid = (value: string) => {
    setPriceBidPlace(value);
  };

  const handleHideModalPlaceBid = () => {
    setShowModalPlaceBid(false);
  };

  const handleShowModalPlaceBid = () => {
    setShowModalPlaceBid(true);
  };

  return {
    priceBidPlaced,
    onChangePlaceBid,
    handleHideModalPlaceBid,
    handleShowModalPlaceBid,
    showModalPlaceBid,
  };
}
