import { useState, useRef } from "react";
import styles from "./Contact.module.css";
import validateContact from "./validateContact"; // Import your validation function
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FaShieldAlt, FaUser, FaPhone, FaEnvelope, FaComment, FaAt} from "react-icons/fa"; // Importa los iconos de FontAwesome

const Contact = () => {
	const initialState = {
		name: "",
		email: "",
		service: "",
		message: "",
		phoneNumber: "",
	};
	const [contactData, setContactData] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [successMessage, setSuccessMessage] = useState("")

	const form = useRef();


	const message = (
		<>
			Your message has been received! ✔️<br />
			We will get back to you as soon as possible.
		</>
	);

	const navigate = useNavigate();

	const isButtonDisabled =
		Object.values(contactData).some((value) => !value) ||
		Object.values(errors).some((error) => error);

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (successMessage) {
			setSuccessMessage("")
		}

		setContactData({
			...contactData,
			[name]: value,
		});

		setErrors(
			validateContact({
				...contactData,
				[name]: value,
			}),
		);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_beowxyr",
				"template_kq5tt6g",
				form.current,
				"Kcc3NYDpXQNi9jixp",
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

		const existError = Object.keys(errors);

		if (!existError.length) {
			setContactData(initialState);
			setSuccessMessage(message)

		}
		sendEmail(event);
	};

	const handleStay = () => {
		setSuccessMessage("");
		const firstInputField = form.current.querySelector('input[name="name"]');
		if (firstInputField) {
			firstInputField.focus();
		}
	};

	const handleExplore = () => {
		navigate("/services");
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Contact Us</h3>
			<form ref={form} className={styles.form} onSubmit={handleSubmit}>
				
				{/* Name */}
				<label className={styles.label} htmlFor="name">
				<FaUser/> Name:
				</label>
				<input
					className={styles.input}
					type="text"
					name="name"
					id="name"
					placeholder="Name"
					value={contactData.name}
					onChange={handleChange}
					required
				/>
				{errors.name && <p className={styles.errors}>{errors.name}</p>}

				{/* Email */}
				<label className={styles.label} htmlFor="email">
					<FaAt/> Email:
				</label>
				<input
					className={styles.input}
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					value={contactData.email}
					onChange={handleChange}
					required
				/>
				{errors.email && <p className={styles.errors}>{errors.email}</p>}

				{/* Phone Number */}
				<label className={styles.label} htmlFor="phoneNumber">
				<FaPhone/> Phone Number:
				</label>
				<input
					className={styles.input}
					type="text"
					name="phoneNumber"
					id="phoneNumber"
					placeholder="Phone number"
					value={contactData.phoneNumber}
					onChange={handleChange}
				/>
				{errors.phoneNumber && (
					<p className={styles.errors}>{errors.phoneNumber}</p>
				)}

				{/* Subject */}
				<label className={styles.label} htmlFor="service">
				<FaShieldAlt/> Select a Service:
				</label>
				<select
					className={styles.select}
					type="text"
					name="service"
					placeholder="Service needed..."
					value={contactData.service}
					onChange={handleChange}
					required
				>
					<option value="">Choose a Service</option>
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
					<option value="Vulnerability Testing">
						Vulnerability Testing
					</option>

					<option value="Others">
						Others
					</option>
				</select>

				{/* Message */}
				<label className={styles.label} htmlFor="message">
					<FaComment/>Message:
				</label>
				<textarea
					className={styles.textarea}
					name="message"
					id="message"
					placeholder="Please enter your message here. We're happy to assist you and will respond as soon as possible."
					value={contactData.message}
					onChange={handleChange}
					required
				></textarea>
				{errors.message && <p className={styles.errors}>{errors.message}</p>}

				{/* Submit Button */}
				{!successMessage && (
					<button
						className={`${styles.button} ${isButtonDisabled ? styles.disabledButton : ""}`}
						type="submit"
						disabled={isButtonDisabled}
					>
						<FaEnvelope/> Send Message
					</button>
				)}


				{/* Messges */}

				{successMessage && <p>{successMessage}</p>}


				{/* Conditional Navigators */}
				{successMessage && (
					<button
						className={styles.button}
						onClick={handleStay}
					>
						Request Another Consultation
					</button>
				)}

				{successMessage && (
					<button
						className={styles.button}
						onClick={handleExplore}
					>
						Explore More Services
					</button>
				)}

			</form>
		</div>
	);
};

export default Contact;
