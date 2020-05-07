import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex } from "reflexbox";
import { Section } from "../../section";
import { useCallback } from "react";
import { useSnipcartClient } from "../../../hooks/cart";
import {
    selectPaymentMethod,
    resetPaymentMethod,
    handlePaymentAuthorization,
} from "../../../actions/snipcart";
import { SnipcartPaymentContainer } from "./styled";
import { useState } from "react";
import { Button } from "../../button";

export const PaymentMethod = () => {
    const dispatch = useDispatch();
    const snipcartClient = useSnipcartClient();
    const paymentMethods = useSelector(
        (state) =>
            state.snipcart.paymentSession &&
            state.snipcart.paymentSession.data &&
            state.snipcart.paymentSession.data.availablePaymentMethods
    );
    const paymentForm = useSelector((state) => state.snipcart.paymentForm);

    useEffect(() => {
        dispatch(resetPaymentMethod());
    }, [dispatch]);

    const handleSelectCardPaymentMethod = useCallback(() => {
        if (!paymentForm) {
            dispatch(
                selectPaymentMethod(
                    snipcartClient,
                    "card",
                    "snipcart-payment-form-embedded"
                )
            );
        }
    }, [dispatch, paymentForm, snipcartClient]);

    const handleProceed = useCallback(() => {
        dispatch(handlePaymentAuthorization(snipcartClient, paymentForm));
    }, [dispatch, paymentForm, snipcartClient]);

    return paymentMethods && paymentMethods.length > 0 ? (
        <Section title="Metodo di pagamento">
            <Flex flexDirection="column">
                {paymentMethods.map((paymentMethod) => (
                    <Box mb={3}>
                        {paymentMethod.id === "card" && (
                            <Flex onClick={handleSelectCardPaymentMethod}>
                                <Box
                                    mr={3}
                                    minWidth="auto"
                                    justifyContent="space-between"
                                    fontSize={24}
                                    fontWeight={700}
                                >
                                    Carta
                                </Box>
                            </Flex>
                        )}
                    </Box>
                ))}
                <hr />
                <Flex
                    alignItems="center"
                    flexDirection="column"
                    display={paymentForm ? "flex" : "none !important"}
                >
                    <SnipcartPaymentContainer
                        mb={3}
                        width="100%"
                        id="snipcart-payment-form-embedded"
                    />
                    <Box>
                        <Button onClick={handleProceed}>Procedi</Button>
                    </Box>
                </Flex>
            </Flex>
        </Section>
    ) : null;
};
