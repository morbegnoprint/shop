import React, { useCallback } from "react";
import { Label, StyledInput } from "./styled";
import { Flex, Box } from "reflexbox";

export const Input = ({ label, onChangeText, onChange, ...rest }) => {
    const handleLocalChange = useCallback(
        (event) => {
            if (onChangeText) {
                onChangeText(event.target.value);
            }
            onChange(event);
        },
        [onChange, onChangeText]
    );

    return (
        <Flex flexDirection="column">
            {label && (
                <Box mb={3}>
                    <Label>{label}</Label>
                </Box>
            )}
            <Box>
                <StyledInput onChange={handleLocalChange} {...rest} />
            </Box>
        </Flex>
    );
};
