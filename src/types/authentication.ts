import { Artwork } from "./artwork";

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
  userInformation: UserInformation;
}

export interface UserInformation {
  rating?: number;
  profileImage: string;
  bio?: string;
  displayName: string;
  email: string;
  phoneNumber: string;
}