/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable react-hooks/exhaustive-deps

import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import artworkApi from '../api/artworkApi';
import auctionApi from '../api/auctionApi';
import { navigate } from '../navigation/service';
import {
  auctionActions,
  selectListAuction,
} from '../store/reducers/auctionReducer';
import { snackbarActions } from '../store/reducers/snackbarReducer';
import { selectUser, userActions } from '../store/reducers/userReducer';
import { Artwork, LikeArtworkInput } from '../types/artwork';
import { Auction, ViewAuctionInput } from '../types/auction';
import { User } from '../types/authentication';
import screenName from '../utils/screenName';
import { getUserData } from '../utils/storage';

interface Utils {
  listAuction: Auction[];
  goToDetailSold: (id: number) => void;
  checkLikedRecommendAuction: (auction: Auction) => boolean;
  likeArtwork: (input: LikeArtworkInput) => void;
  isLoading: boolean;
  isShowConnectWallet: boolean;
}

export default function HomeUtils(): Utils {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState<User>();

  const listAuction = useSelector(selectListAuction);
  const userInfoRedux = useSelector(selectUser);

  const isShowConnectWallet = !userInfo?.balence;

  useEffect(() => {
    dispatch(auctionActions.getListAuction());
    dispatch(userActions.getUser());
  }, [dispatch]);

  const goToDetailSold = (id: number) => {
    navigate(screenName.DETAIL_AUCTION_SCREEN, {
      auctionId: id,
    });
    mutateViewAuction({
      auctionSessionId: id,
    });
  };

  const {
    isLoading: isLoadingViewAuction,
    isSuccess: isSuccessViewAuction,
    mutate: mutateViewAuction,
  } = useMutation((input: ViewAuctionInput) => auctionApi.viewAuction(input), {
    onError: (e: any) => {
      dispatch(snackbarActions.showSnackbar(e?.message));
    },
  });

  const {
    isLoading: isLoadingLikeArtwork,
    isSuccess: isSuccessLikeArtwork,
    mutate: mutateLikeArtwork,
  } = useMutation((input: LikeArtworkInput) => artworkApi.like(input), {
    onError: (e: any) => {
      dispatch(snackbarActions.showSnackbar(e?.message));
    },
  });

  const likeArtwork = (input: LikeArtworkInput) => {
    mutateLikeArtwork(input);
  };

  const isLoading = isLoadingLikeArtwork || isLoadingViewAuction;

  useEffect(() => {
    handleGetUser();
  }, [userInfoRedux]);

  const handleGetUser = async () => {
    if (userInfoRedux) {
      setUserInfo(userInfoRedux);
    } else {
      const dataUser = await getUserData();
      setUserInfo(dataUser);
    }
  };

  const checkLikedRecommendAuction = (auction: Auction): boolean => {
    let checked = false;
    if (userInfo?.favouriteProduct && userInfo?.favouriteProduct?.length <= 0) {
      return checked;
    }
    userInfo?.favouriteProduct?.map((product: Artwork) => {
      if (Number(product?.id) === Number(auction?.product?.id)) {
        checked = true;
        return;
      }
    });
    return checked;
  };

  return {
    listAuction,
    goToDetailSold,
    checkLikedRecommendAuction,
    likeArtwork,
    isLoading,
    isShowConnectWallet,
  };
}
