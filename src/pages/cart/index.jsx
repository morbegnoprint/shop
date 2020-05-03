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
        const debounced = debounce((id, quantity) => {
            dispatch(
                updateSnipcartItem(snipcartClient, { uniqueId: id, quantity })
            );
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
                        debouncedItemUpdate(id, quantity);
                    }
                }
            }
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
                            />
                        );
                    })
                ) : (
                    <Flex
                        width="100%"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Box fontSize={32} textAlign="center" mb={4}>
                            ¯\_(ツ)_/¯
                        </Box>
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
