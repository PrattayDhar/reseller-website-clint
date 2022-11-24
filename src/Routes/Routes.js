import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Getstarted from "../Pages/Getstarted/Getstarted";
import Home from "../Pages/Home/Home";
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
            //     path: '/service',
            //     element: <Service></Service>
               
            // },
            {
                path:'/getstarted',
                element:<Getstarted></Getstarted>

            },
            // {
            //     path:'/myreviews',
            //     element:<PrivateRoute><Myreview></Myreview></PrivateRoute> 
                
            // },
            // {
            //     path:'/AddServices',
            //     element:<PrivateRoute><Addservice></Addservice></PrivateRoute> 
            // },
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
        path:'*',
        element:<Error></Error>
        
    }
])