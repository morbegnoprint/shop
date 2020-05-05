import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import { Image, Subtitle, Price, VerticalDivider, RemoveText } from "./styled";
import { Input } from "../../../components/input";
import { UndecoratedLink } from "../../undecorated-link";
import { Select } from "../../select";

export const CartItem = ({
    uniqueId,
    description,
    name,
    image,
    quantity,
    onQuantityChange,
    price,
    onRemove,
    customFields,
    onCustomFieldChange,
    metadata,
}) => {
    const handleLocalRemove = useCallback(() => {
        onRemove(uniqueId);
    }, [uniqueId, onRemove]);

    const handleLocalQuantityChange = useCallback(
        (event) => {
            onQuantityChange(uniqueId, event.target.value);
        },
        [uniqueId, onQuantityChange]
    );

    const getAttributesChangeHandler = (attributeName) => ({ value }) => {
        onCustomFieldChange(uniqueId, attributeName, value);
    };

    return (
        <Flex
            width="100%"
            flexDirection={["column", "column", "row"]}
            alignItems="center"
        >
            <Box width={[2 / 3, 2 / 3, 1 / 4]} px={[2, 6, 4]} mb={[4, 4, 0]}>
                <UndecoratedLink to={`/products/${metadata.slug}`}>
                    <Image src={image} />
                </UndecoratedLink>
            </Box>
            <Box width={[1, 1, 3 / 4]} px={[2, 5, 4]}>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems={["center", "center", "flex-start"]}
                >
                    <Box>
                        <Flex flexDirection="column">
                            <Box mb={3}>
                                <Subtitle>{name}</Subtitle>
                            </Box>
                            <Box mb={3}>{description}</Box>
                            {customFields.map((customField) => {
                                return (
                                    <Flex
                                        key={customField.name}
                                        flexDirection="column"
                                    >
                                        <Box mb={3}>
                                            <Subtitle>
                                                {customField.name}
                                            </Subtitle>
                                        </Box>
                                        <Box mb={3}>
                                            <Select
                                                placeholder="Seleziona..."
                                                options={customField.options
                                                    .map(
                                                        (option) => option.name
                                                    )
                                                    .map((option, index) => ({
                                                        label: option,
                                                        value: option,
                                                        index,
                                                    }))}
                                                value={{
                                                    value: customField.value,
                                                    label: customField.value,
                                                }}
                                                onChange={getAttributesChangeHandler(
                                                    customField.name
                                                )}
                                            />
                                        </Box>
                                    </Flex>
                                );
                            })}
                            <Box mb={3}>
                                <Subtitle>Quantità</Subtitle>
                            </Box>
                            <Box mb={4}>
                                <Input
                                    placeholder="1, 10, 100..."
                                    value={quantity}
                                    onChange={handleLocalQuantityChange}
                                />
                            </Box>
                            <Flex alignItems="center">
                                <Box mr={3}>Totale:</Box>
                                <Box mr={3}>
                                    <Price>{price * quantity} €</Price>
                                </Box>
                                <Box mr={3} height="100%">
                                    <VerticalDivider />
                                </Box>
                                <Box>
                                    <RemoveText onClick={handleLocalRemove}>
                                        Rimuovi
                                    </RemoveText>
                                </Box>
                            </Flex>
                        </Flex>
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
