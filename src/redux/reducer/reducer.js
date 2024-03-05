import {
    GET_ALL_AND_SEARCH_TICKETS,
    GET_ALL_TICKETS,
    GET_TICKET_DETAIL,
    GET_USER_TICKETS,
    LOG_IN, LOG_OUT,
    RISE_TICKET,
    SEARCH_BY_ID,
    SEARCH_BY_NAME,
    SIGN_UP,
    UPDATE_TICKET,
    UPDATE_USER
} from "../actions/types"

const inicialState = {
    access: false,
    userId: null,
    userType: null,
    userName: null,
    userLastName: null,
    userEmail: null,
    userPhone: null,

    userTickets: [],
    userTicketsCopy: [],

    totalTickets: null,
    totalPages: null,
    prev: null,
    next: null,

    ticketDetail: {}

}

const rootReducer = (state = inicialState, actions) => {

    const { type, payload } = actions

    switch (type) {

        case SIGN_UP:
            return {
                ...state,

            }

        case LOG_IN:
            return {
                ...state,
                access: payload.access,
                userType: payload.userType,
                userId: payload.userId,
                userName: payload.userName,
                userLastName: payload.userLastName,
                userEmail: payload.userEmail,
                userPhone: payload.userPhone
            }

        case LOG_OUT:
            return {
                ...state,
                access: false,
                userId: null,
                userType: null,
                userName: null,
                userLastName: null,
                userEmail: null,
                userPhone: null,

                userTickets: [],
                userTicketsCopy: [],
                ticketDetail: {}
            }

        case UPDATE_USER:
            return {
                ...state,
                userName: payload.newUser.firstName,
                userLastName: payload.newUser.lastName,
                userEmail: payload.newUser.email,
                userPhone: payload.newUser.phone
            }

        case RISE_TICKET:
            return {
                ...state,
                userTickets: [...state.userTickets, payload.ticket],
                userTicketsCopy: [...state.userTickets, payload.ticket]
            }

        case GET_USER_TICKETS:
            return {
                ...state,
                userTickets: [...payload.tickets.rows],
                userTicketsCopy: [...payload.tickets.rows]
            }

        case GET_ALL_AND_SEARCH_TICKETS: {

            return {
                ...state,
                userTickets: [...payload.tickets],
                userTicketsCopy: [...payload.tickets],
                totalTickets: payload.totalTickets,
                totalPages: payload.totalPages,
                prev: payload.prev,
                next: payload.next,
            }
        }

        case UPDATE_TICKET:

            return {
                ...state,
                userTickets: payload,
                userTicketsCopy: payload
            }

        case GET_TICKET_DETAIL:
            return {
                ...state,
                ticketDetail: { ...payload.ticket }
            }

        // case SEARCH_BY_ID: {

        //     return {
        //         ...state,
        //         userTickets: payload.ticket,
        //         userTicketsCopy: payload.ticket,
        //         totalTickets: null,
        //         totalPages: null,
        //         prev: null,
        //         next: null,
        //     };


        // }

        // case SEARCH_BY_NAME: {

        //     return {
        //         ...state,
        //         userTickets: payload.tickets,
        //         userTicketsCopy: payload.tickets,
        //         totalTickets: payload.totalTickets,
        //         totalPages: payload.totalPages,
        //         prev: payload.prev,
        //         next: payload.next,
        //     }
        // }

        // case GET_ALL_TICKETS:
        //     return {
        //         ...state,
        //         userTickets: [...payload.tickets],
        //         userTicketsCopy: [...payload.tickets],
        //         totalTickets: payload.totalTickets,
        //         totalPages: payload.totalPages,
        //         prev: payload.prev,
        //         next: payload.next,
        //     }

        default:
            return state
    }


}

export default rootReducer