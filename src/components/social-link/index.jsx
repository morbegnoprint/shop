import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link, RootFlex } from "./styled";
import { Box } from "reflexbox";
import { UndecoratedLink } from "../undecorated-link";

const socialInfo = {
    facebook: {
        icon: faFacebook,
        url: "https://www.facebook.com/millemotivi.it/",
        name: "Facebook",
    },
    instagram: {
        icon: faInstagram,
        url: "https://instagram.com/morbegno_millemotivi?igshid=c4q7ewup72w2",
        name: "Instagram",
    },
};

export const SocialLink = ({ type }) => {
    const socialSpecificInfo = socialInfo[type];
    return (
        <UndecoratedLink
            href={socialSpecificInfo.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <RootFlex type={type} alignItems="center">
                <Box mr={2}>
                    <FontAwesomeIcon icon={socialSpecificInfo.icon} />
                </Box>
                <Box>{socialSpecificInfo.name}</Box>
            </RootFlex>
        </UndecoratedLink>
    );
};

SocialLink.propTypes = {
    type: PropTypes.oneOf(["facebook", "instagram"]),
};

SocialLink.defaultProps = {
    type: "light",
};
