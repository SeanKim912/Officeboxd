import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password));
			if (data) {
				setErrors(data);
			} else {
				history.push('/create-profile')
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		<div className="signup-form-container">
			<h2 className="signup-form-header">Sign Up</h2>
			<form className="signup-form" onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<div className="entry-row">
					<label className="signup-form-field">Email</label>
					<input
						className="input-field"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="entry-row">
					<label className="signup-form-field">Username</label>
					<input
						className="input-field"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="entry-row">
					<label className="signup-form-field">Password</label>
					<input
						className="input-field"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className="entry-row">
					<label className="signup-form-field">Confirm Password</label>
					<input
						className="input-field"
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</div>
				<div className="profile-button-container">
					<button className="edit-profile-button" type="submit">SIGN UP</button>
				</div>
			</form>
		</div>
	);
}

export default SignupFormModal;
