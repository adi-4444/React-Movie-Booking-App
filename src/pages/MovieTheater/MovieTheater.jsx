import React, { useState, useEffect } from "react";
import "./MovieTheater.css";
import { Link, useParams } from "react-router-dom";
import Navbar from "../LandingPage/Navbar/Navbar";
import { getAMovie } from "../../common/apis/Movies";
import { CBadge } from "@coreui/react";
import { getTheaters } from "../../common/apis/Theaters";

const MovieTheater = () => {
	const { movieId } = useParams();
	const [data, setData] = useState([]);
	const [availableTheaters, setAvailableTheaters] = useState([]);

	const getDetails = async () => {
		const res = await getAMovie(movieId);
		setData(res.data);
		const theatres = await getTheaters();
		const available = theatres.data.filter((t) =>
			t.movies.includes(movieId)
		);
		setAvailableTheaters(available);
	};

	useEffect(() => {
		getDetails();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<Navbar />
			<div className='movie-detail'>
				<h2>{data.name}</h2>
				<div>
					<CBadge color='danger' shape='rounded-pill m-1'>
						{data.description}
					</CBadge>
					<CBadge color='dark' shape='rounded-pill m-1'>
						{data.language}
					</CBadge>
					<CBadge color='dark' shape='rounded-pill m-1'>
						{data.releaseStatus}
					</CBadge>
				</div>
				<h5 className='m-3'>Director : {data.director}</h5>
				<h5 className='m-3'>Release Date : {data.releaseDate}</h5>
			</div>
			<div className='theatres-list'>
				{availableTheaters &&
					availableTheaters.map((t) => (
						<Link
							className='a-theatre'
							key={t._id}
							to={`/buytickets/${movieId}/${t._id}/selectseats`}
						>
							<h3 className='t-name'>{t.name}</h3>
							<div className='d-flex align-items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='1.5em'
									height='1.5em'
									viewBox='0 0 24 24'
								>
									<path
										fill='green'
										d='M10.5 20h3q.2 0 .35-.15q.15-.15.15-.35q0-.2-.15-.35q-.15-.15-.35-.15h-3q-.2 0-.35.15q-.15.15-.15.35q0 .2.15.35q.15.15.35.15ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-7h10V6H7Zm0 2v3h10v-3ZM7 4h10V3H7Zm0-1v1v-1Zm0 18v-3v3Z'
									/>
								</svg>
								<span className='m-ticket mx-2'>M-Ticket</span>
							</div>
							<div className='d-flex align-items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='1.5em'
									height='1.5em'
									viewBox='0 0 512 512'
								>
									<path
										fill='#f84464'
										d='m273.637 128l3.809 32h96.43l-8 64H252.573l-7.442-64h.089l-3.809-32l-.045-.389l-9.041-77.745L230.247 32H104v32h97.753l7.442 64h-91.319l40.5 323.969A32.051 32.051 0 0 0 190.125 480h147.75a32.051 32.051 0 0 0 31.753-28.031L410.124 128Zm-119.513 32h58.792l7.442 64h-58.234Zm183.765 288H190.124l-24-192h57.955l13.953 120h32.215l-13.954-120H361.88Z'
									/>
								</svg>
								<span className='f-b mx-2'>
									Food & Beverages
								</span>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default MovieTheater;
