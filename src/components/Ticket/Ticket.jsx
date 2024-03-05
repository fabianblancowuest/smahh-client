import styles from "./Ticket.module.css";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Ticket = ({ ticket }) => {
	const {
		issueDescription,
		issueType,
		priority,
		issueTitle,
		status,
		createdAt,
		id,
		userName,
	} = ticket;

	const statusClass =
		status === "Not Started"
			? styles.notStarted
			: status === "In Progress"
			? styles.inProgress
			: status === "Completed"
			? styles.completed
			: styles.closed;

	const formatDate = (stringDate) => {
		const date = new Date(stringDate);
		return format(date, "MMMM dd, yyyy HH:mm:ss");
	};

	return (
		<div className={`${styles.card}  ${statusClass}`}>
			<div className={styles.cardContent}>
				<div className={styles.column}>
					<h3 className={styles.status}>Status:</h3>
					<span>{status}</span>
				</div>
				<div className={styles.column}>
					<h3 className={styles.priority}>Priority: </h3>
					<span>{priority}</span>
				</div>
				<div className={styles.column}>
					<h3 className={styles.type}>Type: </h3>
					<span>{issueType}</span>
				</div>
				<div className={styles.column}>
					<h3 className={styles.type}>Date:</h3>
					<span>{createdAt && formatDate(createdAt)}</span>
				</div>
				<div className={styles.column}>
					<Link to={`/detail/${id}`}>
						<button className={styles.detailButton}>Detail</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Ticket;
