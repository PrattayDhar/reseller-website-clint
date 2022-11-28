import { createBrowserRouter } from "react-router-dom";
import Allbuyer from "../Dashboard/Allbuyer/Allbuyer";
import Allseller from "../Dashboard/Allseller/Allseller";
import Myorder from "../Dashboard/Myorder/Myorder";
import Muproduct from "../Dashboard/Myproduct/Muproduct";
import Reportiteam from "../Dashboard/Reportitem/Reportiteam";
import Dashboardlayout from "../layout/Dashboardlayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Cetagorydetail from "../Pages/Cetagorydetail/Cetagorydetail";
import Getstarted from "../Pages/Getstarted/Getstarted";
import Home from "../Pages/Home/Home";
import Prepayment from "../Pages/Prepayment/Prepayment";
import Productadd from "../Dashboard/ProductADD/Productadd";
import Error from "../Shared/Error/Error";
import PrivateRoute from "./PrivateRoutes";
import Payment from "../Pages/Payment/Payment";


export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://laptop-reseller-server-delta.vercel.app/category')

            },
            
            // {
            //     path: '/dashboard',
            //     element: <Dashboardlayout></Dashboardlayout>
               
            // },
            {
                path:'/getstarted',
                element:<Getstarted></Getstarted>

            },
            {
                path:'/prepayment/:id',
                // element:<PrivateRoute></PrivateRoute>
                element: <PrivateRoute><Prepayment></Prepayment></PrivateRoute>,
                 loader: ({ params }) => fetch(`https://laptop-reseller-server-delta.vercel.app/prepayment/${params.id}`)
            },
            {
                path:'/payment/:id',
                element:<Payment></Payment> ,
                 loader: ({ params }) => fetch(`https://laptop-reseller-server-delta.vercel.app/payorder/${params.id}`)
            },
            {
                path:'/product/:id',
                element:<Cetagorydetail></Cetagorydetail>,
                loader: ({ params }) => fetch(`https://laptop-reseller-server-delta.vercel.app/product/${params.id}`)
                

            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
       
    },
   {
    path: "/Dashboard",
    element: <PrivateRoute><Dashboardlayout></Dashboardlayout></PrivateRoute>,
    children: [
      { path: "/Dashboard/MyOrders", element: <Myorder></Myorder>,
      loader:()=>fetch('https://laptop-reseller-server-delta.vercel.app/myorders')
     },
      { path: "/Dashboard/MyProducts", element: <Muproduct></Muproduct>},
      { path: "/Dashboard/productadd", element:<Productadd></Productadd>  },
      { path: "/Dashboard/AllSellers", element: <Allseller></Allseller>,
    loader:()=>fetch('https://laptop-reseller-server-delta.vercel.app/sellers') },
      { path: "/Dashboard/AllBuyers", element: <Allbuyer></Allbuyer>,
    loader:()=>fetch('https://laptop-reseller-server-delta.vercel.app/buyer') },
      {
        path: "/Dashboard/ReportedItems",
        element: <Reportiteam></Reportiteam>
      },
    ],
  },
    {
        path:'*',
        element:<Error></Error>
        
    }
])
