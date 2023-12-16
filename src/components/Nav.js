import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        {" "}
                        Home{" "}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/search" className="nav-link">
                        {" "}
                        Search{" "}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/booking" className="nav-link">
                        {" "}
                        Booking{" "}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;