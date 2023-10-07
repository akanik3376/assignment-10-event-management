import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "../MainOutlet/MainOutlet";
import ErrorPage from "../Pagges/ErrorPage/ErrorPage";
import Home from "../Pagges/HomePage/Home";
import GlarryPage from "../Pagges/GlarryPage/GlarryPage";
import BlogPage from "../Pagges/BlogPage/BlogPage";
import EventsDitles from "../Components/EventsDitles/EventsDitles";

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
                element: <EventsDitles></EventsDitles>,
                loader: () => fetch("/data.json")
            },
            {
                path: "/gallery",
                element: <GlarryPage></GlarryPage>
            },
            {
                path: "/blogs",
                element: <BlogPage></BlogPage>
            },
            {
                path: "/",
                element: <Home></Home>
            },
        ]
    },
]);

export default router;