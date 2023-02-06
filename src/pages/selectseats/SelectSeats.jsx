import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAMovie } from "../../common/apis/Movies";
import { getATheater } from "../../common/apis/Theaters";
import Navbar from "../LandingPage/Navbar/Navbar";
import AllSeats from "./AllSeats/AllSeats";
import Modal from "./Modal/Modal";
import Payments from "./payment/Payments";
import Seat from "./Seat/Seat";
import "./SelectSeats.css";
import { CreateNewBooking } from "../../common/apis/booking/booking";
import { makePayment } from "../../common/apis/payments/payments";
import { SEATS_OCCUPIED, TICKET_PRICE } from "../../common/constants/seatData";

const SelectSeats = () => {
	const { movieId, theaterId } = useParams();
	const [movieData, setMovieData] = useState({});
	const [theatreData, setTheatreData] = useState({});
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [showConfirmModal, setShowConfirmModal] = useState(false);
	const [bookingDetail, setBookingDetail] = useState({});
	const [paymentDetail, setPaymentDetail] = useState({});
	const [occupiedSeats, setOccupiedSeats] = useState(SEATS_OCCUPIED);
	const navigate = useNavigate();
	useEffect(() => {
		getDetails();
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/login");
		}
		// eslint-disable-next-line
	}, [navigate]);
	const getDetails = async () => {
		const movie = await getAMovie(movieId);
		setMovieData(movie.data);
		const theatre = await getATheater(theaterId);
		setTheatreData(theatre.data);
	};

	const createBooking = async () => {
		const bookingData = {
			movieId,
			theatreId: theaterId,
			noOfSeats: selectedSeats.length,
			timing: new Date().toLocaleString(),
		};
		const res = await CreateNewBooking(bookingData);
		const { data, status } = res;
		if (status === 201) {
			setBookingDetail(data);
			setShowModal(true);
		}
	};
	const confirmBooking = async () => {
		const bookingData = {
			bookingId: bookingDetail._id,
			amount: TICKET_PRICE * selectedSeats.length,
		};
		const res = await makePayment(bookingData);
		const { data, status } = res;
		if (status === 201) {
			setPaymentDetail(data);
			setShowModal(false);
			setShowConfirmModal(true);
		}
	};
	const handlePostPayment = () => {
		setShowConfirmModal(false);
		const tempOccupied = [...occupiedSeats];
		selectedSeats.forEach((seat) => {
			tempOccupied.push(seat);
		});
		setOccupiedSeats(tempOccupied);
		setSelectedSeats([]);
	};

	return (
		<div>
			<Navbar />
			<div className='select-seats-wrapper'>
				<h1 className='text-center'>{movieData.name}</h1>
				<h2 className='text-center'>{theatreData.name}</h2>
				<div className='seats-guide'>
					<div className='d-flex align-items-center'>
						<Seat />
						<span>Avaliable</span>
					</div>
					<div className='d-flex align-items-center'>
						<Seat seatStatus='selected' />
						<span>Selected</span>
					</div>
					<div className='d-flex align-items-center'>
						<Seat seatStatus='occupied' />
						<span>Occupied</span>
					</div>
				</div>
				<div className='screen-wrapper d-flex justify-content-center align-items-center'>
					<div className='screen'></div>
				</div>
				<AllSeats
					setShowModal={setShowModal}
					selectedSeats={selectedSeats}
					setSelectedSeats={setSelectedSeats}
					createBooking={createBooking}
					occupiedSeats={occupiedSeats}
				/>
				<Modal
					showModal={showModal}
					movieData={movieData}
					theatreData={theatreData}
					setShowModal={setShowModal}
					selectedSeats={selectedSeats}
					confirmBooking={confirmBooking}
				/>
				<Payments
					showConfirmModal={showConfirmModal}
					movieData={movieData}
					theatreData={theatreData}
					selectedSeats={selectedSeats}
					paymentDetail={paymentDetail}
					handlePostPayment={handlePostPayment}
				/>
			</div>
		</div>
	);
};

export default SelectSeats;
