import React, { useState } from "react";
import { seats2dRepresentation } from "../../../common/utils/theratreSeats";
import Seat from "../Seat/Seat";
import "./AllSeats.css";

const AllSeats = () => {
	const [seatState, setSeatState] = useState(seats2dRepresentation());

	const handleSelectSeat = (rowIndex, columnIndex) => {
		const currentStatus = seatState[rowIndex][columnIndex];
		console.log(currentStatus);
		let finalStatus = "";
		if (currentStatus === "available") {
			finalStatus = "selected";
		} else if (currentStatus === "selected") {
			finalStatus = "available";
		} else {
			finalStatus = "occupied";
		}
		const temp = [...seatState];
		temp[rowIndex][columnIndex] = finalStatus;
		setSeatState(temp);
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
		</div>
	);
};

export default AllSeats;
