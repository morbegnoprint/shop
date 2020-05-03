import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import { SpinnerContainer } from "./styled";
import { BounceLoader } from "react-spinners";

export const UniversalSpinner = ({ timeout }) => {
    const [open, setOpen] = useState(false);
    const loading = useSelector((state) => !!state.loadings.amount);

    const debouncedOpen = useMemo(
        () =>
            debounce(() => {
                setOpen(loading);
            }, timeout),
        [loading, timeout]
    );

    useEffect(() => {
        if (loading) {
            debouncedOpen();
        } else {
            setOpen(false);
        }
    }, [debouncedOpen, loading]);

    return (
        <SpinnerContainer
            justifyContent="center"
            alignItems="center"
            backgroundColor="#fff"
            open={open}
        >
            <BounceLoader size={64} color="#f07d02" />
        </SpinnerContainer>
    );
};

UniversalSpinner.propTypes = {
    timeout: PropTypes.number,
};

UniversalSpinner.defaultProps = {
    timeout: 200,
};
