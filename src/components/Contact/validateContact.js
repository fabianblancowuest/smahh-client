const validateContact = (inputs) => {
	let errors = {};

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const nzPhoneNumberRegex = /^(?:\+?64|0)[1-9]\d{7,9}$/;

	if (!emailRegex.test(inputs.email)) {
		errors.email = "The email format is not valid";
	}

	if (inputs.service.trim() === "") {
		errors.service = "Subject is required";
	}

	if (inputs.message.trim() === "") {
		errors.message = "Message is required";
	}

	if (!nzPhoneNumberRegex.test(inputs.phoneNumber)) {
		errors.phoneNumber =
			"The phone number format is not valid (e.g., +64xxxxxxxxx or 0xxxxxxxxx)";
	}

	return errors;
};

export default validateContact;
