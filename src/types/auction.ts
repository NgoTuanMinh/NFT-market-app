import { Artwork } from "./artwork";
import { User } from "./authentication";

export interface Auction {
  seller:User;
  product:Artwork;
  sessionInformation:SessionInformation;
  isSold?: boolean;
  isFinished?: boolean;
  id?: number;
}

export interface SessionInformation {
  id?: number;
  rating?: number;
  timeEnd: Date;
  reservePrice: number;
  largestBid?: Bid;
}

export interface Bid {
  bidBy?: number | User;
  bidPrice: number;
  auctionSession?: number | Auction;
  id?: number;
}

export interface CreateAuctionInput {
  productId: number;
  timeEnd: Date;
  reservePrice: number;
}

export interface ViewAuctionInput {
  auctionSessionId: number;
}

export interface PlaceABidInput {
  auctionSessionId: number;
  bidPrice: number;
}

