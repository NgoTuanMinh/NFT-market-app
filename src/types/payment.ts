export interface UpdateBalenceInput {
  amount: number;
  cardNumber: string;
}

export interface Balence {
  createdAt: string;
  cardNumber: string;
  amount: number;
  userId: number;
  id: number;
}
