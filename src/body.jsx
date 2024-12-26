import React from 'react';
import NavBar from './navBar';
import { Outlet } from 'react-router-dom';
import Footer from './footer';

const Body = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Body;
