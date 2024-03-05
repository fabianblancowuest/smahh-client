import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAndSearchTickets } from "../../redux/actions/actions"; // Importa tus acciones adecuadas
import "./CombinedStyles.css";
import TicketStaff from "../TicketStaff/TicketStaff";
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "./Pagination";

const Dashboard = () => {
	const userTickets = useSelector((state) => state.userTickets);
	const totalTickets = useSelector((state) => state.totalTickets);
	const totalPages = useSelector((state) => state.totalPages);
	const prevPage = useSelector((state) => state.prev);
	const nextPage = useSelector((state) => state.next);

	const [filtersKey, setFiltersKey] = useState(0);
	const [priority, setPriority] = useState("All");
	const [status, setStatus] = useState("All");
	const [order, setOrder] = useState("Asc");
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");
	const [perPage, setPerPage] = useState(10);

	const dispatch = useDispatch();

	// Función genérica para realizar la búsqueda y paginación
	const performSearch = async () => {
		try {
			if (/^\d+$/.test(search)) {
				dispatch(
					getAllAndSearchTickets(search, page, perPage, priority, status, order)
				);
			} else if (search) {
				dispatch(
					getAllAndSearchTickets(search, page, perPage, priority, status, order)
				);
			} else {
				dispatch(
					getAllAndSearchTickets(search, page, perPage, priority, status, order)
				);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		performSearch();
	}, [search, priority, status, order, page, perPage, dispatch]);

	const handleRefresh = () => {
		setPriority("All");
		setStatus("All");
		setOrder("asc");
		setPage(1);
		setSearch("");
		setFiltersKey(filtersKey + 1);
	};

	const handlePreviousPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	const handleNextPage = () => {
		setPage(page + 1);
	};

	const handlePriorityChange = (e) => {
		if (page !== 1) {
			setPage(1);
		}
		setPriority(e.target.value);
	};

	const handleStatusChange = (e) => {
		if (page !== 1) {
			setPage(1);
		}
		setStatus(e.target.value);
	};

	const handleOrderChange = (e) => {
		if (page !== 1) {
			setPage(1);
		}
		setOrder(e.target.value);
	};

	const handleSearchChange = (newSearch) => {
		setPage(1);
		setSearch(newSearch);
	};

	return (
		<div className="dashboard-container">
			<div className="tile-searchBar-container">
				<h1 className="dashboard-title">Ticket Dashboard</h1>
				<SearchBar
					page={page}
					priority={priority}
					status={status}
					order={order}
					key={filtersKey}
					onSearchChange={handleSearchChange}
				/>
			</div>

			<Filters
				handlePriority={handlePriorityChange}
				handleStatus={handleStatusChange}
				handleOrder={handleOrderChange}
				handleRefresh={handleRefresh}
				key={filtersKey}
			/>

			<div className="dashboard-header">
				<div>User Name</div>
				<div>Ticket Id</div>
				<div>Issue Type</div>
				<div>Priority</div>
				<div>Status</div>
				<div>Update Status</div>
				<div>Created At</div>
				<div>Updated At</div>
				<div>Detail </div>
			</div>

			<div>
				{userTickets?.length > 0 ? (
					userTickets.map((ticket) => (
						<TicketStaff key={ticket.id} ticket={ticket} />
					))
				) : (
					<p className="span-item">No tickets where found</p>
				)}
			</div>

			<div className="pages-container">
				{prevPage && (
					<button className="prev-next-button" onClick={handlePreviousPage}>
						Previous
					</button>
				)}
				<Pagination
					totalPages={totalPages}
					currentPage={page}
					onPageChange={(newPage) => setPage(newPage)}
				/>
				{nextPage && (
					<button className="prev-next-button" onClick={handleNextPage}>
						Next
					</button>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
