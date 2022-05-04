import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import auctionApi from '../api/auctionApi';
import userApi from '../api/userrApi';
import { selectListAuction } from '../store/reducers/auctionReducer';
import { Tag } from '../types/artwork';
import { Auction, Bid } from '../types/auction';
import { formatDate } from '../utils/formats/formatCommon';

interface BidDisplay {
  bidByAvatar: string;
  bidByName: string;
  bidPrice: number;
  bidTime: string;
  isWinner: boolean;
}
interface Utils {
  onChangePlaceBid: (value: string) => void;
  priceBidPlaced: string;
  handleHideModalPlaceBid: () => void;
  handleShowModalPlaceBid: () => void;
  showModalPlaceBid: boolean;
  getAuctionDetail: (auctionId: number) => Auction;
  placeABid: () => void;
  userInfo: any;
  isLoading: boolean;
  isSold: boolean;
  isNoActivity: boolean;
  isLiveAuction: boolean;
  screenName: string;
  listTag: string[];
  auctionDetail: Auction;
  listBidDisplay: BidDisplay[];
}

export default function AuctionDetailUtils(auctionId: number): Utils {
  const [priceBidPlaced, setPriceBidPlace] = useState<string>('');
  const [showModalPlaceBid, setShowModalPlaceBid] = useState<boolean>(false);

  const {
    isLoading: isLoadingGetUserInfo,
    data: userInfo,
    isFetching: isFetchingGetUserInfo,
  } = useQuery('getUserInfo', () => userApi.getUserInfo());

  const {
    isLoading: isLoadingGetListBid,
    data: listBid,
    isFetching: isFetchingGetListBid,
    refetch: getListBid,
  } = useQuery('getListBid', () =>
    auctionApi.listBid({
      auctionSessionId: auctionDetail?.sessionInformation?.id,
      page: 1,
      limit: 10,
    }),
  );

  const listBidDisplay = listBid?.data?.map((bidItem: Bid) => ({
    bidByAvatar: bidItem?.bidBy?.userInformation?.profileImage,
    bidByName: bidItem?.bidBy?.userInformation?.displayName,
    bidPrice: bidItem?.bidPrice,
    bidTime: bidItem?.createdAt
      ? formatDate(bidItem?.createdAt, 'hh:mmA DD:MM:YYYY')
      : '',
    isWinner:
      isSold && Number(bidItem?.id) === Number(auctionDetail?.largestBid?.id),
  }));

  const {
    isLoading: isLoadingPlaceABid,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isSuccess: isSuccessPlaceABid,
    mutate: mutatePlaceABid,
  } = useMutation((input: any) => auctionApi.placeABid(input), {
    onSuccess: async () => await getListBid(),
  });
  const listAuction = useSelector(selectListAuction);

  const getAuctionDetail = (id: number) =>
    listAuction.find(
      (auctionItem: Auction) => Number(auctionItem?.id) === Number(id),
    );

  const auctionDetail = getAuctionDetail(auctionId);

  const isSold =
    new Date(auctionDetail?.sessionInformation?.timeEnd).getTime() <
    new Date().getTime();
  const isNoActivity = !auctionDetail?.sessionInformation?.largestBid;
  const isLiveAuction = !isSold && !isNoActivity;

  const screenName = isSold ? 'Auction Sold' : 'Live Auction';

  const listTag =
    auctionDetail?.product?.tags && auctionDetail?.product?.tags?.length > 0
      ? auctionDetail?.product?.tags?.map((tagItem: Tag) => tagItem?.type)
      : [];

  const isLoading =
    isLoadingGetUserInfo ||
    isFetchingGetUserInfo ||
    isLoadingPlaceABid ||
    isLoadingGetListBid ||
    isFetchingGetListBid;

  const placeABid = () => {
    mutatePlaceABid({
      auctionSessionId: auctionId,
      bidPrice: priceBidPlaced,
    });
    setShowModalPlaceBid(false);
    setPriceBidPlace('');
  };

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
    placeABid,
    isLoading,
    userInfo,
    isSold,
    isLiveAuction,
    isNoActivity,
    screenName,
    listTag,
    auctionDetail,
    listBidDisplay,
  };
}
