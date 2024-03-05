

const validateProfile = (inputs) => {
	let errors = {};

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const nzPhoneNumberRegex = /^(?:\+?64|0)[1-9]\d{7,9}$/;

	if (!emailRegex.test(inputs.email)) {
		errors.email = "The email format is not valid";
	}

	if (!nzPhoneNumberRegex.test(inputs.phoneNumber)) {
		errors.phoneNumber =
			"The phone number format is not valid (e.g., +64xxxxxxxxx or 0xxxxxxxxx)";
	}

    if (!inputs.password) {
        errors.password = "Password is required";
      } else if (!/^(?=.*\d).{6,}$/.test(inputs.password)) {
        errors.password = "The new password must contain at least one digit and be 6 characters or longer";
      }

    if (inputs.password !== inputs.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }

	return errors;
};

export default validateProfile;