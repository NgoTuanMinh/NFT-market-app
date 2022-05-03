/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable react-hooks/exhaustive-deps

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../navigation/service';
import {
  auctionActions,
  selectListAuction,
} from '../store/reducers/auctionReducer';
import { selectUser, userActions } from '../store/reducers/userReducer';
import { Artwork } from '../types/artwork';
import { Auction } from '../types/auction';
import { User } from '../types/authentication';
import screenName from '../utils/screenName';
import { getUserData } from '../utils/storage';

interface Utils {
  listAuction: Auction[];
  goToDetailSold: (id: number) => void;
  checkLikedRecommendAuction: (auction: Auction) => boolean;
}

export default function HomeUtils(): Utils {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState<User>();

  const listAuction = useSelector(selectListAuction);
  const userInfoRedux = useSelector(selectUser);

  useEffect(() => {
    dispatch(auctionActions.getListAuction());
    dispatch(userActions.getUser());
  }, [dispatch]);

  const goToDetailSold = (id: number) => {
    navigate(screenName.DETAIL_AUCTION_SCREEN, {
      auctionId: id,
    });
  };

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
  };
}
