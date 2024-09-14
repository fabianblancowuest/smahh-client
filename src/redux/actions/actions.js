import {
	SIGN_UP,
	LOG_IN,
	LOG_OUT,
	RISE_TICKET,
	GET_ALL_TICKETS,
	GET_USER_TICKETS,
	UPDATE_TICKET,
	GET_TICKET_DETAIL,
	SEARCH_BY_ID,
	SEARCH_BY_NAME,
	UPDATE_USER,
	GET_ALL_AND_SEARCH_TICKETS,
} from "./types";
import axios from "axios";

const ipDirection = "192.168.0.32";
const baseURL = "https://smahh-server.onrender.com";

// COMMON

export const signUp = (userData) => async (dispatch) => {
	const URL = `http://${ipDirection}:3001/user/register`;
	// const URL = `${baseURL}/user/register`;

	try {
		const { data } = await axios.post(URL, userData);

		dispatch({
			type: SIGN_UP,
		});

		return data;
	} catch (error) {
		throw error;
	}
};

export const logIn = (userData) => async (dispatch) => {
	const URL = `http://${ipDirection}:3001/login`;
	// const URL = `${baseURL}/login`;

	try {
		const { data } = await axios.post(URL, userData);
		dispatch({
			type: LOG_IN,
			payload: data,
		});

		return data;
	} catch (error) {
		throw error;
	}
};

// USER

export const riseTicket =
	(newTicket, userId, userName, userLastName) => async (dispatch) => {
		const URL = `http://${ipDirection}:3001/user/ticket`;
		// const URL = `${baseURL}/user/ticket`;

		newTicket.userId = userId;
		newTicket.userName = userName;
		newTicket.userLastName = userLastName;

		try {
			const { data } = await axios.post(URL, newTicket);
			dispatch({
				type: RISE_TICKET,
				payload: data,
			});

			return data;
		} catch (error) {
			throw error;
		}
	};

export const updateUser = (userId, formData) => async (dispatch) => {
	const URL = `http://${ipDirection}:3001/user/updateUser/${userId}`;
	// const URL = `${baseURL}/user/updateUser/${userId}`;

	try {
		const { data } = await axios.put(URL, formData);

		dispatch({
			type: UPDATE_USER,
			payload: data,
		});

		return data; // Devuelve la respuesta del servidor en caso de éxito
	} catch (error) {
		throw error; // Lanza el error en caso de fallo
	}
};

export const getUserTickets =
	(userId, priority, status, order) => async (dispatch) => {
		const URL = `http://${ipDirection}:3001/user/tickets/${userId}?priority=${priority}&status=${status}&order=${order}`;
		// const URL = `${baseURL}/user/tickets/${userId}?priority=${priority}&status=${status}&order=${order}`;

		try {
			const { data } = await axios.get(URL); //

			dispatch({
				type: GET_USER_TICKETS,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

// STAFF

export const getAllAndSearchTickets = (
	search,
	page,
	perPage,
	priority,
	status,
	order,
) => {
	const URL = `http://${ipDirection}:3001/staff/tickets?search=${search}&page=${page}&perPage=${perPage}&priority=${priority}&status=${status}&order=${order}`;
	// const URL = `${baseURL}/staff/tickets?search=${search}&page=${page}&perPage=${perPage}&priority=${priority}&status=${status}&order=${order}`;

	return async (dispatch) => {
		try {
			const { data } = await axios.get(URL);

			dispatch({
				type: GET_ALL_AND_SEARCH_TICKETS,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateTicket =
	(ticketId, newStatus) => async (dispatch, getState) => {
		const URL = `http://${ipDirection}:3001/staff/update-ticket`;
		// const URL = `${baseURL}/staff/update-ticket`;

		try {
			const { data } = await axios.put(URL, { ticketId, newStatus });
			const { userTickets } = getState();
			const updatedUserTickets = userTickets.map((ticket) =>
				ticket.id === ticketId ? data.updatedTicket : ticket,
			);
			dispatch({
				type: UPDATE_TICKET,
				payload: updatedUserTickets,
			});
		} catch (error) {
			alert(error);
		}
	};

// USER- STAFF

export const getTicketDetail = (id) => {
	const URL = `http://${ipDirection}:3001/user/ticket-detail/`;
	// const URL = `${baseURL}/user/ticket-detail/`;

	return async (dispatch) => {
		try {
			const { data } = await axios.get(URL + Number(id));

			dispatch({
				type: GET_TICKET_DETAIL,
				payload: data,
			});
		} catch (error) {
			alert(error.response.data.error);
		}
	};
};

export const logOut = (out) => {
	return {
		type: LOG_OUT,
		payload: out,
	};
};
