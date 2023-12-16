import React from "react";

const Footer = () => {
    const FooterStyle = {
        backgroundColor: "#acaaaa", // Set background color to #094d5e
        color: "black", // Set the text color to white
        padding: "10px", // Add padding to the nav for spacing
        display: "flex", // Use flexbox to arrange items
        justifyContent: "space-between",
        alignItems: "center",
    };
    return (
        <footer style={FooterStyle}>
            <div className="footer-content">
                <div className="footer-section">
                    <h2>BookIo</h2>
                    <p>Your ideal booking site</p>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info@BookIo.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>

                <div className="footer-section">
                    <h3>Visit Us</h3>
                    <p>123 Main Street</p>
                    <p>Cityville, State 12345</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2023 Hotel Awesome. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
