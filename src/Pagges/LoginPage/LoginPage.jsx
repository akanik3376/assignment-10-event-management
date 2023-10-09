import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providor/AuthProvidor";
import Navbar from "../../Shared/Navbar/Navbar";
import swal from "sweetalert";

const LoginPage = () => {

    const { loginUser, googleLogin } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    // const [success, setSuccess] = useState()
    const [error, setError] = useState()


    const HandelLoginUser = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value


        // login user 
        loginUser(email, password)
            .then(result => {
                console.log(result)
                // setSuccess('Login success full')
                swal("login success fully")
                // naviget after singin 
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err)
                setError('Invalid Password')
            })
    }

    // google login

    const HandelGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res)
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (


        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="w-5/6 mt-10  md:w-2/4 mx-auto">



                <div className="card flex-shrink-0 ">
                    <h2 className="text-3xl font-bold text-[#11111180] text-center">Please Login !</h2>
                    <form onSubmit={HandelLoginUser}
                        className="card-body">
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
                        <p className="text-red-600 text-xl">{error}</p>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>login with ? <button onClick={HandelGoogleLogin} className="text-indigo-700 underline font-semibold">google</button></p>
                        <p>You have account? please <Link to="/RegisterPage"
                            className="text-indigo-700 font-semibold underline ">Register</Link></p>
                    </form>

                </div>

            </div>
        </div>

    );
};

export default LoginPage;