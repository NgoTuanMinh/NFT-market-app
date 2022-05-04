import { User } from '../types/authentication';
import { GetUserInfoInput } from '../types/user';
import axiosClient from './axiosClient';

const prefixUrl = '/user';
const userApi = {
  async getUserInfo(input?: GetUserInfoInput): Promise<any> {
    const url = prefixUrl + '/user-info';
    return await axiosClient.get(url, {
      params: input,
    });
  },
};

export default userApi;
