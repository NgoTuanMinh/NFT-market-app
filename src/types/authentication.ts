import { Artwork } from './artwork';

export interface LoginInput {
  userName: string;
  password: string;
}

export interface LoginOutput {
  accessToken: string;
  refreshToken: string;
  expireTime: number;
}

export interface User {
  userName: string;
  isLogged: boolean;
  favouriteProduct: Artwork[];
}
