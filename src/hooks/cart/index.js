import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSnipcartClient, initializeSnipcartEventsListener } from "../../actions/snipcart";
import { getSnipcartState } from "../../actions/snipcart";

export const useSnipcartClient = () => {
    const dispatch = useDispatch();
    const snipcartClient = useSelector((state) => state.snipcart.client);

    useEffect(() => {
        dispatch(getSnipcartClient());
    }, [dispatch]);

    useEffect(() => {
        if (snipcartClient) {
            dispatch(getSnipcartState(snipcartClient));
            dispatch(initializeSnipcartEventsListener(snipcartClient));
        }
    }, [dispatch, snipcartClient]);

    return snipcartClient;
};
