import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./TicketResponseForm.module.css";

const TicketResponseForm = ({ ticketData }) => {
	const {
		issueDescription,
		issueType,
		priority,
		issueTitle,
		status,
		createdAt,
		updatedAt,
		userName,
		userEmail,
	} = ticketData;

	const [response, setResponse] = useState({
		userName: userName,
		userEmail: userEmail,
		subject: "",
		messageBody: "",
	});

	const form = useRef();

	const handleChange = (event) => {
		const { name, value } = event.target;

		setResponse({
			...response,
			[name]: value,
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_beowxyr", // Service ID
				"template_elozfhu", // Template ID
				form.current,
				"Kcc3NYDpXQNi9jixp", // Your Public Key
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		sendEmail(event);

		setResponse({
			subject: "",
			messageBody: "",
		});
	};

	return (
		<div className={styles.formBackground}>
			<h3 className={styles.title}>Response to User</h3>
			<form ref={form} className={styles.formContainer} onSubmit={handleSubmit}>
				{/* <div> */}
				<label htmlFor="subject" className={styles.formLabels}>
					Subject:
				</label>
				<input
					id="subject"
					name="subject"
					value={response.subject}
					onChange={handleChange}
					required
					className={styles.formInputs}
					placeholder="Subject..."
				></input>
				{/* </div> */}
				{/* <div> */}
				<label htmlFor="messageBody" className={styles.formLabels}>
					Response:
				</label>
				<textarea
					id="messageBody"
					name="messageBody"
					value={response.messageBody}
					onChange={handleChange}
					required
					className={styles.textarea}
					placeholder="Send response to user..."
				></textarea>
				<label>Response to:</label>
				<span
					name="userEmail"
					id="userEmail"
				>
					{userEmail}
				</span>
				{/* </div> */}

				<div>
					<button type="submit" className={styles.formButton}>
						Send Response
					</button>
				</div>
			</form>
		</div>
	);
};

export default TicketResponseForm;
