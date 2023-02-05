import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAMovie } from "../../common/apis/Movies";
import { getATheater } from "../../common/apis/Theaters";
import Navbar from "../LandingPage/Navbar/Navbar";
import AllSeats from "./AllSeats/AllSeats";
import Modal from "./Modal/Modal";
import Seat from "./Seat/Seat";
import "./SelectSeats.css";

const SelectSeats = () => {
	const { movieId, theaterId } = useParams();
	const [movieData, setMovieData] = useState({});
	const [theatreData, setTheatreData] = useState({});
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [showModal, setShowModal] = useState(false);
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
				/>
				<Modal
					showModal={showModal}
					movieData={movieData}
					theatreData={theatreData}
					setShowModal={setShowModal}
					selectedSeats={selectedSeats}
				/>
			</div>
		</div>
	);
};

export default SelectSeats;
