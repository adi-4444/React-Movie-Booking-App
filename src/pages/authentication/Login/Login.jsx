import React, { useState, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [validateMessage, setValidateMessage] = useState("");
	const navigate = useNavigate();

	const redirectUrl = () => {
		navigate("/");
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
		setValidateMessage("");
	};
	const signupFunction = () => {
		clearStates();
	};
	const validateData = (data) => {
		if (data.userId.length < 5 || data.userId.length > 10) {
			setValidateMessage("UserID will be 5 to 10 characters");
			return false;
		}
		if (data.userId.includes(" ")) {
			setValidateMessage("UserID will not contain spaces");
			return false;
		}
		if (data.password.length < 6 || data.password.length > 10) {
			setValidateMessage("Password will be 6 to 10 characters");
			return false;
		}
		if (data.password.includes(" ")) {
			setValidateMessage("Password will not contain spaces");
			return false;
		}
		return true;
	};

	const loginHandler = (e) => {
		e.preventDefault();
		const data = { userId, password };
		console.log("Signin Clicked entered data" + data);

		if (!validateData(data)) {
			return;
		}
	};
	return (
		<div className='login-body'>
			<h1>Welcome</h1>
			<div className='login-wrapper'>
				<div className='login-form-group'>
					<h2>Login</h2>
					<form onSubmit={loginHandler}>
						<div className='form-group'>
							<input
								type='email'
								className='form-control'
								name='email *'
								placeholder='Email'
								autoFocus
								required
								value={userId}
								onChange={(e) => setUserId(e.target.value)}
							/>
							<label className='form-label'>Email *</label>
						</div>

						<div className='form-group'>
							<input
								type='password'
								className='form-control'
								name='password'
								placeholder='Password'
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<label className='form-label'>Password *</label>
						</div>
						<div className='validate-msg'>{validateMessage}</div>
						<div className='normal-msg'>{message}</div>
						<div className='login-btn'>
							<input type='submit' value='Login' />
							<p>
								Don't have an account ?{" "}
								<Link to='/Signup' onClick={signupFunction}>
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
