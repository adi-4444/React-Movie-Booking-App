import React, { useState, useEffect } from "react";
import "./landingpage.css";
import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";
import Movie from "./Movie/Movie";
import { getAllMovies } from "./apis";
const LandingPage = () => {
	const [moviesList, setMoviesList] = useState([]);
	const [loading, isLoading] = useState(true);
	const getData = async () => {
		isLoading(true);
		const result = await getAllMovies();
		isLoading(false);
		setMoviesList(result.data);
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<div>
			<Navbar />
			<Slider />
			<Movie loading={loading} moviesList={moviesList} />
		</div>
	);
};

export default LandingPage;
