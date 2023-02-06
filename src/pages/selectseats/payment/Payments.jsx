import React from "react";
import "./Payments.css";
import {
	CButton,
	CModal,
	CModalBody,
	CModalFooter,
	CModalHeader,
	CModalTitle,
} from "@coreui/react";
import { TICKET_PRICE } from "../../../common/constants/seatData";
import confirm from "../../../assets/simpson.gif";

const Payments = ({
	showConfirmModal,
	selectedSeats,
	movieData,
	theatreData,
	handlePostPayment,
	paymentDetail,
}) => {
	return (
		<div>
			<CModal
				alignment='center'
				visible={showConfirmModal}
				onClose={handlePostPayment}
				backdrop='static'
			>
				<CModalHeader>
					<CModalTitle>
						Congratulations, Booking Confirmed !!!
					</CModalTitle>
					<div>
						<img src={confirm} alt='bruhhh' />
					</div>
				</CModalHeader>
				<CModalBody>
					<h5>Booking id : {paymentDetail.bookingId}</h5>
					<h5>Movie Name : {movieData.name}</h5>
					<h5>Theatre Name : {theatreData.name}</h5>
					<h5>
						Seats Selected : {selectedSeats.join(",")}, (
						{selectedSeats.length} seats)
					</h5>
					<h5>Total Price : {selectedSeats.length * TICKET_PRICE}</h5>
				</CModalBody>
				<CModalFooter>
					<CButton color='secondary' onClick={handlePostPayment}>
						Close
					</CButton>
				</CModalFooter>
			</CModal>
		</div>
	);
};

export default Payments;
