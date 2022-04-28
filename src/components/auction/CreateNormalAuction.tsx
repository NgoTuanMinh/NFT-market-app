import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';
import { fontWeights, sizes } from '../../utils/sizings';
import InputText from '../common/inputText/InputText';
import DatePicker from 'react-native-date-picker'
import { Modal, Portal } from 'react-native-paper';
import images from '../../utils/images';
import { formatDate } from '../../utils/formats/formatCommon';
import ButtonCommon from '../common/buttons/commonButton/CommonButton';
import screenName from '../../utils/screenName';
import { navigate } from '../../navigation/service';

interface IProps {
  onChangePrice: (val: string) => void;
	price: string;
	showDatePicker: boolean;
	setShowDatePicker: (val: boolean) => void;
	date: any;
	setDate: (val: any) => void;
	createAuction: () => void;
}

const containerStyle = {backgroundColor: 'white', padding: 20};
const CreateNormalAuction = ({
  onChangePrice,
	price,
	showDatePicker,
	setShowDatePicker,
	date,
	setDate,
	createAuction,
}: IProps) => {

	const dateString = formatDate(date, 'DD/MM/YYYY  hh:mm A');

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Minimum bid</Text>
			<Text style={styles.description}>You’ll receive bids on this item</Text>
			<View style={styles.wrapInputPrice}>
				<Text style={styles.titleInput}>ETH</Text>
				<View style={styles.wrapInput}>
					<InputText
						type='number'
						label='Bid price'
						onChange={onChangePrice}
						value={price}
						style={{backgroundColor: colors.white}}
					/>
				</View>
			</View>

			<Text style={styles.expireTitle}>Expiration Date</Text>

			<View style={styles.wrapViewDate}>
				<Text style={styles.textTime}>{dateString}</Text>
				<TouchableOpacity onPress={() => setShowDatePicker(true)}>
					<Image source={images.calendar} style={styles.iconCalendar} />
				</TouchableOpacity>
			</View>

			<ButtonCommon
				onPress={createAuction}
				title='Mint NFT'
			/>

			<Portal>
        <Modal visible={showDatePicker} onDismiss={() => setShowDatePicker(false)} contentContainerStyle={containerStyle}>    
					<View style={styles.wrapDatePicker}>
						<DatePicker date={date} onDateChange={setDate} mode='datetime' theme='light' />
					</View>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
		paddingBottom: sizes.size_12,
  },
  title: {
		fontSize: sizes.size_24,
		lineHeight: sizes.size_32,
		fontWeight: fontWeights.fontWeight_700,
		color: colors.grayBody,
		marginTop: sizes.size_16,
  },
	description: {
		fontSize: sizes.size_16,
		lineHeight: sizes.size_22,
		fontWeight: fontWeights.fontWeight_400,
		color: colors.grayLabel,
		marginTop: sizes.size_8,
	},
	wrapInputPrice: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: sizes.size_12,
	},
	titleInput: {
		fontSize: sizes.size_24,
		lineHeight: sizes.size_32,
		color: colors.grayTitleActive,
		fontWeight: fontWeights.fontWeight_700,
	},
	wrapInput: {
		flex: 1,
		marginLeft: sizes.size_12,
	},
	wrapDatePicker: {
		marginTop: sizes.size_50,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	expireTitle: {
		marginVertical: sizes.size_24,
		fontSize: sizes.size_16,
		lineHeight: sizes.size_24,
		fontWeight: fontWeights.fontWeight_700,
		color: colors.grayBody,
		paddingHorizontal: sizes.size_4,
	},
	wrapViewDate: {
		flexDirection: 'row',
		// justifyContent: 'space-around',
		paddingHorizontal: sizes.size_4,
		marginBottom: sizes.size_32,
	},
	iconCalendar: {
		width: sizes.size_24,
		height: sizes.size_24,
		marginLeft: sizes.size_24,
	},
	textTime: {
		fontSize: sizes.size_16,
		lineHeight: sizes.size_22,
		fontWeight: fontWeights.fontWeight_500,
		color: colors.grayLabel,
	},
});

export default CreateNormalAuction;
