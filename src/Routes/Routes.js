import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile";
import Privacy from "../Pages/Privacy";
import CelibrateWelcome from "../Pages/Home/CelibrateWelcome";
import Blogs from "../Pages/Blogs";
import Gpt3 from "../Pages/Home/Gpt3";
import QuizList from "../Pages/QuizList";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async() => await fetch('https://mocki.io/v1/fe20646b-e5fc-4283-8c23-c93121cc0d46'),
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
            {
                path: '/quizes/:title',
                loader: async() => await fetch('https://mocki.io/v1/fe20646b-e5fc-4283-8c23-c93121cc0d46'), 
                element: <QuizList></QuizList>
            },
        ]
    }
])