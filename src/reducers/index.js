import { combineReducers } from "redux";
import { snipcartReducer } from "./snipcart";

export const reducers = combineReducers({
    snipcart: snipcartReducer,
});
