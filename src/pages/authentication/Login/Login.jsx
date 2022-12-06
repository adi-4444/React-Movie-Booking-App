import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const loginHandler = (e) => {
		e.preventDefault();
		console.log({ email, password });
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
								value={email}
								onChange={(e) => setEmail(e.target.value)}
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

						<div className='login-btn'>
							<input type='submit' value='Login' />
							<p>
								Don't have an account ?{" "}
								<Link to='/Signup'>Signup</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
