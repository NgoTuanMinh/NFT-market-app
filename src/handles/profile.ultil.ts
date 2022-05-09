/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable react-hooks/exhaustive-deps

import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import userApi from '../api/userrApi';
import { authActions } from '../store/reducers/authReducer';
import { User } from '../types/authentication';

interface Utils {
  handleLogout: () => void;
  isLoading: boolean;
  userInfo: User | undefined;
}

export default function ProfileUtils(): Utils {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(authActions.logout());

  const {
    isLoading: isLoadingGetUserInfo,
    data: userInfo,
    isFetching: isFetchingGetUserInfo,
    refetch: getUserInfo,
  } = useQuery('getUserInfo', () => userApi.getUserInfo());

  const isLoading = isLoadingGetUserInfo;

  return {
    handleLogout,
    isLoading,
    userInfo,
  };
}
