import { BOOKEDADD, BOOKEDDEL } from "./actiontype";

const bookings = {
    vals: [],
};

const bookingReducer = (state = bookings, action) => {
    switch (action.type) {
        case BOOKEDADD:
            return {
                ...state,
                vals: [...state.vals, action.payload],
            };
        case BOOKEDDEL:
            const aaaa = state.vals.filter((el) => el._id !== action.payload);
            return {
                ...state,
                vals: aaaa,
            };
        default:
            return state;
    }
};

export default bookingReducer;
