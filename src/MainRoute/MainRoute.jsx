import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "../MainOutlet/MainOutlet";
import ErrorPage from "../Pagges/ErrorPage/ErrorPage";
import Home from "../Pagges/HomePage/Home";
import GlarryPage from "../Pagges/GlarryPage/GlarryPage";
import BlogPage from "../Pagges/BlogPage/BlogPage";
import EventsDitles from "../Components/EventsDitles/EventsDitles";
import LoginPage from "../Pagges/LoginPage/LoginPage";
import RegisterPage from "../Components/CommentCard/RegisterPage/RegisterPage";
import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainOutlet></MainOutlet>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/data.json")
            },
            {
                path: "/event/:id",
                element: <PrivetRout><EventsDitles></EventsDitles></PrivetRout>,
                loader: () => fetch("/data.json")
            },
            {
                path: "/gallery",
                element: <PrivetRout><GlarryPage></GlarryPage></PrivetRout>
            },
            {
                path: "/blogs",
                element: <PrivetRout> <BlogPage></BlogPage></PrivetRout>
            },
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/loginPage",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/RegisterPage",
                element: <RegisterPage></RegisterPage>
            },
        ]
    },
]);

export default router;