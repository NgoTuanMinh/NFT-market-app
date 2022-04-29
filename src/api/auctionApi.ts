import { Artwork, CreateArtworkInput, LikeArtworkInput } from '../types/artwork';
import { Auction, Bid, CreateAuctionInput, PlaceABidInput, ViewAuctionInput } from '../types/auction';
import { User } from '../types/authentication';
import { PaginationParams } from '../types/pagination';
import axiosClient from './axiosClient';

const prefixUrl = '/auction';
const auctionApi = {
  create(input: CreateAuctionInput): Promise<Auction> {
    const url = prefixUrl + '/create-auction-session';
    return axiosClient.post(url, input);
  },
  viewAuction(input: ViewAuctionInput): Promise<Auction> {
    const url = prefixUrl + '/view-auction';
    return axiosClient.post(url, input);
  },
  placeABid(input: PlaceABidInput): Promise<Bid> {
    const url = prefixUrl + '/place-bid';
    return axiosClient.post(url, input);
  },
  listAuction(input: PaginationParams): Promise<Array<Auction>> {
    const url = prefixUrl + '/list-auction';
    return axiosClient.get(url, {
      params: input,
    });
  }
};

export default auctionApi;
