import {
    GET_SNIPCART_STATE_SUCCESS,
    GET_SNIPCART_CLIENT_SUCCESS,
} from "../../actions/snipcart";

export const snipcartReducer = (
    state = { client: null, state: {} },
    action
) => {
    switch (action.type) {
        case GET_SNIPCART_CLIENT_SUCCESS: {
            return { ...state, client: action.client };
        }
        case GET_SNIPCART_STATE_SUCCESS: {
            return { ...state, state: action.state };
        }
        default: {
            return state;
        }
    }
};
