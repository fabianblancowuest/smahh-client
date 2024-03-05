import React, { useState } from "react";
import "../Dashboard/CombinedStyles.css";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { updateTicket } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

const TicketStaff = ({ ticket }) => {
	const {
		issueType,
		priority,
		status,
		createdAt,
		updatedAt,
		id,
		userName,
		userLastName,
	} = ticket;

	const dispatch = useDispatch();

	const [selectedStatus, setSelectedStatus] = useState("");

	const handleStatusChange = (event) => {
		const newStatus = event.target.value;
		setSelectedStatus(newStatus);
	};

	const handleUpdate = () => {
		if (selectedStatus) {
			dispatch(updateTicket(id, selectedStatus));
		} else {
			alert("Please select a status before updating.");
		}
	};

	const formatDate = (stringDate) => {
		const date = new Date(stringDate);
		return format(date, "MMMM dd, yyyy HH:mm:ss");
	};

	return (
		<div className="ticket-father">
			<div className="ticket-container">
				<div className="ticket-item">
					{userName} {userLastName}
				</div>
				<div className="ticket-item">{id}</div>
				<div className="ticket-item">{issueType}</div>
				<div className="ticket-item">{priority}</div>
				<div className="ticket-item">{status}</div>
				<div className="ticket-item">
					<select value={selectedStatus} onChange={handleStatusChange}>
						<option value="" disabled hidden>
							Status
						</option>
						<option value="Not Started">Not Started</option>
						<option value="In Progress">In Progress</option>
						<option value="Completed">Completed</option>
						<option value="Closed">Closed</option>
					</select>
					<button onClick={handleUpdate}>UPDATE</button>
				</div>
				<div className="ticket-item">{formatDate(createdAt)}</div>
				<div className="ticket-item">{formatDate(updatedAt)}</div>

				<div className="ticket-item">
					<Link className="ticket-item-button" to={`/detail/${id}`}>
						Detail
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TicketStaff;
