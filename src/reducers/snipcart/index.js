import {
    GET_SNIPCART_STATE_SUCCESS,
    GET_SNIPCART_CLIENT_SUCCESS,
    INITIALIZE_PAYMENT_SESSION_SUCCESS,
    SELECT_PAYMENT_METHOD_SUCCESS,
    RESET_PAYMENT_METHOD,
} from "../../actions/snipcart";

export const snipcartReducer = (
    state = {
        client: null,
        state: {},
        paymentSession: null,
        paymentForm: null,
    },
    action
) => {
    switch (action.type) {
        case GET_SNIPCART_CLIENT_SUCCESS: {
            return { ...state, client: action.client };
        }
        case GET_SNIPCART_STATE_SUCCESS: {
            return { ...state, state: action.state };
        }
        case INITIALIZE_PAYMENT_SESSION_SUCCESS: {
            return { ...state, paymentSession: action.session };
        }
        case SELECT_PAYMENT_METHOD_SUCCESS: {
            return { ...state, paymentForm: action.paymentForm };
        }
        case RESET_PAYMENT_METHOD: {
            return { ...state, paymentForm: null };
        }
        default: {
            return state;
        }
    }
};
