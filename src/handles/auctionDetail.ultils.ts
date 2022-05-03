import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectListAuction } from '../store/reducers/auctionReducer';
import { Auction } from '../types/auction';

interface Utils {
  onChangePlaceBid: (value: string) => void;
  priceBidPlaced: string;
  handleHideModalPlaceBid: () => void;
  handleShowModalPlaceBid: () => void;
  showModalPlaceBid: boolean;
  getAuctionDetail: (auctionId: number) => Auction;
}

export default function AuctionDetailUtils(): Utils {
  const [priceBidPlaced, setPriceBidPlace] = useState<string>('');
  const [showModalPlaceBid, setShowModalPlaceBid] = useState<boolean>(false);

  const listAuction = useSelector(selectListAuction);

  const getAuctionDetail = (auctionId: number) => listAuction.find((auctionItem: Auction) => Number(auctionItem?.id) === Number(auctionId));

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
    getAuctionDetail,
  };
}
