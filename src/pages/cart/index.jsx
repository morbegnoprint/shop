import React, { useState, useMemo } from "react";
import { Seo } from "../../components/seo";
import { Layout } from "../../components/layout";
import { Section } from "../../components/section";
import { useDispatch, useSelector } from "react-redux";
import { useSnipcartClient } from "../../hooks/cart";
import { useEffect } from "react";
import { Box, Flex } from "reflexbox";
import { CartItem } from "../../components/cart/item";
import { useCallback } from "react";
import {
    removeItemFromSnipcart,
    updateSnipcartItem,
} from "../../actions/snipcart";
import { debounce } from "lodash";

const Cart = () => {
    const dispatch = useDispatch();
    const snipcartClient = useSnipcartClient();
    const cart = useSelector(
        (state) =>
            state.snipcart && state.snipcart.state && state.snipcart.state.cart
    );

    const debouncedItemUpdate = useMemo(() => {
        const debounced = debounce((updatedItem) => {
            dispatch(updateSnipcartItem(snipcartClient, updatedItem));
        }, 500);
        debounced.id = Date.now();
        return debounced;
    }, [dispatch, snipcartClient]);

    const [items, setItems] = useState([]);

    useEffect(() => {
        if (cart && cart.items) {
            setItems(cart.items);
        }
    }, [cart]);

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
        <Layout>
            <Seo title="Cart" />
            <Section title="Il tuo carrello">
                {items.length > 0 ? (
                    items.map((item) => {
                        return (
                            <CartItem
                                key={item.id}
                                {...item}
                                onRemove={handleRemove}
                                onQuantityChange={handleQuantityChange}
                                onCustomFieldChange={handleCustomFieldChange}
                            />
                        );
                    })
                ) : (
                    <Flex
                        width="100%"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Box fontSize={20} textAlign="center">
                            Non c'è ancora nulla qui!
                        </Box>
                    </Flex>
                )}
            </Section>
        </Layout>
    );
};

export default Cart;
