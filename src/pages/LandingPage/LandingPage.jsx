import React, { useState, useEffect } from "react";
import "./landingpage.css";
import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";
import { getAllMovies } from "./apis";
const LandingPage = () => {
	const [moviesList, setMoviesList] = useState([]);
	const getData = async () => {
		const result = await getAllMovies();
		setMoviesList(result);
	};
	console.log(moviesList);
	useEffect(() => {
		getData();
	}, []);
	return (
		<div>
			<Navbar />
			<Slider />
			{moviesList.map((movie) => {
				return (
					<div>
						<p>{movie.name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default LandingPage;
