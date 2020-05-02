import { postLoading, deleteLoading } from "../loadings";

export const GET_SNIPCART_CLIENT_SUCCESS = "GET_SNIPCART_CLIENT_SUCCESS";
export const GET_SNIPCART_STATE_SUCCESS = "GET_SNIPCART_STATE_SUCCESS";

const getSnipcartClientSuccess = (client) => ({
    type: GET_SNIPCART_CLIENT_SUCCESS,
    client,
});

const getSnipcartStateSuccess = (state) => ({
    type: GET_SNIPCART_STATE_SUCCESS,
    state,
});

export const getSnipcartClient = () => async (dispatch) => {
    dispatch(postLoading());
    try {
        document.addEventListener("snipcart.ready", function () {
            dispatch(getSnipcartClientSuccess(window.Snipcart));
        });
    } catch (error) {
        console.error(error);
    }
    dispatch(deleteLoading());
};

export const getSnipcartState = (client) => async (dispatch, getState) => {
    dispatch(postLoading());
    try {
        dispatch(getSnipcartStateSuccess(await client.store.getState()));
    } catch (error) {
        console.error(error);
    }
    dispatch(deleteLoading());
};
