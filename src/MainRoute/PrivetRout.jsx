/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providor/AuthProvidor";
import { Navigate } from "react-router-dom";

const PrivetRout = ({ children }) => {
    const { loading, user } = useContext(AuthContext)


    if (loading) {
        return <div className="flex justify-center items-center h-[70vh]">
            <span className="loading loading-spinner loading-lg "></span>
        </div>

    }

    if (user) {
        return children
    }
    return <Navigate to="/loginPage"></Navigate>
};

export default PrivetRout;