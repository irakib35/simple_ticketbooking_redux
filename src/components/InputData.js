import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingAdd } from "../redux/booking/actions";
import store from "../redux/store";

const InputData = () => {
    let nvals = useSelector((state) => state.vals);
    const dispatch = useDispatch();
    const [dcount, setDcount] = useState(1);
    const [dfrom, setDfrom] = useState("");
    const [dto, setDto] = useState("");
    const [ddate, setDdate] = useState("");
    const [dguest, setDguest] = useState("");
    const [dclass, setDclass] = useState("");
    const [newbook, setNewbook] = useState(false);

    const submit = (e) => {
        if (dfrom && dto && ddate && dguest && dclass) {
            e.preventDefault();
            var a = {
                _id: dcount,
                dfrom,
                dto,
                ddate,
                dguest,
                dclass,
            };
            setDcount(dcount + 1);
            return dispatch(bookingAdd(a));
        }
    };

    useEffect(() => {
        nvals.length >= 3 ? setNewbook(true) : setNewbook(false);
    }, [nvals]);

    return (
        <div class="mt-[160px] mx-4 md:mt-[160px] relative">
            <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form class="first-hero lws-inputform">
                    <div class="des-from">
                        <p>Destination From</p>
                        <div class="flex flex-row">
                            <img src="./img/icons/Frame.svg" alt="" />
                            <select
                                class="outline-none px-2 py-2 w-full"
                                name="from"
                                id="lws-from"
                                required
                                onChange={(e) => {
                                    setDfrom(e.target.value);
                                }}
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    <div class="des-from">
                        <p>Destination To</p>
                        <div class="flex flex-row">
                            <img src="./img/icons/Frame.svg" alt="" />
                            <select
                                class="outline-none px-2 py-2 w-full"
                                name="to"
                                id="lws-to"
                                required
                                onChange={(e) => {
                                    setDto(e.target.value);
                                }}
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    <div class="des-from">
                        <p>Journey Date</p>
                        <input
                            type="date"
                            class="outline-none px-2 py-2 w-full date"
                            name="date"
                            id="lws-date"
                            required
                            onChange={(e) => {
                                setDdate(e.target.value);
                            }}
                        />
                    </div>

                    <div class="des-from">
                        <p>Guests</p>
                        <div class="flex flex-row">
                            <img src="./img/icons/Vector (1).svg" alt="" />
                            <select
                                class="outline-none px-2 py-2 w-full"
                                name="guests"
                                id="lws-guests"
                                required
                                onChange={(e) => {
                                    setDguest(e.target.value);
                                }}
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>

                    <div class="des-from !border-r-0">
                        <p>Class</p>
                        <div class="flex flex-row">
                            <img src="./img/icons/Vector (3).svg" alt="" />
                            <select
                                class="outline-none px-2 py-2 w-full"
                                name="ticketClass"
                                id="lws-ticketClass"
                                required
                                onChange={(e) => {
                                    setDclass(e.target.value);
                                }}
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    <button
                        disabled={newbook}
                        class="addCity"
                        type="submit"
                        onClick={submit}
                        id="lws-addCity"
                    >
                        <svg
                            width="15px"
                            height="15px"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                        <span class="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InputData;
