import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { getAMovie } from "../../common/apis/Movies";
import Navbar from "../LandingPage/Navbar/Navbar";
import "./MovieDetails.css";
import { CBadge } from "@coreui/react";

const MovieDetails = () => {
	const [data, setData] = useState();
	const { id } = useParams();
	const getMovie = async () => {
		const res = await getAMovie(id);
		setData(res?.data);
	};
	useEffect(() => {
		getMovie();
		// eslint-disable-next-line
	}, []);
	return (
		<>
			<Navbar />
			{data && (
				<div>
					<div className='player-wrapper'>
						<ReactPlayer
							url={data.trailerUrl}
							controls
							className='video'
							width='100%'
							height='100%'
						/>
					</div>
					<div className='movie-data m-3 p-4'>
						<div className='image-div'>
							<img
								src={data.posterUrl}
								width={300}
								height={400}
								alt='...img'
							/>
						</div>
						<div className='movie-details'>
							<h3 className='m-2'>Movie Details</h3>
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
							<h3 className='m-3'>{data.name}</h3>
							<h5 className='m-3'>{data.director}</h5>
							<h5 className='m-3'>{data.releaseDate}</h5>
							<div className='m-3'>
								<h4>casts</h4>
								{data.casts.map((name) => (
									<li>{name}</li>
								))}
							</div>
							<div className='mx-3'>
								{data.releaseStatus === "RELEASED" ? (
									<button>
										<Link
											to={`/buytickets/${data.name}/${data._id}`}
										>
											{" "}
											Book Ticket
										</Link>
									</button>
								) : (
									<button>Comming Soon</button>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MovieDetails;
