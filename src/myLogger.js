import bookingReducer from "./redux/booking/bookingReducer";

const myLogger = (store) => (next) => (action) => {
    // console.log(JSON.stringify(store.getState()));
    // console.log(JSON.stringify(action));

    // const pre = [action].reduce(bookingReducer, store.getState());

    // console.log(JSON.stringify(pre));
    return next(action);
};

export default myLogger;
