import { LoginInput, LoginOutput } from '../types/authentication';
import axiosClient from './axiosClient';

const prefixUrl = '/authentication';
const authenticationApi = {
  login(input: LoginInput): Promise<LoginOutput> {
    const url = prefixUrl + '/login';
    return axiosClient.post(url, input);
  },
};

export default authenticationApi;
