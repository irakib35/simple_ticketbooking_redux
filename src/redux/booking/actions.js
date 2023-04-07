import { BOOKEDADD, BOOKEDDEL } from "./actiontype";

export const bookingAdd = (value) => {
    return {
        type: BOOKEDADD,
        payload: value,
    };
};

export const bookingdel = (value) => {
    return {
        type: BOOKEDDEL,
        payload: value,
    };
};
