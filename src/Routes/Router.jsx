import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashBoard from "../pages/DashBoard/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import UserHome from "../pages/DashBoard/UserHome/UserHome";
import Reservation from "../pages/DashBoard/Reservation/Reservation";
import MyBooking from "../pages/DashBoard/MyBooking/MyBooking";
import AddReview from "../pages/DashBoard/AddReview/AddReview";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import AllUser from "../pages/DashBoard/AllUser/AllUser";
import ManageItem from "../pages/DashBoard/ManageItem/ManageItem";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import ManageBooking from "../pages/DashBoard/ManageBooking/ManageBooking";
import AdminHome from "../pages/DashBoard/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute/AdminRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>     
            },
            {
                path:'/menu',
                element:<Menu/>
            },
            {
                path:'/ourShop/:category',
                element:<OurShop/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/secret',
                element:<PrivateRoute><Secret/></PrivateRoute>
            }
        ]
    },
    {
        path:'dashboard',
        element:<DashBoard/>,
        children:[
            {
                path:'cart',
                element:<Cart/>
            },
            {
                path:'user-home',
                element:<UserHome/>
            },
            {
                path:'reservation',
                element:<Reservation/>
            },
            {
                path:'my-booking',
                element:<MyBooking/>
            },
            {
                path:'add-review',
                element:<AddReview/>
            },
            {
                path:'payment-history',
                element:<PaymentHistory/>
            },
            {
                path:'allUsers',
                element:<AdminRoute><AllUser/></AdminRoute>
            },
            {
                path:'manage-item',
                element:<AdminRoute><ManageItem/></AdminRoute>
            },
            {
                path:'add-items',
                element:<AdminRoute><AddItem/></AdminRoute>
            },
            {
                path:'manage-booking',
                element:<ManageBooking/>
            },
            {
                path:'admin-home',
                element:<AdminHome/>
            }
        ]
    }
])