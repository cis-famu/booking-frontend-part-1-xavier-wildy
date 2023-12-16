import React from "react";
import Nav from "../components/Nav";

const Search = () => {
    const rooms = [
        {
            name: "Penthouse",
            description: "High roller Style",
            capacity: 2,
            price: "$150/night",
            availability: "Reserved",
        },
    ];
    return (
        <div className="page-container">
            <Nav />
            <h2>Search for Available Rooms</h2>
            <table className="room-list">
                <thead>
                <tr>
                    <th>Room Type</th>
                    <th>Description</th>
                    <th>Capacity</th>
                    <th>Price</th>
                    <th>Availability</th>
                </tr>
                </thead>
                <tbody>
                {rooms.map((room, index) => (
                    <tr key={index}>
                        <td>{room.name}</td>
                        <td>{room.description}</td>
                        <td>{room.capacity} Guests</td>
                        <td>{room.price}</td>
                        <td>{room.availability}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Search;