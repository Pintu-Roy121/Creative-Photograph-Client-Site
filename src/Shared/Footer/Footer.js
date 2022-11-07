import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer mt-12 p-10 bg-neutral text-neutral-content">
            <div>
                <img className='w-32' src={logo} alt="logo" />
                <p className='text-base'>Creative Photgraphy<br />Providing Professional an awesome Photo on your events</p>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <FaFacebook className='text-3xl hover:text-blue-900 duration-700 cursor-pointer' />
                    <FaTwitter className='text-3xl hover:text-info duration-700 cursor-pointer' />
                    <FaYoutube className='text-3xl hover:text-red-900 duration-700 cursor-pointer' />
                </div>
            </div>
        </footer>
    );
};

export default Footer;