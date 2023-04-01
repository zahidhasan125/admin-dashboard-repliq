import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import Products from "../components/Home/Products";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardView from "../layouts/DashboardView";
import AllCustomers from "../components/Dashboard/AllCustomers/AllCustomers";
import AddCustomer from "../components/Dashboard/AddCustomer/AddCustomer";
import OrdersList from "../components/Dashboard/OrdersList/OrdersList";
import ProductsList from "../components/Dashboard/ProductsList/ProductsList";
import AddProduct from "../components/Dashboard/AddProduct/AddProduct";
import Profile from "../components/Dashboard/Profile/Profile";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/products',
                    element: <Products />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/signup',
                    element: <SignUp />
                },
                {
                    path: '/cart',
                    element: <PrivateRoute><Cart /></PrivateRoute>
                }
            ]
        },
        {
            path: '/dashboard',
            element: <PrivateRoute><DashboardView /></PrivateRoute>,
            children: [
                {
                    path: '/dashboard',
                    element: <Dashboard />
                },
                {
                    path: '/dashboard/allcustomers',
                    element: <AllCustomers />
                },
                {
                    path: '/dashboard/addcustomers',
                    element: <AddCustomer />
                },
                {
                    path: '/dashboard/orderslist',
                    element: <OrdersList />
                },
                {
                    path: '/dashboard/productslist',
                    element: <ProductsList />
                },
                {
                    path: '/dashboard/addproduct',
                    element: <AddProduct />
                },
                {
                    path: '/dashboard/profile',
                    element: <Profile />
                }

            ]
        }
    ])