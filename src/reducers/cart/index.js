import { GET_CART_STATE_SUCCESS } from "../../actions/cart";

export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CART_STATE_SUCCESS: {
            return { ...action.state };
        }
        default: {
            return state;
        }
    }
};
