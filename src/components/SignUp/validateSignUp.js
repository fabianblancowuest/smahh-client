const validateSignUp = (data) => {
    let errors = {};

    const nzPhoneNumberRegex = /^(?:\+?64|0)[1-9]\d{7,9}$/;

    if (!data.firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    if (!nzPhoneNumberRegex.test(data.phoneNumber)) {
      errors.phoneNumber = "The phone number format is not valid (e.g., +64xxxxxxxxx or 0xxxxxxxxx)";
      }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
      errors.email = "Invalid email format";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (!/^(?=.*\d).{6,}$/.test(data.password)) {
      errors.password = "Password must contain at least one digit and be 6 characters or longer";
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  export default validateSignUp