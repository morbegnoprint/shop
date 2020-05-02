import { postLoading, deleteLoading } from "../loadings";

export const GET_SNIPCART_CLIENT_SUCCESS = "GET_SNIPCART_CLIENT_SUCCESS";

const getSnipcartClientSuccess = (client) => ({
    type: GET_SNIPCART_CLIENT_SUCCESS,
    client,
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
