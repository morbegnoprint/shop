import React from "react";
import ReactSelect from "react-select";
import { Flex, Box } from "reflexbox";
import { Label } from "./styled";

const customStyles = {
    control: () => ({
        borderRadius: "28px",
        padding: "16px 24px",
        border: "solid 1px rgba(0, 0, 0, 0.4)",
        display: "flex",
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: "24px",
    }),
    menuList: (provided) => ({
        ...provided,
        padding: "0",
    }),
    option: (provided, state) => {
        let background = "#fff";
        if (state.isSelected) {
            background = "#f07d02";
        } else if (state.isFocused) {
            background = "rgba(240, 125, 2, 0.2)";
        }
        return {
            ...provided,
            borderTopLeftRadius: state.data.index === 0 ? "24px" : "0",
            borderTopRightRadius: state.data.index === 0 ? "24px" : "0",
            borderBottomLeftRadius:
                state.data.index === state.options.length - 1 && "24px",
            borderBottomRightRadius:
                state.data.index === state.options.length - 1 && "24px",
            padding: "16px 24px",
            background,
            transition: "background .2s ease",
            "&:active": {
                background: "rgba(240, 125, 2, 0.4)",
            },
        };
    },
    valueContainer: (provided, state) => ({
        ...provided,
        padding: "0",
        color: "#000",
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: "rgba(0, 0, 0, 0.4)",
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        alignItems: "center",
        height: "16px",
        padding: "0",
        color: "rgba(0, 0, 0, 0.4)",
    }),
};

export const Select = ({ label, ...rest }) => (
    <Flex flexDirection="column">
        {label && (
            <Box mb={3}>
                <Label>{label}</Label>
            </Box>
        )}
        <Box>
            <ReactSelect {...rest} styles={customStyles} isSearchable={false} />
        </Box>
    </Flex>
);
