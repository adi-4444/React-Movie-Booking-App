import React, { useEffect, useState } from "react";
import Navbar from "../LandingPage/Navbar/Navbar";
import "./Admin.css";
import { CCol, CRow, CWidgetStatsC } from "@coreui/react";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { getTheaters, removeTheater } from "../../common/apis/Theaters";
import { getMovies, removeMovie } from "../../common/apis/Movies";
import { getUsers } from "../../common/apis/Users";

const Admin = () => {
	const [counterInfo, setCounterInfo] = useState({});

	const [theatersData, setTheatersData] = useState([]);
	const [moviesData, setMoviesData] = useState([]);
	const [usersData, setUsersData] = useState([]);

	const [showTheaterTable, setShowTheaterTable] = useState(true);
	const [showMoviesTable, setShowMoviesTable] = useState(false);
	const [showUsersTable, setShowUsersTable] = useState(false);

	const fetchTheatersData = async () => {
		const theatersData = await getTheaters();
		const theaters = theatersData.data;
		setTheatersData(theaters);
		counterInfo.theaters = theaters?.length;
		setCounterInfo(counterInfo);
	};

	const fetchMoviesData = async () => {
		const datafromAPI = await getMovies();
		const moviesData = datafromAPI.data;
		setMoviesData(moviesData);
		counterInfo.movies = moviesData?.length;
		setCounterInfo(counterInfo);
	};

	const fetchUsersData = async () => {
		const datafromAPI = await getUsers();
		const users = datafromAPI.data;
		setUsersData(users);
		counterInfo.users = users?.length;
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
	const deleteMovie = async (movie) => {
		await removeMovie(movie);
		fetchMoviesData();
	};
	const deleteTheater = async (theater) => {
		await removeTheater(theater);
		fetchTheatersData();
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
								getRowId={(row) => row._id}
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
											deleteTheater(rowData);
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
								getRowId={(row) => row._id}
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
											//Edit
										},
									},
									{
										icon: AiFillDelete,
										tooltip: "Delete Theatre",
										onClick: (event, rowData) => {
											deleteMovie(rowData);
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
								getRowId={(row) => row._id}
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
