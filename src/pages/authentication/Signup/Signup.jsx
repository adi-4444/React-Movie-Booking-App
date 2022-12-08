import React, { useState, useEffect } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [userId, setUserId] = useState("");
	const [userType, setUserType] = useState("CUSTOMER");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");
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
		setName("");
		setEmail("");
		setUserId("");
		setUserType("CUSTOMER");
		setPassword("");
		setConfirmPassword("");
		setMessage("");
		setValidateMessage("");
	};
	const loginFunction = () => {
		clearStates();
	};
	const signupDataChangeHandler = (e) => {
		const name = e.target.name;
		if (name === "name") {
			setName(e.target.value);
		} else if (name === "email") {
			setEmail(e.target.value);
		} else if (name === "userId") {
			setUserId(e.target.value);
		} else if (name === "userType") {
			setUserType(e.target.value);
		} else if (name === "password") {
			setPassword(e.target.value);
		}
		setMessage("");
		setValidateMessage("");
	};
	const validateData = (data) => {
		if (data.userId.length < 5 || data.userId.length > 10) {
			setValidateMessage("UserID should be 5 to 10 characters");
			return false;
		}
		if (data.userId.includes(" ")) {
			setValidateMessage("UserID should not contain spaces");
			return false;
		}
		if (data.password.length < 6 || data.password.length > 10) {
			setValidateMessage("Password should be 6 to 10 characters");
			return false;
		}
		if (data.password.includes(" ")) {
			setValidateMessage("Password should not contain spaces");
			return false;
		}
		if (data.name.length < 5 || data.password.length > 10) {
			setValidateMessage("Username should be 5 to 10 characters");
			return false;
		}
		if (data.name.includes(" ")) {
			setValidateMessage("Username should not contain spaces");
			return false;
		}
		return true;
	};

	const signupHandler = (e) => {
		e.preventDefault();
		const data = { name, email, userId, userType, password };

		console.log("Signin Clicked entered data");

		if (!validateData(data)) {
			return;
		}
		// api call to Signup a new user
		console.log(data);
	};

	return (
		<div>
			<div className='signup_body'>
				<div className='signup_wrapper'>
					<div className='signup_form_group'>
						<h2>Signup</h2>

						<form onSubmit={signupHandler}>
							<div className='form_group'>
								<input
									type='text'
									className='form_control'
									name='name'
									placeholder='Name'
									autoFocus
									required
									value={name}
									onChange={signupDataChangeHandler}
								/>
								<label className='form_label'>Name *</label>
							</div>

							<div className='form_group'>
								<input
									type='text'
									className='form_control'
									name='email'
									placeholder='Email *'
									required
									value={email}
									onChange={signupDataChangeHandler}
								/>
								<label className='form_label'>Email *</label>
							</div>

							<div className='form_group'>
								<input
									type='text'
									className='form_control'
									name='userId'
									placeholder='userId *'
									required
									value={userId}
									onChange={signupDataChangeHandler}
								/>
								<label className='form_label'>User ID *</label>
							</div>

							<div className='user_type'>
								<label>Register as * </label>
								<select
									value={userType}
									name='userType'
									onChange={signupDataChangeHandler}
									required
								>
									<option value='CUSTOMER'>Customer</option>
									<option value='CLIENT'>Client</option>
								</select>
							</div>

							<div className='form_group'>
								<input
									type='password'
									className='form_control'
									name='password'
									placeholder='Password'
									required
									value={password}
									onChange={signupDataChangeHandler}
								/>
								<label className='form_label'>Password *</label>
							</div>

							<div className='form_group'>
								<input
									type='password'
									className='form_control'
									name='confirmpassword'
									placeholder='ConfirmPassword'
									required
									value={confirmpassword}
									onChange={(e) =>
										setConfirmPassword(e.target.value)
									}
								/>
								<label className='form_label'>
									Confirm Password *
								</label>
								{password && confirmpassword ? (
									password === confirmpassword ? (
										<p
											style={{
												color: "#1bab6e",
												fontSize: "12px",
												margin: "-7.5px 0px",
												padding: "0px",
												marginTop: "-15px",
											}}
										>
											* Password Matched
										</p>
									) : (
										<p
											style={{
												color: "red",
												fontSize: "12px",
												margin: "-7.5px 0px",
												padding: "0px",
												marginTop: "-15px",
											}}
										>
											* Password Not Matched
										</p>
									)
								) : (
									""
								)}
							</div>
							<div className='validate-msg'>
								{validateMessage}
							</div>
							<div className='normal-msg'>{message}</div>
							<div className='signup_btn'>
								<input
									type='submit'
									value='Signup'
									className='submit_btn'
								/>
								<p>
									Already have an account ?{" "}
									<a href='/login' onClick={loginFunction}>
										Login
									</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
