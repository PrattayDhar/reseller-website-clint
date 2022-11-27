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
      <div className='d-flex  ' >
        {/* <div>
          <Outlet></Outlet>
        </div> */}
        {/* <div >
          <ul >
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
        </div> */}

        <div >
          <h6 className='pt-4 px-3'>Options</h6>
          <ul >
            {
              isBuyer && (
                 <li>
              <Link style={{ textDecoration: 'none' }} to={"/dashboard/MyOrders"}>My Orders</Link>
            </li>
              )
            }
           
            <>
            {
              isSeller && (
                 <>
                 <li>
                <Link style={{ textDecoration: 'none' }} to={"/Dashboard/MyProducts"}>My Products</Link>
              </li>
              
              <li>
                <Link style={{ textDecoration: 'none' }} to={"/Dashboard/productadd"}>Add A Product</Link>
              </li>
            </>
              )
            }
             {
              isAdmin &&(
                <>
                 <li>
                <Link style={{ textDecoration: 'none' }} to={"/Dashboard/AllSellers"}>All Sellers</Link>
              </li>
              <li>
                <Link style={{ textDecoration: 'none' }} to={"/dashboard/AllBuyers"}>All Buyers</Link>
              </li>
              <li>
                <Link style={{ textDecoration: 'none' }} to={"/Dashboard/ReportedItems"}>Reported Items</Link>
              </li>
                </>
              )
             }
             
              
            </>
          </ul>
        </div>
<div className='px-5 mx-5 w-75'><Outlet></Outlet></div> 


      </div>
      <Footer></Footer>
    </div>
  );
};
   

export default Dashboardlayout;