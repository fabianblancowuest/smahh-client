import styles from "./Filters.module.css";

const Filters = ({
	handlePriority,
	handleStatus,
	handleOrder,
	handleRefresh,
}) => {
	return (
		<div className={styles.container}>
			<select className={styles.select} onChange={handleStatus}>
				<option value="All">All Status</option>
				<option value="Not Started">Not Started</option>
				<option value="In Progress">In Progress</option>
				<option value="Completed">Completed</option>
				<option value="Closed">Closed</option>
			</select>

			<select className={styles.select} onChange={handlePriority}>
				<option value="All">All Priorities</option>
				<option value="High">High</option>
				<option value="Medium">Medium</option>
				<option value="Low">Low</option>
			</select>

			<select className={styles.select} onChange={handleOrder}>
				<option value="asc">Last</option>
				<option value="desc">Recent</option>
			</select>

			<button onClick={handleRefresh} className="buttonRefresh">
				Refresh
			</button>
		</div>
	);
};

export default Filters;
