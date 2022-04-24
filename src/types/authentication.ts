export interface LoginInput {
  userName: string;
  password: string;
}

export interface LoginOutput {
  accessToken: string;
  refreshToken: string;
  expireTime: number;
}
