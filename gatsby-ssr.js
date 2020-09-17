import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <div
            key="snipcart-container"
            hidden
            id="snipcart"
            data-api-key="MjkwNGYzMjktNWY1OC00MGU0LTk4YmUtODgxZGRlZGI1YjE1NjM3MjQwMTAyODQ4MTE2ODE3"
            data-currency="EUR"
        />,
        <script
            key="snipcart-js"
            src="https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.js"
        />,
    ]);
};
