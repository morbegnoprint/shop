import { postLoading, deleteLoading } from "../loadings";
import { toast } from "react-toastify";

export const GET_SNIPCART_CLIENT_SUCCESS = "GET_SNIPCART_CLIENT_SUCCESS";
export const GET_SNIPCART_STATE_SUCCESS = "GET_SNIPCART_STATE_SUCCESS";
export const INITIALIZE_PAYMENT_SESSION_SUCCESS =
    "INITIALIZE_PAYMENT_SESSION_SUCCESS";
export const SELECT_PAYMENT_METHOD_SUCCESS = "SELECT_PAYMENT_METHOD_SUCCESS";
export const RESET_PAYMENT_METHOD = "RESET_PAYMENT_METHOD";

const getSnipcartClientSuccess = (client) => ({
    type: GET_SNIPCART_CLIENT_SUCCESS,
    client,
});

const getSnipcartStateSuccess = (state) => ({
    type: GET_SNIPCART_STATE_SUCCESS,
    state,
});

const initializePaymentSessionSuccess = (session) => ({
    type: INITIALIZE_PAYMENT_SESSION_SUCCESS,
    session,
});

const selectPaymentMethodSuccess = (paymentForm) => ({
    type: SELECT_PAYMENT_METHOD_SUCCESS,
    paymentForm,
});

export const resetPaymentMethod = () => ({
    type: RESET_PAYMENT_METHOD,
});

export const getSnipcartClient = () => async (dispatch) => {
    dispatch(postLoading());
    try {
        if (window.Snipcart) {
            dispatch(getSnipcartClientSuccess(window.Snipcart));
            dispatch(deleteLoading());
        } else {
            document.addEventListener("snipcart.ready", async () => {
                await window.Snipcart.ready;
                dispatch(getSnipcartClientSuccess(window.Snipcart));
                dispatch(deleteLoading());
            });
        }
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
        toast.success("Carrello aggiornato");
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
        toast.success("Carrello aggiornato");
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

export const updateSnipcartCart = (client, updatedCart) => async (
    dispatch,
    getState
) => {
    dispatch(postLoading());
    try {
        await client.api.cart.update(updatedCart);
        dispatch(getSnipcartState(client));
    } catch (error) {
        console.error(error);
    }
    dispatch(deleteLoading());
};

export const initializePaymentSession = (client) => async (
    dispatch,
    getState
) => {
    dispatch(postLoading());
    try {
        const session = await client.api.cart.initializePaymentSession(
            `${window.location.origin}`
        );
        dispatch(initializePaymentSessionSuccess(session));
    } catch (error) {
        console.error(error);
    }
    dispatch(deleteLoading());
};

export const selectPaymentMethod = (
    client,
    paymentMethodId,
    formContainerId
) => async (dispatch, getState) => {
    dispatch(postLoading());
    try {
        await client.api.cart.selectPaymentMethod(paymentMethodId);
        const paymentForm = await client.browser.insertPaymentForm(
            document.getElementById(formContainerId)
        );
        dispatch(selectPaymentMethodSuccess(paymentForm));
    } catch (error) {
        console.error(error);
    }
    dispatch(deleteLoading());
};

export const handlePaymentAuthorization = (client, paymentForm) => async (
    dispatch,
    getState
) => {
    dispatch(postLoading());
    try {
        await paymentForm.authorizePayment();
        await client.api.cart.confirm();
    } catch (error) {
        console.error(error);
    }
    dispatch(deleteLoading());
};
