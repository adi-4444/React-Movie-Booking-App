import React, { useState, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../apis";
import { saveUserInfo } from "../../../common/utils/helper";

function Login() {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	const redirectUrl = () => {
		const userType = localStorage.getItem("userType");
		if (!userType) {
			setErrorMessage("something went wrong");
			return;
		}
		if (userType === "CUSTOMER") {
			navigate("/");
		} else if (userType === "CLIENT") {
			navigate("/client");
		} else {
			navigate("/admin");
		}
	};
	useEffect(() => {
		if (localStorage.getItem("token")) {
			redirectUrl();
		}
		// eslint-disable-next-line
	}, []);
	const clearStates = () => {
		setUserId("");
		setPassword("");
		setMessage("");
		setErrorMessage("");
	};
	const loginDataChangeHandler = (e) => {
		const name = e.target.name;
		if (name === "userId") {
			setUserId(e.target.value);
		} else if (name === "password") {
			setPassword(e.target.value);
		}
		setMessage("");
		setErrorMessage("");
	};
	const signupFunction = () => {
		clearStates();
	};
	const validateData = (data) => {
		if (data.userId.length < 4 || data.userId.length > 15) {
			setErrorMessage("UserID will be 4 to 10 characters");
			return false;
		}
		if (data.userId.includes(" ")) {
			setErrorMessage("UserID will not contain spaces");
			return false;
		}
		if (data.password.length < 6) {
			setErrorMessage("Password will be more than 6 characters");
			return false;
		}
		if (data.password.includes(" ")) {
			setErrorMessage("Password will not contain spaces");
			return false;
		}
		return true;
	};

	const loginHandler = async (e) => {
		e.preventDefault();
		const data = { userId, password };

		if (!validateData(data)) {
			return;
		}
		console.log("Login Clicked");
		const result = await signIn(data);

		if (result.status === 200) {
			setMessage("Logged in successfully");
			saveUserInfo(result.data);
			redirectUrl();
		} else setErrorMessage(result.response.data.message);
	};
	return (
		<div className='login_body'>
			<h1>Welcome</h1>
			<div className='login_wrapper'>
				<div className='login_form_group'>
					<h2>Login</h2>
					<form onSubmit={loginHandler}>
						<div className='form_group'>
							<input
								type='text'
								className='form_control'
								name='userId'
								placeholder='userId'
								autoFocus
								required
								value={userId}
								onChange={loginDataChangeHandler}
							/>
							<label className='form_label'>User ID *</label>
						</div>

						<div className='form_group'>
							<input
								type='password'
								className='form_control'
								name='password'
								placeholder='Password'
								required
								value={password}
								onChange={loginDataChangeHandler}
							/>
							<label className='form_label'>Password *</label>
						</div>
						<div className='validate_msg'>{errorMessage}</div>
						<div className='normal_msg'>{message}</div>
						<div className='login_btn'>
							<input type='submit' value='Login' />
							<p>
								Don't have an account ?{" "}
								<Link to='/signup' onClick={signupFunction}>
									Signup
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
