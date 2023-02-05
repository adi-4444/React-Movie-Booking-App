import React from "react";
import "./Seat.css";

const Seat = ({ seatStatus }) => {
	return <div className={`seat ${seatStatus}`} />;
};

export default Seat;
