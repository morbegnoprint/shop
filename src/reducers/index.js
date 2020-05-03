import { combineReducers } from "redux";
import { snipcartReducer } from "./snipcart";
import { loadingsReducer } from "./loadings";

export const reducers = combineReducers({
    snipcart: snipcartReducer,
    loadings: loadingsReducer,
});
