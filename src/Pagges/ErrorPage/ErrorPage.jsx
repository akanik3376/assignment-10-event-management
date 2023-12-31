import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container  mx-auto">
            <div className="h-[70vh] flex justify-center items-center">
                <div className="  text-center ">
                    <h3 className="text-2xl font-bold block">ERROR...</h3>
                    <h1 className="text-5xl my-4 font-extrabold">404</h1>
                    <h3 className="text-2xl font-bold block">PAGE NOT FOUND</h3>
                    <Link to="/"><button className="font-bold mt-3 btn">Go to home</button></Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;