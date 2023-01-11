import React, { useEffect, useState } from "react";
import Navbar from "../LandingPage/Navbar/Navbar";
import "./Admin.css";
import { CCol, CRow, CWidgetStatsC } from "@coreui/react";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

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

		counterInfo.theaters = datafromAPI.length;
		setCounterInfo(counterInfo);
	};

	const fetchMoviesData = () => {
		//make an api call
		//fetch list of movies
		//update the movies state
		//update the counterInfo state

		const datafromAPI = [];

		setMoviesData(datafromAPI);

		counterInfo.movies = datafromAPI.length;
		setCounterInfo(counterInfo);
	};

	const fetchUsersData = () => {
		//make an api call
		//fetch list of users
		//update the users state
		//update the counterInfo state

		const datafromAPI = [];

		setUsersData(datafromAPI);

		counterInfo.users = datafromAPI.length;
		setCounterInfo(counterInfo);
	};

	useEffect(() => {
		fetchTheatersData();
		fetchMoviesData();
		fetchUsersData();
		// eslint-disable-next-line
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
	const options = {
		filtering: true,
		sorting: true,
		search: true,
		paging: true,
		pageSizeOptions: [5, 10, 20],
		paginationSize: 3,
		paginationType: "stepped",
		headerStyle: {
			backgroundColor: "#323545",
			color: "white",
			align: "center",
			paddingLeft: "auto",
			textAlign: "center",
		},
		rowStyle: {
			backgroundColor: "#fff",
		},
		actionsColumnIndex: -1,
		exportMenu: [
			{
				label: "Export PDF",
				exportFunc: (cols, datas) =>
					ExportPdf(cols, datas, "Tickets CRM"),
			},
			{
				label: "Export CSV",
				exportFunc: (cols, datas) =>
					ExportCsv(cols, datas, "Tickets CRM"),
			},
		],
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
								className='widget mb-3'
								icon={<AiOutlinePieChart size={30} />}
								color='primary'
								inverse
								progress={{ value: counterInfo.theater }}
								text='Number of Theaters'
								title='Theaters'
								value={counterInfo.theaters}
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
					{showTheaterTable && (
						<div className='tables'>
							<MaterialTable
								title='THEATERS'
								columns={[
									{ title: "Theater Name", field: "name" },
									{ title: "City", field: "city" },
									{
										title: "Descriptions",
										field: "description",
									},
									{ title: "Pin Code", field: "pinCode" },
								]}
								actions={[
									{
										icon: AiFillEdit,
										tooltip: "Edit Theater",
										onClick: (event, rowData) => {
											// Edit Function
										},
									},
									{
										icon: AiFillDelete,
										tooltip: "Delete Theatre",
										onClick: (event, rowData) => {
											// Delete Function
										},
									},
								]}
								data={theatersData}
								options={options}
							/>
						</div>
					)}
					{showMoviesTable && (
						<div className='tables'>
							<MaterialTable
								title='MOVIES'
								columns={[
									{ title: "Movie Name", field: "name" },
									{ title: "Director", field: "director" },
									{
										title: "Release Date",
										field: "releaseDate",
									},
									{
										title: "Release Status",
										field: "releaseStatus",
									},
								]}
								data={moviesData}
								actions={[
									{
										icon: AiFillEdit,
										tooltip: "Edit Theater",
										onClick: (event, rowData) => {
											// Edit Function
										},
									},
									{
										icon: AiFillDelete,
										tooltip: "Delete Theatre",
										onClick: (event, rowData) => {
											// Delete Operation
										},
									},
								]}
								options={options}
							/>
						</div>
					)}
					{showUsersTable && (
						<div className='tables'>
							<MaterialTable
								title='USERS'
								columns={[
									{ title: "USER ID", field: "userId" },
									{ title: "Name", field: "name" },
									{ title: "Email", field: "email" },
									{ title: "Role", field: "userType" },
								]}
								data={usersData}
								actions={[
									{
										icon: AiFillEdit,
										tooltip: "Edit Theater",
										onClick: (event, rowData) => {
											// Edit Function
										},
									},
									{
										icon: AiFillDelete,
										tooltip: "Delete Theatre",
										onClick: (event, rowData) => {
											// Delete Function
										},
									},
								]}
								options={options}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Admin;
