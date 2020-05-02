import React, { useState } from "react";
import { Seo } from "../../components/seo";
import { Layout } from "../../components/layout";
import { Section } from "../../components/section";
import { useDispatch, useSelector } from "react-redux";
import { useSnipcartClient } from "../../hooks/cart";
import { useEffect } from "react";
import { Box, Flex } from "reflexbox";
import { CartItem } from "../../components/cart/item";

const Cart = () => {
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

    return (
        <Layout>
            <Seo title="Cart" />
            <Section title="Il tuo carrello">
                {items.length > 0 ? (
                    items.map((item) => {
                        console.log(item);
                        return <CartItem key={item.id} {...item} />;
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
