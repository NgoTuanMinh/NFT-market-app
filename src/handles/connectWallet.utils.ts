import { useState } from 'react';
import { useMutation } from 'react-query';
import paymentApi from '../api/payment';
import { goback } from '../navigation/service';
import { UpdateBalenceInput } from '../types/payment';

interface Utils {
  onChangeCardNumber: (e: string) => void;
  cardNumber: string;
  indexPage: number;
  setIndexPage: (e: number) => void;
  amount: number | undefined;
  setAmount: (e: number) => void;
  submitBalence: () => void;
  isLoading: boolean;
}

export default function ConnectWalletUtils(): Utils {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [indexPage, setIndexPage] = useState<number>(0);
  const [amount, setAmount] = useState<number>();

  const onChangeCardNumber = (e: string) => setCardNumber(e);

  const submitBalence = () => {
    if (!amount) {
      return;
    }
    mutateUpdateBalence({
      amount,
      cardNumber,
    });
  };

  const {
    isLoading: isLoadingUpdateBalence,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isSuccess: isSuccessUpdateBalence,
    mutate: mutateUpdateBalence,
  } = useMutation(
    (input: UpdateBalenceInput) => paymentApi.updateBalence(input),
    {
      onSuccess: () => {
        goback();
      },
      onError: () => {},
    },
  );

  const isLoading = isLoadingUpdateBalence;

  return {
    cardNumber,
    onChangeCardNumber,
    indexPage,
    setIndexPage,
    amount,
    setAmount,
    submitBalence,
    isLoading,
  };
}
