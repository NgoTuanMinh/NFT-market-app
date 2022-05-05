import {
  Auction,
  Bid,
  CreateAuctionInput,
  GetAuctionDetailInput,
  PlaceABidInput,
  ViewAuctionInput,
} from '../types/auction';
import { PaginationParams } from '../types/pagination';
import axiosClient from './axiosClient';

const prefixUrl = '/auction';
const auctionApi = {
  async create(input: CreateAuctionInput): Promise<Auction> {
    const url = prefixUrl + '/create-auction-session';
    return await axiosClient.post(url, input);
  },
  async viewAuction(input: ViewAuctionInput): Promise<Auction> {
    const url = prefixUrl + '/view-auction';    
    return await axiosClient.post(url, input);
  },
  async placeABid(input: PlaceABidInput): Promise<Bid> {
    const url = prefixUrl + '/place-bid';
    return await axiosClient.post(url, input);
  },
  async listAuction(input: PaginationParams): Promise<Array<Auction>> {
    const url = prefixUrl + '/list-auction';
    return await axiosClient.get(url, {
      params: input,
    });
  },
  async listBid(input: PaginationParams | ViewAuctionInput): Promise<any> {
    const url = prefixUrl + '/list-bid';
    return await axiosClient.get(url, {
      params: input,
    });
  },
  async getAuction(input: GetAuctionDetailInput): Promise<Auction> {
    const url = prefixUrl + '/auction';
    return await axiosClient.get(url, {
      params: input,
    });
  },
};

export default auctionApi;
