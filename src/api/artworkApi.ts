import {
  Artwork,
  CreateArtworkInput,
  LikeArtworkInput,
} from '../types/artwork';
import { User } from '../types/authentication';
import { PaginationParams } from '../types/pagination';
import axiosClient from './axiosClient';

const prefixUrl = '/product';
const artworkApi = {
  create(input: CreateArtworkInput): Promise<Artwork> {
    const url = prefixUrl + '/create-product';
    return axiosClient.post(url, input);
  },
  like(input: LikeArtworkInput): Promise<User> {
    const url = prefixUrl + '/like-product';
    return axiosClient.post(url, input);
  },
  listArtworkOwner(input: PaginationParams): Promise<Array<Artwork>> {
    const url = prefixUrl + '/list-product-owner';
    return axiosClient.get(url, {
      data: {
        data: input,
      },
    });
  },
};

export default artworkApi;
