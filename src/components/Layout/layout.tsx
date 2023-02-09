import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Hero />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
