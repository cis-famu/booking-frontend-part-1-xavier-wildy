import React from "react";
import Nav from "../components/Nav";

const Booking = () => {
    return (
        <div>
            <Nav />
            <h1>Thank you for using our site today. please book your stay below.</h1>
            <form>
                <input type="date" name="startDate" placeholder="Start Date" />
                <input type="date" name="endDate" placeholder="End Date" />
                <select name="roomType">
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="suite">Suite</option>
                </select>
                {/* Add more form elements as needed */}
                <button type="submit">Book</button>
            </form>
        </div>
    );
};

export default Booking;

