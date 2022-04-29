import { User } from '../types/authentication';
import { GetUserInfoInput } from '../types/user';
import axiosClient from './axiosClient';

const prefixUrl = '/user';
const userApi = {
  getUserInfo(input: GetUserInfoInput): Promise<User> {
    const url = prefixUrl + '/user-info';
    console.log('urll====', url, 'input======', input);
    return axiosClient.get(url, {
      params: input,
    });
  },
};

export default userApi;
