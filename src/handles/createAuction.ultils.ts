import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { artworkActions, selectListArtwork } from '../store/reducers/artworkReducer';
import { auctionActions } from '../store/reducers/auctionReducer';
import { Artwork } from '../types/artwork';
import { CreateAuctionInput } from '../types/auction';

interface Utils {
  indexScreen: number;
  setIndexScreen: (index: number) => void;
  price: string;
  setPrice: (val: string) => void;
  showDatePicker: boolean;
  setShowDatePicker: (val: boolean) => void;
  date: any,
  setDate: (val: any) => void;
  createAuction: () => void;
  listArtworkOwner: Artwork[];
  showModalSelectImage: boolean;
  setShowModalSelectImage: (val: boolean) => void;
  imageSelected: number | undefined;
  setImageSelecte:(val: number | undefined) => void;
  imageDetailSelected: Artwork | undefined;
}

export default function CreateAuctionUtils(): Utils {
  const [indexScreen, setIndexScreen] = useState<number>(0);
  const [price, setPrice] = useState<string>('');
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const dateNow = new Date();
  const dateInitial = new Date(dateNow.setDate(dateNow.getDate() + 1))
	const [date, setDate] = useState(dateInitial);
  const [showModalSelectImage, setShowModalSelectImage] = useState<boolean>(false);
  const [imageSelected, setImageSelecte] = useState<number|undefined>(undefined);
  const [imageDetailSelected, setImageDetailSelected] = useState<Artwork>();

  const dispatch = useDispatch();

  const listArtworkOwner = useSelector(selectListArtwork);
  
  const createAuction = () => {
    if (!imageSelected || !date || !price || isNaN(Number(price))) return;
    const data: CreateAuctionInput = {
      timeEnd: date,
      productId: imageSelected,
      reservePrice: Number(price),
    }
    dispatch(auctionActions.createAuction(data));
    setPrice('');
    setDate(dateInitial);
    setImageSelecte(undefined);
  }  
  useEffect(() => {
    dispatch(artworkActions.getListArtwork());
  }, []);

  useEffect(() => {
    const imageDetail = listArtworkOwner.find((item: Artwork) => Number(item.id) === Number(imageSelected));
    setImageDetailSelected(imageDetail);
  }, [imageSelected])

  return {
    indexScreen,
    setIndexScreen,
    price,
    setPrice,
    setShowDatePicker,
    showDatePicker,
    date,
    setDate,
    createAuction,
    listArtworkOwner,
    showModalSelectImage,
    setShowModalSelectImage,
    imageSelected,
    setImageSelecte,
    imageDetailSelected,
  };
}
