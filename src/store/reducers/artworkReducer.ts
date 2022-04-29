import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Artwork, CreateArtworkInput } from '../../types/artwork';

export interface ArtworkState {
  loading: boolean;
  listArtworkOwner: Artwork[];
}

const initialState: ArtworkState = {
  loading: false,
  listArtworkOwner: [],
};

const artworkSlice = createSlice({
  name: 'artwork',
  initialState: initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createArtwork(state, action: PayloadAction<CreateArtworkInput>) {
      state.loading = true;
    },
    createArtworkSuccess(state) {
      state.loading = false;
    },
    createArtworkFailed(state) {
      state.loading = false;
    },
    getListArtwork(state) {
      state.loading = true;
    },
    getListArtworkSuccess(state, action: PayloadAction<Array<Artwork>>) {
      state.loading = true;
      state.listArtworkOwner = action.payload;
    },
    getListArtworkFailed(state) {
      state.loading = false;
    },
  },
});
// Action
export const artworkActions = artworkSlice.actions;

// Selector
export const selectLoadingArtwork = (state: any) => state.artwork.loading;
export const selectListArtwork = (state: any) => state.artwork.listArtworkOwner;

// Reducers
const artworkReducer = artworkSlice.reducer;
export default artworkReducer;
