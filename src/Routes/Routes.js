import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Welcome from "../Pages/Home/Welcome";
import Profile from "../Pages/Profile";
import Privacy from "../Pages/Privacy";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/welcome',
                element: <Welcome></Welcome>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/privacy',
                element: <Privacy></Privacy>
            },
        ]
    }
])