import React, { useEffect, useState } from "react";
import { TICKET_PRICE } from "../../../common/constants/seatData";
import {
	seats2dRepresentation,
	getSeatNumber,
} from "../../../common/utils/theratreSeats";
import Seat from "../Seat/Seat";
import "./AllSeats.css";

const AllSeats = ({
	selectedSeats,
	setSelectedSeats,
	createBooking,
	occupiedSeats,
}) => {
	const [seatState, setSeatState] = useState(
		seats2dRepresentation(selectedSeats, occupiedSeats)
	);
	useEffect(() => {
		const newState = seats2dRepresentation(selectedSeats, occupiedSeats);
		setSeatState(newState);
	}, [selectedSeats, occupiedSeats]);
	const handleSelectSeat = (rowIndex, columnIndex) => {
		const currentStatus = seatState[rowIndex][columnIndex];
		const tempSelected = [...selectedSeats];
		const seatNo = getSeatNumber(rowIndex, columnIndex);
		let finalStatus = "";
		if (currentStatus === "available") {
			finalStatus = "selected";
			tempSelected.push(seatNo);
		} else if (currentStatus === "selected") {
			finalStatus = "available";
			const seatIndex = tempSelected.indexOf(seatNo);
			tempSelected.splice(seatIndex, 1);
		} else {
			finalStatus = "occupied";
		}
		const temp = [...seatState];
		temp[rowIndex][columnIndex] = finalStatus;
		setSeatState(temp);
		setSelectedSeats(tempSelected);
	};
	return (
		<div className='d-flex justify-content-center align-items-center flex-column my-3'>
			<h4>Select Seats</h4>
			{seatState.map((seatRow, rowIndex) => (
				<div className='all-seats d-flex align-items-center justify-content-center'>
					{seatRow.map((seatColumn, columnIndex) => {
						const classOff =
							columnIndex === 2 || columnIndex === 6
								? "col-sm-1 offset-sm-2"
								: "col-sm-1";
						return (
							<div
								className={classOff}
								onClick={() =>
									handleSelectSeat(rowIndex, columnIndex)
								}
							>
								<Seat seatStatus={seatColumn} />
							</div>
						);
					})}
				</div>
			))}
			{selectedSeats.length > 0 && (
				<>
					<div className='text-center p-3 my-2'>
						<h5>
							selected seats{" "}
							<span className='seat-select'>
								{selectedSeats.length}
							</span>
							. Price is{" "}
							<span className='seat-select'>
								₹ {TICKET_PRICE * selectedSeats.length}
							</span>
						</h5>
					</div>
					<button className='proceed-btn' onClick={createBooking}>
						Proceed to Payment
					</button>
				</>
			)}
		</div>
	);
};

export default AllSeats;
