const validateSignUp = (data) => {
	let errors = {};

	const phoneNumberRegex =
		/^(?:\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

	if (!data.firstName.trim()) {
		errors.firstName = "First Name is required";
	}

	if (!data.lastName.trim()) {
		errors.lastName = "Last Name is required";
	}

	if (!phoneNumberRegex.test(data.phoneNumber)) {
		errors.phoneNumber =
			"The phone number format is not valid (e.g., +1 (555) 555-5555";
	}

	if (!data.email.trim()) {
		errors.email = "Email is required";
	} else if (
		!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)
	) {
		errors.email = "Invalid email format";
	}

	if (!data.password.trim()) {
		errors.password = "Password is required";
	} else if (!/^(?=.*\d).{6,}$/.test(data.password)) {
		errors.password =
			"Password must contain at least one digit and be 6 characters or longer";
	}

	if (data.password !== data.confirmPassword) {
		errors.confirmPassword = "Passwords do not match";
	}

	return errors;
};

export default validateSignUp;
