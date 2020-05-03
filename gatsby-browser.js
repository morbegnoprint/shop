import React from "react";
import { wrapWithRedux } from "./src/gatsby/redux-provider";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./src/styles/toast/index.css";

export const wrapRootElement = ({ element }) =>
    wrapWithRedux(
        <>
            {element}
            <ToastContainer
                hideProgressBar
                className="toast-root"
                toastClassName="toast-container"
                bodyClassName="toast-body"
                position="top-right"
                closeButton={false}
                draggable={false}
                transition={Slide}
            />
        </>,
        false
    );
