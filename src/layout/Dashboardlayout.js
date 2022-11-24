import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Dashboardlayout = () => {
    return (
       <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to={"/dashboard"}>My Orders</Link>
            </li>
            <>
              <li>
                <Link to={"/dashboard"}>My Products</Link>
              </li>
              <li>
                <Link to={"/dashboard/addDoctor"}>Add A Product</Link>
              </li>
            </>
            <>
              <li>
                <Link to={"/dashboard/allusers"}>All Sellers</Link>
              </li>
              <li>
                <Link to={"/dashboard/allusers"}>All Buyers</Link>
              </li>
              <li>
                <Link to={"/dashboard/allusers"}>Reported Items</Link>
              </li>
            </>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
   

export default Dashboardlayout;