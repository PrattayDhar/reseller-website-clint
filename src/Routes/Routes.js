import { createBrowserRouter } from "react-router-dom";
import Allbuyer from "../Dashboard/Allbuyer/Allbuyer";
import Allseller from "../Dashboard/Allseller/Allseller";
import Myorder from "../Dashboard/Myorder/Myorder";
import Muproduct from "../Dashboard/Myproduct/Muproduct";
import Reportiteam from "../Dashboard/Reportitem/Reportiteam";
import Dashboardlayout from "../layout/Dashboardlayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Getstarted from "../Pages/Getstarted/Getstarted";
import Home from "../Pages/Home/Home";
import Productadd from "../Pages/ProductADD/Productadd";
import Error from "../Shared/Error/Error";


export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/category')

            },
            
            // {
            //     path: '/dashboard',
            //     element: <Dashboardlayout></Dashboardlayout>
               
            // },
            {
                path:'/getstarted',
                element:<Getstarted></Getstarted>

            },
            // {
            //     path:'/myreviews',
            //     element:<PrivateRoute><Myreview></Myreview></PrivateRoute> 
                
            // },
            {
                path:'/productadd',
                element:<Productadd></Productadd>
            },
            // {
            //     path:'servicedetails/:id',
            //     element:<ServiceDetails></ServiceDetails>,
            //     loader: ({ params }) => fetch(`https://survey-help-server.vercel.app/services/${params.id}`)
                

            // },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
       
    },
   {
    path: "/Dashboard",
    element: <Dashboardlayout></Dashboardlayout>,
    children: [
      { path: "/Dashboard/MyOrders", element: <Myorder></Myorder> },
      { path: "/Dashboard/MyProducts", element: <Muproduct></Muproduct>},
      { path: "/Dashboard//productadd'", element:<Productadd></Productadd>  },
      { path: "/Dashboard/AllSellers", element: <Allseller></Allseller> },
      { path: "/Dashboard/AllBuyers", element: <Allbuyer></Allbuyer> },
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
