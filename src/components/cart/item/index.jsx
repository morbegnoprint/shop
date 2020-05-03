import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import { Image, Subtitle, Price } from "./styled";
import { Input } from "../../../components/input";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CartItem = ({
    uniqueId,
    description,
    name,
    image,
    quantity,
    price,
    onRemove,
}) => {
    const handleQuantityChange = () => {};

    const handleLocalRemove = useCallback(() => {
        onRemove(uniqueId);
    }, [uniqueId, onRemove]);

    return (
        <Flex
            width="100%"
            flexDirection={["column", "column", "row"]}
            alignItems="center"
        >
            <Box width={[1, 1, 1 / 4]} px={[2, 6, 4]} mb={[4, 4, 0]}>
                <Image src={image} />
            </Box>
            <Box width={[1, 1, 3 / 4]} px={[2, 5, 4]}>
                <Flex>
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems={["center", "center", "flex-start"]}
                    >
                        <Box mr={4}>
                            <Flex flexDirection="column">
                                <Box mb={3}>
                                    <Subtitle>{name}</Subtitle>
                                </Box>
                                <Box mb={3}>
                                    <Subtitle>Descrizione</Subtitle>
                                </Box>
                                <Box mb={4}>{description}</Box>
                                {/* {attributes.map((attribute) => (
                                        <Flex
                                            key={attribute.name}
                                            flexDirection="column"
                                        >
                                            <Box mb={3}>
                                                <Subtitle>
                                                    {attribute.name}
                                                </Subtitle>
                                            </Box>
                                            <Box mb={4}>
                                                <Select
                                                    placeholder="Seleziona..."
                                                    options={attribute.options.map(
                                                        (option, index) => ({
                                                            label: option,
                                                            value: option,
                                                            index,
                                                        })
                                                    )}
                                                    onChange={getAttributesChangeHandler(
                                                        attribute.name
                                                    )}
                                                />
                                            </Box>
                                        </Flex>
                                    ))} */}
                                <Box mb={3}>
                                    <Subtitle>Quantità</Subtitle>
                                </Box>
                                <Box mb={4}>
                                    <Input
                                        placeholder="1, 10, 100..."
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                    />
                                </Box>
                                <Flex alignItems="center">
                                    <Box mr={3}>Totale:</Box>
                                    <Box>
                                        <Price>{price * quantity} €</Price>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                    <Box>
                        <FontAwesomeIcon
                            icon={faTimes}
                            size="lg"
                            onClick={handleLocalRemove}
                            cursor="pointer"
                        />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

CartItem.propTypes = {
    uniqueId: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
};
