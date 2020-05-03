import { POST_LOADING, DELETE_LOADING } from "../../actions/loadings";

const initialState = {
    amount: 0
};

export const loadingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_LOADING: {
            return { amount: state.amount + 1 };
        }
        case DELETE_LOADING: {
            return { amount: state.amount > 0 ? state.amount - 1 : 0 };
        }
        default: {
            return state;
        }
    }
};
