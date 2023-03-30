import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/'
                },
                {
                    path: '/login',
                    element: <Login />
                }
            ]
        }
    ])