import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbars from '../Shared/Navbar/Navbars';

const Main = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;