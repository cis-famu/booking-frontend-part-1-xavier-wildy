import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Home(props) {
    return (
        <div>
            <Nav />
            <header className="header">
                <h1>Welcome to BookIo</h1>
                <p>Your Premium hotel booking service</p>
                <button>Book Now</button>
            </header>
            <section className="about">
                <h2>About Us</h2>
                <p>
                    Welcome to BookIo, where your perfect stay is just a click away. As
                    your premier hotel booking destination, we pride ourselves on offering
                    a hassle-free and enjoyable experience. At BookIo, we understand that
                    the right accommodation can make or break your travel experience, and
                    that's why we're committed to providing a diverse range of options
                    tailored to your preferences. With user-friendly navigation, real-time
                    availability, and competitive prices, our platform makes finding and
                    booking your ideal hotel a breeze. Whether you're planning a business
                    trip, a romantic getaway, or a family vacation, BookIo is here to
                    ensure that your stay is as comfortable as it is memorable. Discover
                    the ease of booking with BookIo, where your next adventure begins.
                </p>
            </section>
            <section className="footer">
                <Footer />
            </section>
        </div>
    );
}

export default Home;
