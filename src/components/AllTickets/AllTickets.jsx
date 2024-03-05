import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ticket from "../Ticket/Ticket";
import styles from "./AllTickets.module.css";
import { getUserTickets } from "../../redux/actions/actions";
import Filters from "../Filters/Filters";

const AllTickets = () => {
	const userName = useSelector((state) => state.userName);
	const userId = useSelector((state) => state.userId);
	const userTickets = useSelector((state) => state.userTickets);

	const [priority, setPriority] = useState("All");
	const [status, setStatus] = useState("All");
	const [order, setOrder] = useState("Asc");


	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserTickets(userId, priority, status, order))
	}, [priority, status, order, dispatch]);

	const handleRefresh = () => {
		setPriority("All");
		setStatus("All");
		setOrder("asc");
		dispatch(getUserTickets(userId, priority, status, order));
	};

	const handlePriorityChange = (e) => {
		setPriority(e.target.value);
	};

	const handleStatusChange = (e) => {
		setStatus(e.target.value);
	};

	const handleOrderChange = (e) => {
		setOrder(e.target.value);
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Hi {userName}</h2>
			<div className={styles.filterContainer}>
				<Filters
					handlePriority={handlePriorityChange}
					handleStatus={handleStatusChange}
					handleOrder={handleOrderChange}
				/>
			</div>
			<div className={styles.spanContainer}>
				<button onClick={handleRefresh} className={styles.buttonRefresh}>
					Refresh status
				</button>
			</div>
			<section className={styles.ticketContainer}>
				{userTickets?.length > 0 ? (
					userTickets.map((ticket) => (
						<Ticket key={ticket.id} ticket={ticket} />
					))
				) : (
					<h2 className={styles.title}>No se encontraron tickets</h2>
				)}
			</section>
		</div>
	);
};

export default AllTickets;
