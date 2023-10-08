import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providor/AuthProvidor";

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)
    console.log(user)
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/AboutUs">AboutUs</NavLink></li>

    </>

    const HandelLogOut = () => {
        signOutUser()
    }

    return (
        <div className="navbar bg-[#F9F6E2]  font-bold ">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-28" src="https://unicaevents.ancorathemes.com/wp-content/uploads/2015/11/nica_dark.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <div>
                    {
                        user && 
                    }
                </div> */}

                {
                    user ? <>

                        <p className="mr-4">{user.displayName}</p>
                        <img className="w-12 rounded-full mr-4" src={user.photoURL} alt="" />

                        <button className="btn font-bold" onClick={HandelLogOut}>Logout</button>
                    </>

                        : <Link to="/loginPage" > <button className="btn">Login</button></Link>
                }


                {/* <div>
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user && <img src={user.photoURL} alt="" />
                                        || <img src="https://i.ibb.co/48XC7F8/20220809-fzu5nj1wqaaqdnz-555x555.jpg" />
                                    }

                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName}</button>

                                </li>
                                <li>
                                    <button onClick={HandelLogOut} className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/loginPage'>
                                <button className="btn btn-sm font-bold  btn-ghost">Login</button>
                            </Link>
                    }
                </div> */}

            </div>
        </div>
    );
};

export default Navbar;