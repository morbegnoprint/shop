import React, { useState } from "react";
import { Seo } from "../../components/seo";
import { Layout } from "../../components/layout";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import {
    updateSnipcartCart,
    initializePaymentSession,
} from "../../actions/snipcart";
import { DataForm } from "../../components/cart/data-form";
import { Summary } from "../../components/cart/summary";
import { useSnipcartClient } from "../../hooks/cart";
import { PaymentMethod } from "../../components/cart/payment-method";

const Cart = () => {
    const dispatch = useDispatch();
    const snipcartClient = useSnipcartClient();
    const [stepperIndex, setStepperIndex] = useState(0);

    const handleSummaryProceed = useCallback(() => {
        setStepperIndex(1);
    }, []);

    const handleDataFormProceed = useCallback(
        (shippingData) => {
            console.log(shippingData);
            dispatch(
                updateSnipcartCart(snipcartClient, {
                    email: shippingData.email,
                    shippingAddress: shippingData,
                    billingAddress: shippingData,
                })
            );
            dispatch(initializePaymentSession(snipcartClient));
            setStepperIndex(2);
        },
        [dispatch, snipcartClient]
    );

    return (
        <Layout>
            <Seo title="Cart" />
            {stepperIndex === 0 && <Summary onProceed={handleSummaryProceed} />}
            {stepperIndex === 1 && (
                <DataForm onProceed={handleDataFormProceed} />
            )}
            {stepperIndex === 2 && <PaymentMethod />}
        </Layout>
    );
};

export default Cart;
