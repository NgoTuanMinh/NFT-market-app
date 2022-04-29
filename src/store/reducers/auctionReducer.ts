import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auction, CreateAuctionInput } from '../../types/auction';


export interface AuctionState {
  loading: boolean;
  listAuction: Auction[];
}

const initialState: AuctionState = {
  loading: false,
  listAuction: [],
};

const auctionSlice = createSlice({
  name: 'auction',
  initialState: initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createAuction(state, action: PayloadAction<CreateAuctionInput>) {
      state.loading = true;
    },
    createAuctionSuccess(state) {
      state.loading = false;
    },
    createAuctionFailed(state) {
      state.loading = false;
    },
    getListAuction(state) {
      state.loading = true;
    },
    getListAuctionSuccess(state, action: PayloadAction<Array<Auction>>) {
      state.loading = true;
      state.listAuction = action.payload;
    },
    getListAuctionFailed(state) {
      state.loading = false;
    },
  },
});
// Action
export const auctionActions = auctionSlice.actions;

// Selector
export const selectLoadingAuction = (state: any) => state.auction.loading;
export const selectListAuction = (state: any) => state.auction.listAuction;

// Reducers
const auctionReducer = auctionSlice.reducer;
export default auctionReducer;
