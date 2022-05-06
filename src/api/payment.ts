import { Balence, UpdateBalenceInput } from '../types/payment';
import axiosClient from './axiosClient';

const prefixUrl = '/payment';
const paymentApi = {
  async updateBalence(input: UpdateBalenceInput): Promise<Balence> {
    const url = prefixUrl + '/update-balence';
    return await axiosClient.post(url, input);
  },
  // async listBid(input: PaginationParams | ViewAuctionInput): Promise<any> {
  //   const url = prefixUrl + '/list-bid';
  //   return await axiosClient.get(url, {
  //     params: input,
  //   });
  // },
};

export default paymentApi;
