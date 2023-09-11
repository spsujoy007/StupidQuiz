import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile";
import Privacy from "../Pages/Privacy";
import CelibrateWelcome from "../Pages/Home/CelibrateWelcome";
import Blogs from "../Pages/Blogs";
import Gpt3 from "../Pages/Home/Gpt3";

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
                element: <CelibrateWelcome></CelibrateWelcome>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/privacy',
                element: <Privacy></Privacy>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/chatgpt',
                element: <Gpt3></Gpt3>
            },
        ]
    }
])