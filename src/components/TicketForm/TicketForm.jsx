import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { riseTicket } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import styles from "./TicketForm.module.css";
import validateTicketForm from "./validateTicketForm";
import Swal from "sweetalert2";
import {
	FaUser,
	FaEnvelope,
	FaExclamationCircle,
	FaComment,
	FaShieldAlt,
	FaTicketAlt,
} from "react-icons/fa";

const TicketForm = () => {
	const userId = useSelector((state) => state.userId);
	const userName = useSelector((state) => state.userName);
	const userEmail = useSelector((state) => state.userEmail);
	const userLastName = useSelector((state) => state.userLastName);

	const initialState = {
		issueTitle: "",
		issueDescription: "",
		issueType: "",
		priority: "",
	};

	const [newTicket, setNewTicket] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (userEmail) {
			setNewTicket({
				...newTicket,
				userEmail: userEmail,
			});
		}
	}, [userEmail]);

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (errorMessage || successMessage) {
			setErrorMessage("");
			setSuccessMessage("");
		}

		setNewTicket({
			...newTicket,
			[name]: value,
		});

		setErrors(
			validateTicketForm({
				...newTicket,
				[name]: value,
			}),
		);
	};

	const message = (
		<div className={styles.messageOk}>
			<span>You've raised a ticket ✔️</span>
			<span>A confirmation email will be sent to you.</span>
		</div>
	);

	const isButtonDisabled =
		Object.values(newTicket).some((value) => !value) ||
		Object.values(errors).some((error) => error);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			dispatch(riseTicket(newTicket, userId, userName, userLastName));
			setSuccessMessage(message);
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Ticket created successfully!",
				showConfirmButton: false,
				timer: 3000,
			});
			// Swal.fire({
			// 	title: "Ticket created successfully",
			// 	showClass: {
			// 		popup: "animate__animated animate__fadeInDown",
			// 	},
			// 	hideClass: {
			// 		popup: "animate__animated animate__fadeOutUp",
			// 	},
			// });
		} catch (error) {
			setNewTicket(initialState);
			setErrorMessage(error.response.data.error);
		}

		setNewTicket({
			issueTitle: "",
			issueDescription: "",
			issueType: "",
			priority: "",
			userEmail: newTicket.userEmail,
		});
	};

	const handleStay = () => {
		setSuccessMessage("");
	};

	const handleNavigate = () => {
		navigate("/tickets");
	};

	return (
		<div className={styles.formBackground}>
			<h3 className={styles.title}>Rise your Ticket</h3>

			<form className={styles.formContainer} onSubmit={handleSubmit}>
				<label className={styles.formLabels}>
					<FaShieldAlt /> Select a Service:{" "}
					{/* Icono para "Select a Service" */}
				</label>
				<select
					className={styles.select}
					type="text"
					name="issueType"
					placeholder="Service needed..."
					value={newTicket.issueType}
					onChange={handleChange}
					required
				>
					<option value="">Please select a Service</option>
					<option value="Cyber Security Consulting">
						Cyber Security Consulting
					</option>
					<option value="Compliance Security Program">
						Compliance Security Program
					</option>
					<option value="Cyber Awareness Education">
						Cyber Awareness Education
					</option>
					<option value="Cloud Access Security Broker (CASB)">
						Cloud Access Security Broker (CASB)
					</option>
					<option value="Digital Forensics & Dark Web">
						Digital Forensics & Dark Web
					</option>
					<option value="Data Loss Prevention (DLP)">
						Data Loss Prevention (DLP)
					</option>
					<option value="Incident Response & Ransom Payment">
						Incident Response & Ransom Payment
					</option>
					<option value="Managed Security Services">
						Managed Security Services
					</option>
					<option value="Managed Detection & Response (MDR)">
						Managed Detection & Response (MDR)
					</option>
					<option value="Penetration Testing">Penetration Testing</option>
					<option value="Security Assessment & Audit">
						Security Assessment & Audit
					</option>
					<option value="Security Operation Center (SOC)">
						Security Operation Center (SOC)
					</option>
					<option value="Vulnerability Testing">Vulnerability Testing</option>
					<option value="Others">Others</option>
					{/* <option value={navigate("/profile")}>Edit Profile</option> */}
				</select>

				<label className={styles.formLabels}>
					<FaExclamationCircle /> Select a Priority:{" "}
					{/* Icono para "Select a Priority" */}
				</label>
				<select
					className={styles.select}
					name="priority"
					value={newTicket.priority}
					onChange={handleChange}
					required
				>
					<option value="">Please select a Priority</option>
					<option value="High">High</option>
					<option value="Medium">Medium</option>
					<option value="Low">Low</option>
				</select>

				<label className={styles.formLabels}>
					<FaEnvelope /> Subject:
				</label>

				<textarea
					className={styles.textareaSubject}
					type="text"
					name="issueTitle"
					placeholder="Briefly describe your problem..."
					value={newTicket.issueTitle}
					onChange={handleChange}
					required
				/>
				{errors.issueTitle && (
					<p className={styles.errors}> {errors.issueTitle} </p>
				)}

				<label className={styles.formLabels}>
					<FaComment /> Description:
				</label>
				<textarea
					className={styles.textarea}
					id="description"
					name="issueDescription"
					placeholder="Describe your problem in detail..."
					value={newTicket.issueDescription}
					onChange={handleChange}
					required
				/>
				{errors.issueDescription && (
					<p className={styles.errors}> {errors.issueDescription} </p>
				)}

				{/*Submit Button */}

				{!successMessage && (
					<button
						className={`${styles.button} ${
							isButtonDisabled ? styles.disabledButton : ""
						}`}
						type="submit"
						disabled={isButtonDisabled}
					>
						<FaTicketAlt /> Rise Ticket
					</button>
				)}

				{/* Messages */}
				{successMessage && (
					<p className={styles.successMessage}>{successMessage}</p>
				)}

				{errorMessage && <p className={styles.errors}>{errorMessage}</p>}

				{/* Conditional Options To Navigate or Stay */}
				{successMessage && (
					<div className={styles.successButtons}>
						<button className={styles.button} onClick={handleStay}>
							Request Another Ticket
						</button>
						<button className={styles.button} onClick={handleNavigate}>
							Go To My Tickets
						</button>
					</div>
				)}

				{/* {successMessage && (
				)} */}
			</form>
		</div>
	);
};

export default TicketForm;
