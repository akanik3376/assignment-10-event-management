import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainOutlet = () => {
    return (
        <div className="font-sans">
            <div className="container mx-auto">
                <Navbar></Navbar>
            </div>

            <div className="">
                <Outlet></Outlet>

            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainOutlet;