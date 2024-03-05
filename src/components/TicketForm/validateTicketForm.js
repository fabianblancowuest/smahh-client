const validateTicketForm = (newTicket) => {
	let errors = {};

	if (newTicket.issueTitle.length > 50) {
		errors.issueTitle = "Subject cannot exceed 50 characters";
	}

	if (newTicket.issueDescription.length > 255) {
		errors.issueDescription = "Description cannot exceed 255 characters";
	}

	return errors;
};

export default validateTicketForm;
