import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import { FaBars, FaUserCheck } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, Logout } = useContext(AuthContext);
    const navigate = useNavigate()


    const handleLogout = () => {
        Logout()
            .then(result => {
                toast.success('Log out Successful')
                navigate('/login')
            })
            .catch(error => console.log(error.message))

    }

    const menuItems = <>
        <li className='font-semibold'>
            <Link to='/'> Home</Link>
            <Link to='/allservices'>Services</Link>
            {
                user?.uid &&
                <>
                    <Link to='/myreviews'>My Reviews</Link>
                    <Link to='/addservice'>Add service</Link>
                </>
            }
        </li>
    </>


    return (
        <div className='bg-red-50 w-full sticky top-0 z-50'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBars className='text-xl font-bold' />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {menuItems}
                        </ul>
                    </div>
                    <img className='w-24' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-black">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <div className='font-bold flex items-center gap-4'>
                                <p className='font-semibold'>{user?.email}</p>
                                <Link onClick={handleLogout} to='/login'>Log Out</Link>
                                <div className='tooltip tooltip-bottom' data-tip={user?.displayName ? user.displayName : 'No User Name'} >
                                    {
                                        user?.photoURL ?

                                            < img className='w-8 h-8 rounded-full cursor-pointer ' src={user.photoURL} alt="" />

                                            :
                                            <FaUserCheck className='text-2xl cursor-pointer' />
                                    }
                                </div>
                            </div>
                            :
                            <div className='font-bold flex gap-4'>
                                <Link to='/login'>Login</Link>
                                <Link to='/signup'>Register</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;