import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "../MainOutlet/MainOutlet";
import ErrorPage from "../Pagges/ErrorPage/ErrorPage";
import Home from "../Pagges/HomePage/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainOutlet></MainOutlet>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router;