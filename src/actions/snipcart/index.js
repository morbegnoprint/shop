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
        document.addEventListener("snipcart.ready", async () => {
            await window.Snipcart.ready;
            dispatch(getSnipcartClientSuccess(window.Snipcart));
            dispatch(deleteLoading());
        });
    } catch (error) {
        console.error(error);
    }
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

export const addItemToSnipcart = (client, item) => async (
    dispatch,
    getState
) => {
    dispatch(postLoading());
    try {
        await client.api.cart.items.add(item);
        dispatch(getSnipcartState(client));
    } catch (error) {
        console.error(error);
    }
    dispatch(deleteLoading());
};

export const removeItemFromSnipcart = (client, itemId) => async (
    dispatch,
    getState
) => {
    dispatch(postLoading());
    try {
        await client.api.cart.items.remove(itemId);
        dispatch(getSnipcartState(client));
    } catch (error) {
        console.error(error);
    }
    dispatch(deleteLoading());
};

export const updateSnipcartItem = (client, updatedItem) => async (
    dispatch,
    getState
) => {
    dispatch(postLoading());
    try {
        await client.api.cart.items.update(updatedItem);
        dispatch(getSnipcartState(client));
    } catch (error) {
        console.error(error);
    }
    dispatch(deleteLoading());
};
