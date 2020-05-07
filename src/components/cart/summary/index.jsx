import React from "react";
import { Flex, Box } from "reflexbox";
import { CartItem } from "../item";
import { useMemo } from "react";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
    updateSnipcartItem,
    removeItemFromSnipcart,
} from "../../../actions/snipcart";
import { useSnipcartClient } from "../../../hooks/cart";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Button } from "../../button";
import { Section } from "../../section";

export const Summary = ({ onProceed }) => {
    const dispatch = useDispatch();
    const snipcartClient = useSnipcartClient();
    const cart = useSelector(
        (state) =>
            state.snipcart && state.snipcart.state && state.snipcart.state.cart
    );

    const [items, setItems] = useState([]);

    useEffect(() => {
        if (cart && cart.items) {
            setItems(cart.items);
        }
    }, [cart]);

    const debouncedItemUpdate = useMemo(() => {
        const debounced = debounce((updatedItem) => {
            dispatch(updateSnipcartItem(snipcartClient, updatedItem));
        }, 500);
        debounced.id = Date.now();
        return debounced;
    }, [dispatch, snipcartClient]);

    const handleQuantityChange = useCallback(
        (id, quantity) => {
            if (quantity) {
                const parsedValue = parseInt(quantity);
                if (!isNaN(parsedValue)) {
                    const updatedItemIndex = items.findIndex(
                        (item) => item.uniqueId === id
                    );
                    if (updatedItemIndex < 0) {
                        console.warn("updating non-existent item");
                        return;
                    }
                    const updatedItem = items[updatedItemIndex];
                    if (updatedItem.quantity !== parsedValue) {
                        updatedItem.quantity = parsedValue;
                        setItems([...items]);
                        debouncedItemUpdate({ uniqueId: id, quantity });
                    }
                }
            }
        },
        [debouncedItemUpdate, items]
    );

    const handleCustomFieldChange = useCallback(
        (id, fieldName, value) => {
            const updatedItemIndex = items.findIndex(
                (item) => item.uniqueId === id
            );
            if (updatedItemIndex < 0) {
                console.warn("updating non-existent item");
                return;
            }
            const updatedItem = items[updatedItemIndex];
            const updatedItemCustomFields = updatedItem.customFields;
            const updatedCustomFieldIndex = updatedItemCustomFields.findIndex(
                (customField) => customField.name === fieldName
            );
            updatedItem.customFields[updatedCustomFieldIndex].value = value;
            setItems([...items]);
            debouncedItemUpdate({
                uniqueId: id,
                customFields: updatedItemCustomFields,
            });
        },
        [debouncedItemUpdate, items]
    );

    const handleRemove = useCallback(
        (id) => {
            dispatch(removeItemFromSnipcart(snipcartClient, id));
        },
        [dispatch, snipcartClient]
    );

    return (
        <Section title="Il tuo carrello">
            {items.length > 0 ? (
                <Flex flexDirection="column" alignItems="flex-end">
                    <Box mb={4}>
                        {items.map((item) => {
                            return (
                                <CartItem
                                    key={item.id}
                                    {...item}
                                    onRemove={handleRemove}
                                    onQuantityChange={handleQuantityChange}
                                    onCustomFieldChange={
                                        handleCustomFieldChange
                                    }
                                />
                            );
                        })}
                    </Box>
                    <Box>
                        <Button onClick={onProceed}>Procedi</Button>
                    </Box>
                </Flex>
            ) : (
                <Flex width="100%" alignItems="center" flexDirection="column">
                    <Box fontSize={20} textAlign="center">
                        Non c'è ancora nulla qui!
                    </Box>
                </Flex>
            )}
        </Section>
    );
};
