import React, { useState } from "react";
import "./login.css";

const Login = () => {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");

	const SubmitHandler = (e) => {
		e.preventDefault();
		console.log({ userId, password });
	};
	return (
		<div>
			<form onSubmit={SubmitHandler} className='login-form'>
				<h1 className='heading'>Login</h1>
				<div className='col input-effect'>
					<input
						className='effect'
						type='text'
						placeholder=''
						value={userId}
						onChange={(e) => setUserId(e.target.value)}
					/>
					<label>User ID *</label>
					<span className='focus-border'></span>
				</div>
				<div className='col input-effect'>
					<input
						className='effect'
						type='password'
						placeholder=''
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<label>Password *</label>
					<span className='focus-border'></span>
				</div>
				<div>
					<input className='submitbtn' type='submit' />
				</div>
			</form>
		</div>
	);
};

export default Login;
