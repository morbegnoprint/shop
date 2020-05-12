import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <div
            key="snipcart-container"
            hidden
            id="snipcart"
            data-api-key="MTcyMDQxNzUtY2Q4ZS00MmNhLTk2MTEtZjY3MTM1MjFjZDRkNjM3MjQwMTAyODQ4MTE2ODE3"
            data-currency="EUR"
        />,
        <script
            key="snipcart-js"
            src="https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.js"
        />,
    ]);
};
