import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import UseAdmin from '../Use/UseAdmin';
import UseBuyer from '../Use/UseBuyer';
import UseSeller from '../Use/UseSeller';

const Dashboardlayout = () => {
  const { User } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(User?.email);
  const [isSeller] = UseSeller(User?.email);
  const [isBuyer] = UseBuyer(User?.email);
    return (
       <div>
      <Header></Header>
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side d-flex">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {
              isBuyer && (
                 <li>
              <Link to={"/dashboard/MyOrders"}>My Orders</Link>
            </li>
              )
            }
           
            <>
            {
              isSeller && (
                 <>
                 <li>
                <Link to={"/Dashboard/MyProducts"}>My Products</Link>
              </li>
              
              <li>
                <Link to={"/Dashboard/productadd"}>Add A Product</Link>
              </li>
            </>
              )
            }
             {
              isAdmin &&(
                <>
                 <li>
                <Link to={"/Dashboard/AllSellers"}>All Sellers</Link>
              </li>
              <li>
                <Link to={"/dashboard/AllBuyers"}>All Buyers</Link>
              </li>
              <li>
                <Link to={"/Dashboard/"}>Reported Items</Link>
              </li>
                </>
              )
             }
             
              
            </>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
   

export default Dashboardlayout;