import React from "react";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducers } from "../../reducers";

export const wrapWithRedux = (element, ssr) => {
    let composeEnhancers = compose;
    if (!ssr) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(thunk))
    );
    return <Provider store={store}>{element}</Provider>;
};
