import { postLoading, deleteLoading } from "../loadings";

export const GET_CART_STATE_SUCCESS = "GET_CART_STATE_SUCCESS";

const getCartStateSuccess = (state) => ({
    type: GET_CART_STATE_SUCCESS,
    state,
});

export const getCartState = (client) => async (dispatch, getState) => {
    dispatch(postLoading());
    try {
        dispatch(getCartStateSuccess(await client.store.getState()));
    } catch (error) {
        console.error(error);
    }
    dispatch(deleteLoading());
};
