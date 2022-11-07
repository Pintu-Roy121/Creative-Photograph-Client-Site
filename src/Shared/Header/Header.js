import React from 'react';
import logo from '../../assets/logo.png';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {



    const menuItems = <>
        <li className='font-semibold'>
            <Link to='/'> Home</Link>
        </li>
        {/* {
            user?.uid ?
                <li className='font-semibold'>
                    <p className='font-bold'>{user?.email}</p>
                    <Link onClick={handleLogout} to='/login'>Log Out</Link>
                </li>
                :
                <li className='font-semibold'>
                    <Link to='/login'>Login</Link>
                </li>
        } */}

    </>

    return (
        <div className='bg-red-50 w-full'>
            <div className="navbar w-11/12 mx-auto text-b">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBars className='text-xl font-bold' />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
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
                    <a href='/' className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;