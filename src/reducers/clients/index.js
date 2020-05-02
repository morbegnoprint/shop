import { GET_SNIPCART_CLIENT_SUCCESS } from "../../actions/clients";

export const clientsReducer = (state = { snipcart: null }, action) => {
    switch (action.type) {
        case GET_SNIPCART_CLIENT_SUCCESS: {
            return { ...state, snipcart: action.client };
        }
        default: {
            return state;
        }
    }
};
