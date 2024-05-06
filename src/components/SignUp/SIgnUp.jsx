import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions/actions";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validateSignUp from "./validateSignUp";
import Swal from "sweetalert2";
import {
	FaShieldAlt,
	FaUser,
	FaPhone,
	FaEnvelope,
	FaComment,
	FaAt,
	FaLock,
} from "react-icons/fa";

const SignUp = () => {
	const initialState = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		phoneNumber: "",
		userType: "user",
	};

	const [userData, setUserData] = useState(initialState);
	const [errors, setErrors] = useState({});

	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const message = (
		<div className={styles.messageOk}>
			<span>You have signed up succesfully.✔️</span>
			<span>A confirmation email will be sent to you.</span>
		</div>
	);

	const isButtonDisabled =
		Object.values(userData).some((value) => !value) ||
		Object.values(errors).some((error) => error);

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (errorMessage) {
			setErrorMessage("");
		}

		setUserData({
			...userData,
			[name]: value,
		});

		setErrors(
			validateSignUp({
				...userData,
				[name]: value,
			}),
		);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formErrors = errors;

		if (Object.keys(formErrors).length === 0) {
			try {
				dispatch(signUp(userData));
				setSuccessMessage(message);
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Registered user successfully",
					showConfirmButton: false,
					timer: 3000,
				});
				let timerInterval;
				setTimeout(() => {
					Swal.fire({
						title: "User created successfully",
						html: "You will be directed to login in 3 seconds.",
						timer: 3000,
						timerProgressBar: true,
						didOpen: () => {
							Swal.showLoading();
							const b = Swal.getHtmlContainer().querySelector("b");
							timerInterval = setInterval(() => {
								b.textContent = Swal.getTimerLeft();
							}, 3000);
						},
						willClose: () => {
							clearInterval(timerInterval);
						},
					}).then((result) => {
						/* Read more about handling dismissals below */
						if (result.dismiss === Swal.DismissReason.timer) {
							console.log("I was closed by the timer");
						}
					});
				}, 1000);

				setTimeout(() => {
					navigate("/login");
				}, 3500);
				setUserData(initialState);
				setErrorMessage("");
			} catch (error) {
				setSuccessMessage("");
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: error.response.data.error,
					// footer: '<a href="">Why do I have this issue?</a>',
				});
				setUserData(initialState);
				// setErrorMessage(error.response.data.error);
			}
		}
	};

	const handleNavigate = () => {
		navigate("/login");
	};

	const closePopUp = () => {
		setShowPopUp(false);
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Sign Up</h3>

			<form className={styles.form} onSubmit={handleSubmit}>
				{/* First Name */}
				<label className={styles.label}>
					<FaUser />
					First Name
				</label>
				<input
					className={styles.input}
					name="firstName"
					type="text"
					placeholder="Enter your first name"
					value={userData.firstName}
					onChange={handleChange}
				/>
				{errors.firstName && (
					<p className={styles.errors}>{errors.firstName}</p>
				)}

				{/* Last Name */}
				<label className={styles.label}>
					<FaUser />
					Last Name
				</label>
				<input
					className={styles.input}
					name="lastName"
					type="text"
					placeholder="Enter your last name"
					value={userData.lastName}
					onChange={handleChange}
				/>
				{errors.lastName && <p className={styles.errors}>{errors.lastName}</p>}

				{/* Phone Number */}
				<label className={styles.label} htmlFor="phoneNumber">
					<FaPhone /> Phone Number:
				</label>
				<input
					className={styles.input}
					type="tel"
					name="phoneNumber"
					id="phoneNumber"
					placeholder="Enter your phone number"
					value={userData.phoneNumber}
					onChange={handleChange}
				/>
				{errors.phoneNumber && (
					<p className={styles.errors}>{errors.phoneNumber}</p>
				)}

				{/* Email */}
				<label className={styles.label}>
					<FaAt /> Email
				</label>
				<input
					className={styles.input}
					type="email"
					name="email"
					placeholder="Enter your email"
					value={userData.email}
					onChange={handleChange}
				/>
				{errors.email && <p className={styles.errors}>{errors.email}</p>}

				{/* Password */}
				<label className={styles.label}>
					<FaLock /> Password
				</label>
				<input
					className={styles.input}
					name="password"
					type="password"
					placeholder="Enter your password"
					value={userData.password}
					onChange={handleChange}
				/>
				{errors.password && <p className={styles.errors}>{errors.password}</p>}

				{/* Confirm Password */}
				<label className={styles.label}>
					<FaLock /> Confirm Password
				</label>
				<input
					className={styles.input}
					name="confirmPassword"
					type="password"
					placeholder="Confirm your password"
					value={userData.confirmPassword}
					onChange={handleChange}
				/>
				{errors.confirmPassword && (
					<p className={styles.errors}>{errors.confirmPassword}</p>
				)}

				{/*Submit Button */}
				{!successMessage && (
					<input
						type="submit"
						value="Submit"
						className={`${styles.button} ${
							isButtonDisabled ? styles.disabledButton : ""
						}`}
						disabled={isButtonDisabled}
					/>
				)}
				{/* 
				{successMessage && (
					<p className={styles.successMessage}>{successMessage}</p>
				)}

				{successMessage && (
					<button onClick={handleNavigate} className={styles.button}>
						Go to Log In
					</button>
				)} */}

				{errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
			</form>
		</div>
	);
};

export default SignUp;
