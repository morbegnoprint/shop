import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { clientsReducer } from "./clients";

export const reducers = combineReducers({
    cart: cartReducer,
    clients: clientsReducer,
});
