import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providor/AuthProvidor";

const LoginPage = () => {

    const { loginUser } = useContext(AuthContext)

    const HandelLoginUser = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        // login user 
        loginUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (


        <div className="w-2/5 mt-10  md:w-2/4 mx-auto">

            <div>
                <h2 className="text-3xl text-center">Please signUp !</h2>
                <div className="card flex-shrink-0 ">
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
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>You have account? please <Link to="/RegisterPage"
                        className="text-indigo-700 underline ">Register</Link></p>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;