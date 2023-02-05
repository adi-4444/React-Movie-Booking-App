import React from "react";
import "./Modal.css";
import {
	CButton,
	CModal,
	CModalBody,
	CModalFooter,
	CModalHeader,
	CModalTitle,
} from "@coreui/react";
import { TICKET_PRICE } from "../../../common/constants/seatData";

const Modal = ({
	showModal,
	setShowModal,
	selectedSeats,
	movieData,
	theatreData,
}) => {
	return (
		<div>
			<CModal
				alignment='center'
				visible={showModal}
				onClose={() => setShowModal(false)}
				backdrop='static'
			>
				<CModalHeader>
					<CModalTitle>Procced to Payment</CModalTitle>
				</CModalHeader>
				<CModalBody>
					<h5>Movie Name : {movieData.name}</h5>
					<h5>Theatre Name : {theatreData.name}</h5>
					<h5>
						Seats Selected : {selectedSeats.join(",")}, (
						{selectedSeats.length} seats)
					</h5>
					<h5>Total Price : {selectedSeats.length * TICKET_PRICE}</h5>
				</CModalBody>
				<CModalFooter>
					<CButton
						color='secondary'
						onClick={() => setShowModal(false)}
					>
						Cancel
					</CButton>
					<CButton className='confirm-btn'>Confirm</CButton>
				</CModalFooter>
			</CModal>
		</div>
	);
};

export default Modal;
