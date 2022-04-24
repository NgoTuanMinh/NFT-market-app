import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import colors from '../../utils/colors';
import { fontWeights, sizes } from '../../utils/sizings';
import ButtonCommon from '../common/buttons/commonButton/CommonButton';
import InputText from '../common/inputText/InputText';

interface IProps {
  visible: boolean;
  hideModal: () => void;
  minBid: number;
  placeAbid: () => void;
  onChangeInput: (value: string) => void;
  bidPrice: number | string;
  balence: number;
}

const ModalPlaceBid = ({
  visible,
  hideModal,
  minBid,
  placeAbid,
  onChangeInput,
  bidPrice,
  balence,
}: IProps) => {
  const bidPlaced = Number(bidPrice).toFixed(2);
  const serviceFee = (Number(bidPrice) * 0.003).toFixed(3);
  const total = (Number(bidPlaced) + Number(serviceFee)).toFixed(3);
  return (
    <View style={styles.wrapper}>
      <Portal>
        <Modal
          style={styles.wrapModal}
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.container}>
          <View style={styles.modal}>
            <Text style={styles.title}>Place a bid</Text>
            <Text style={styles.warning}>
              You must bid at least {minBid.toFixed(3)} ETH
            </Text>

            <Text style={styles.bidTitle}>Your bid</Text>
            <View style={styles.wrapRow}>
              <Text style={styles.bidTitleSecond}>Enter bid</Text>
              <Text style={styles.bidPrice}>{bidPlaced} ETH</Text>
            </View>

            <View style={styles.wrapRow}>
              <Text style={styles.bidTitleSecond}>Your balence</Text>
              <Text style={styles.bidPrice}>{balence.toFixed(2)} ETH</Text>
            </View>

            <View style={styles.wrapRow}>
              <Text style={styles.bidTitleSecond}>Service fee</Text>
              <Text style={styles.bidPrice}>{serviceFee} ETH</Text>
            </View>

            <View style={styles.wrapRow}>
              <Text style={styles.bidTotal}>Total</Text>
              <Text style={styles.bidPrice}>{total} ETH</Text>
            </View>

            <View style={{ marginTop: sizes.size_24 }} />
            <InputText
              onChange={onChangeInput}
              value={String(bidPrice)}
              label="Bid price"
              name="bidPriceType"
              type="number"
              placeHolder="Enter you bid"
            />

            <View style={{ marginTop: sizes.size_24 }} />
            <ButtonCommon onPress={placeAbid} title="Place a bid" />
            <View style={{ marginBottom: sizes.size_12 }} />
            <ButtonCommon onPress={hideModal} title="Cancel" primary={false} />
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    backgroundColor: colors.white,
    marginHorizontal: sizes.size_16,
    borderRadius: sizes.size_24,
  },
  wrapModal: {},
  modal: {
    paddingHorizontal: sizes.size_16,
    paddingTop: sizes.size_16,
    paddingBottom: sizes.size_32,
  },
  title: {
    fontSize: sizes.size_24,
    fontWeight: fontWeights.fontWeight_700,
    lineHeight: sizes.size_32,
    color: colors.grayBody,
  },
  warning: {
    fontSize: sizes.size_16,
    fontWeight: fontWeights.fontWeight_400,
    lineHeight: sizes.size_22,
    color: colors.grayLabel,
    marginTop: sizes.size_4,
    marginBottom: sizes.size_32,
  },
  wrapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: sizes.size_2,
  },
  bidTitle: {
    fontSize: sizes.size_18,
    lineHeight: sizes.size_24,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
    marginBottom: sizes.size_8,
  },
  bidTotal: {
    fontSize: sizes.size_16,
    lineHeight: sizes.size_24,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
  },
  bidPrice: {
    fontSize: sizes.size_16,
    lineHeight: sizes.size_24,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
  },
  bidTitleSecond: {
    fontSize: sizes.size_16,
    lineHeight: sizes.size_22,
    fontWeight: fontWeights.fontWeight_400,
    color: colors.grayBody,
  },
});

export default ModalPlaceBid;
