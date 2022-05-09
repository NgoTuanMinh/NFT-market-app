import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import auctionApi from '../api/auctionApi';
import userApi from '../api/userrApi';
import { auctionActions } from '../store/reducers/auctionReducer';
import { snackbarActions } from '../store/reducers/snackbarReducer';
import { Tag } from '../types/artwork';
import { Auction, Bid, PlaceABidInput } from '../types/auction';
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
  placeABid: () => void;
  userInfo: any;
  isLoading: boolean;
  isSold: boolean;
  isNoActivity: boolean;
  isLiveAuction: boolean;
  screenName: string;
  listTag: string[];
  auctionDetail: Auction | undefined;
  listBidDisplay: BidDisplay[];
  isShowConnectWallet: boolean;
}

export default function AuctionDetailUtils(auctionId: number): Utils {
  const [priceBidPlaced, setPriceBidPlace] = useState<string>('');
  const [showModalPlaceBid, setShowModalPlaceBid] = useState<boolean>(false);

  const dispatch = useDispatch();

  const {
    isLoading: isLoadingGetUserInfo,
    data: userInfo,
    isFetching: isFetchingGetUserInfo,
    refetch: getUserInfo,
  } = useQuery('getUserInfo', () => userApi.getUserInfo());

  const isShowConnectWallet = !userInfo?.balence;

  const {
    isLoading: isLoadingGetListBid,
    data: listBid,
    isFetching: isFetchingGetListBid,
    refetch: getListBid,
  } = useQuery('getListBid', () =>
    auctionApi.listBid({
      auctionSessionId: auctionId,
      page: 1,
      limit: 10,
    }),
  );

  const {
    isLoading: isLoadingGetAuction,
    data: auctionDetail,
    isFetching: isFetchingGetAuction,
    refetch: getAuction,
  } = useQuery('getAuction', () =>
    auctionApi.getAuction({
      auctionId,
    }),
  );

  const listBidDisplay = listBid?.data?.map((bidItem: Bid) => ({
    bidByAvatar: bidItem?.bidBy?.userInformation?.profileImage,
    bidByName: bidItem?.bidBy?.userInformation?.displayName,
    bidPrice: bidItem?.bidPrice,
    bidTime: bidItem?.createdAt
      ? formatDate(bidItem?.createdAt, 'DD/MM/YYYY hh:mmA')
      : '',
    isWinner:
      isSold &&
      Number(bidItem?.id) ===
        Number(auctionDetail?.sessionInformation?.largestBid?.id || ''),
  }));

  const {
    isLoading: isLoadingPlaceABid,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isSuccess: isSuccessPlaceABid,
    mutate: mutatePlaceABid,
  } = useMutation((input: PlaceABidInput) => auctionApi.placeABid(input), {
    onSuccess: async () => {
      await Promise.all([getAuction(), getListBid(), getUserInfo()]);
      dispatch(auctionActions.getListAuction());
    },
    onError: (e: any) => {
      dispatch(snackbarActions.showSnackbar(e?.message));
    },
  });

  const isSold =
    new Date(auctionDetail?.sessionInformation?.timeEnd || '').getTime() <
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
    isFetchingGetListBid ||
    isFetchingGetAuction ||
    isLoadingGetAuction;
  const placeABid = () => {
    if (
      Number(priceBidPlaced) <=
      Number(auctionDetail?.sessionInformation?.largestBid?.bidPrice)
    ) {
      setShowModalPlaceBid(false);
      dispatch(
        snackbarActions.showSnackbar(
          'Your price must larger the largest bid. Try again.',
        ),
      );
      return;
    }
    mutatePlaceABid({
      auctionSessionId: auctionId,
      bidPrice: Number(priceBidPlaced),
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
    isShowConnectWallet,
  };
}
