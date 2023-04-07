import { legacy_createStore as createStore, applyMiddleware } from "redux";
import bookingReducer from "./booking/bookingReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import myLogger from "../myLogger";

const store = createStore(
    bookingReducer,
    composeWithDevTools(applyMiddleware(myLogger))
);

export default store;
