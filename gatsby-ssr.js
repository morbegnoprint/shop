import { createElement } from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
    console.log("configuring snipcart");
    setPostBodyComponents([
        createElement("link", {
            key: "snipcartCss",
            href:
                "https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.css",
            rel: "stylesheet",
        }),
        createElement("div", {
            key: "snipcartDiv",
            id: "snipcart",
            hidden: true,
            "data-api-key":
                "Njg4NzU3YzktNTQzZi00ODVjLWE1Y2EtOGZkMzU5YWVlOGQ2NjM3MjE3ODEyOTQwNzA5NTc5",
        }),
        createElement("script", {
            key: "snipcartJs",
            src: "https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.js",
        }),
    ]);
};
