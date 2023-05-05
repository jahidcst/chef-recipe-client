import React from 'react'
import { FaClock, FaFacebook, FaInstagram, FaLocationArrow, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-black'>
            <div className='grid lg:grid-cols-3 p-4 text-white mt-4'>
            <div>
                <h2 className='font-bold text-2xl mb-2'>About Us</h2>
                <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor cididunt Lorem ipsum dolor sit amet, nempor in cididunt.</p>
                <div className='flex gap-2 text-green-400 mt-2'>
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                    <FaTwitter></FaTwitter>
                </div>
                
            </div>
            <div>
                <h2 className='font-bold text-2xl mb-2'>The Menu</h2>
                <u className='text-slate-300 no-underline'>
                    <li>Speacial Items</li>
                    <li>Fresh Breakfast</li>
                    <li>Lunch Menu</li>
                    <li>Dessert</li>
                </u>
            </div>
            <div>
                <h2 className='font-bold text-2xl mb-3'>Get in Touch</h2>
                <div className='flex gap-3 justify-items-center'>
                <span className='text-green-600'><FaClock></FaClock></span><p> Monday- Friday:</p>
                <p>08am - 12pm</p>
                </div>
                 <div className='flex gap-3'>
                    <span className='text-green-600'><FaLocationArrow></FaLocationArrow></span><p>8121 Sierra Lane Tampa, Florida 33604</p>
                 </div>
            </div>
        </div>
        <p className='text-center text-slate-300'><small>Copyright 2023 <span className='font-semibold text-xl'>COOKBOOS</span> Designed by Webinane.</small></p>
        </div>
    );
};

export default Footer;