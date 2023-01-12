import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
	const { id } = useParams();
	console.log(id);
	return <div>MovieDetails</div>;
};

export default MovieDetails;
