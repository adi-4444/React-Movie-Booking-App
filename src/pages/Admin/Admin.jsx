import React, { useEffect, useState } from "react";
import Navbar from "../LandingPage/Navbar/Navbar";
import "./Admin.css";
import { CCol, CRow, CWidgetStatsC } from "@coreui/react";
import { AiOutlinePieChart } from "react-icons/ai";

const Admin = () => {
	const [counterInfo, setCounterInfo] = useState({});

	const [theatersData, setTheatersData] = useState([]);
	const [moviesData, setMoviesData] = useState([]);
	const [usersData, setUsersData] = useState([]);

	const [showTheaterTable, setShowTheaterTable] = useState(true);
	const [showMoviesTable, setShowMoviesTable] = useState(false);
	const [showUsersTable, setShowUsersTable] = useState(false);

	const fetchTheatersData = () => {
		//make an api call
		//fetch list of theaters
		//update the theaters state
		//update the counterInfo state

		const datafromAPI = [];

		setTheatersData(datafromAPI);

		counterInfo.theater = datafromAPI.length;
		setCounterInfo(counterInfo);
	};

	const fetchMoviesData = () => {
		//make an api call
		//fetch list of movies
		//update the movies state
		//update the counterInfo state

		const datafromAPI = [];

		setMoviesData(datafromAPI);

		counterInfo.movie = datafromAPI.length;
		setCounterInfo(counterInfo);
	};

	const fetchUsersData = () => {
		//make an api call
		//fetch list of users
		//update the users state
		//update the counterInfo state

		const datafromAPI = [];

		setUsersData(datafromAPI);

		counterInfo.user = datafromAPI.length;
		setCounterInfo(counterInfo);
	};

	useEffect(() => {
		fetchTheatersData();
		fetchMoviesData();
		fetchUsersData();
	}, []);
	const showMovies = () => {
		setShowMoviesTable(true);
		setShowTheaterTable(false);
		setShowUsersTable(false);
	};

	const showTheaters = () => {
		setShowMoviesTable(false);
		setShowTheaterTable(true);
		setShowUsersTable(false);
	};

	const showUsers = () => {
		setShowMoviesTable(false);
		setShowTheaterTable(false);
		setShowUsersTable(true);
	};
	return (
		<div>
			<Navbar />
			<h2 className='page-heading'>
				Welcome , {localStorage.getItem("name")} !
			</h2>
			<div>
				<h4 className='stats-heading'>Have a quick look to stats</h4>
				<div className='stats '>
					<CRow className='stats-row'>
						<CCol xs={3}>
							<CWidgetStatsC
								className='mb-3'
								icon={<AiOutlinePieChart size={30} />}
								color='primary'
								inverse
								progress={{ value: counterInfo.theater }}
								text='Number of Theaters'
								title='Theaters'
								value={counterInfo.theater}
								onClick={() => showTheaters()}
							/>
						</CCol>
						<CCol xs={3}>
							<CWidgetStatsC
								className='widget mb-3'
								icon={<AiOutlinePieChart size={30} />}
								color='success'
								inverse
								progress={{ value: counterInfo.movies }}
								text='Number of Movies'
								title='Movies'
								value={counterInfo.movies}
								onClick={() => showMovies()}
							/>
						</CCol>
						<CCol xs={3}>
							<CWidgetStatsC
								className='widget mb-3'
								icon={<AiOutlinePieChart size={30} />}
								color='danger'
								inverse
								progress={{ value: counterInfo.users }}
								text='Number of Users'
								title='Users'
								value={counterInfo.users}
								onClick={() => showUsers()}
							/>
						</CCol>
					</CRow>
				</div>
				<div>
					{showTheaterTable && <h1>Theater Table</h1>}
					{showMoviesTable && <h1>Movies Table</h1>}
					{showUsersTable && <h1>Users Table</h1>}
				</div>
			</div>
		</div>
	);
};

export default Admin;
