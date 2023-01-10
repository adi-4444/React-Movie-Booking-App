import React from "react";
import { Link } from "react-router-dom";
import "./movie.css";
import Loader1 from "../../../common/components/loader1/Loader1";

const Movie = ({ moviesList, loading }) => {
	return (
		<div className='movie-data'>
			{loading && <Loader1 />}
			{moviesList?.map((movie) => (
				<Link
					to={`/movie/${movie._id}/details`}
					className='movie'
					key={movie._id}
				>
					<img
						className='movie-image'
						src={movie.posterUrl}
						alt='img'
					/>
					<h4 className='movie-title'>{movie.name}</h4>
					<p className='movie-description'>{movie.description}</p>
				</Link>
			))}
		</div>
	);
};

export default Movie;
