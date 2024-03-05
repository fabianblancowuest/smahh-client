import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { getTicketDetail } from "../../redux/actions/actions";
import styles from "./Detail.module.css";
import TicketResponseForm from "../TicketResponseForm/TicketResponseForm";

const DetailTicket = () => {
	const userType = useSelector((state) => state.userType);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTicketDetail(id));
	}, [id]);

	const ticketDetail = useSelector((state) => state.ticketDetail);

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
		userLastName
	} = ticketDetail;

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
		<div className={styles.container}>
			<div className={styles.ticketContainer}>
				<h2 className={styles.title}>Ticket Detail</h2>
				<main className={styles.main}>
					<section>
						<div className={styles.info}>
							<p className={styles.heading}>User Name:</p>
							<p>{userName} {userLastName}</p>
						</div>

						<div className={styles.info}>
							<p className={styles.heading}>User Email:</p>
							<p>{userEmail} </p>
						</div>

						<div className={styles.info}>
							<p className={styles.heading}>Ticket Id:</p>
							<p>{id}</p>
						</div>

						<div className={styles.info}>
							<p className={styles.heading}>Type:</p>
							<p>{issueType}</p>
						</div>
					</section>
					<section>
						<div className={styles.info}>
							<p className={styles.heading}>Status:</p>
							<p>{status}</p>
						</div>
						<div className={styles.info}>
							<p className={styles.heading}>Priority:</p>
							<p>{priority}</p>
						</div>
						<div className={styles.info}>
							<p className={styles.heading}>Created At:</p>
							<p>{createdAt && formatDate(createdAt)}</p>
						</div>

						<div className={styles.info}>
							<p className={styles.heading}>Updated At:</p>
							<p>{updatedAt && formatDate(updatedAt)}</p>
						</div>
					</section>
				</main>
				<div className={styles.title}>
					<p className={styles.heading}>Subject:</p>
					<p className={styles.info}>{issueTitle}</p>
				</div>
				<div className={styles.title}>
					<p className={styles.heading}>Description:</p>
					<p className={styles.info}>{issueDescription}</p>
				</div>
			</div>
			{userType == "staff" && <TicketResponseForm ticketData={ticketDetail} />}
		</div>
	);
};

export default DetailTicket;
