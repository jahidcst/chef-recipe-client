import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="top-0 p-5 justify-between h-16 flex text-white bg-black">
                <div>
                    <a className=" normal-case"><span className='text-4xl font-semibold '>COOK</span><span className='text-4xl font-bold text-orange-600'>BOOKS</span></a>
                </div>
                <div className="flex gap-4  ">

                    <Link to='/' className='hover:text-orange-600 '>Home</Link>
                    <Link to='/blog' className='hover:text-orange-600 '>Blog</Link>
                    <Link to='/login ' className='hover:text-orange-600 '>Login</Link>
                    <Link to='/register' className='hover:text-orange-600 '>Register</Link>
                    <div className="avater w-10 rounded">
                    <img src="/src/assets/29761817_7618876.jpg" />
                </div>
                </div>
            </div>
            
        </nav>
    );
};

export default Header;