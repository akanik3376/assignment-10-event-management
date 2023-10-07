import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providor/AuthProvidor";
import swal from "sweetalert";

const RegisterPage = () => {

    const { createUser } = useContext(AuthContext)

    const HandelRegister = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value



        // if (password.length < 6) {

        //     swal('error! Password should be at least 6 characters');
        // }
        // else if (!/[A-Z]/.test(password)) {
        //     swal('error! must  have a capital letter');
        // }
        // else if (!/^(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,}$/.test(password)
        // ) {

        //     swal('error! must have spatial chr');
        // }

        //    create user 
        createUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })

    }


    return (
        <div>

            <div className="w-5/6  md:w-2/4 mx-auto">

                <div className=" mb-10">
                    <h2 className="text-3xl text-center">Please Registration !</h2>
                    <div className="card flex-shrink-0 ">
                        <form onSubmit={HandelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered" required />
                                <label className="label mt-3">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>


                            </div>

                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p>You have account? please <Link className="text-indigo-700 underline " to="/loginPage">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;