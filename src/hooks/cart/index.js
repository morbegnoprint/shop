import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSnipcartClient } from "../../actions/clients";
import { getCartState } from "../../actions/cart";

export const useSnipcartClient = () => {
    const dispatch = useDispatch();
    const snipcartClient = useSelector((state) => state.clients.snipcart);

    useEffect(() => {
        dispatch(getSnipcartClient());
    }, [dispatch]);

    useEffect(() => {
        if (snipcartClient) {
            dispatch(getCartState(snipcartClient));
        }
    }, [dispatch, snipcartClient]);

    return snipcartClient;
};
