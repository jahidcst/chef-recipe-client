import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="top-0 p-5 justify-between h-16 flex text-white bg-black">
                <div>
                    <a className=" normal-case text-xl">COOKBOOKS</a>
                </div>
                <div className="flex gap-4  ">

                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            </div>
            <div className=''>
                    <img className='w-full ' src="https://img.freepik.com/free-photo/pasta-colored-farfalle-salad-with-tomatoes-mozzarella-basil_2829-14368.jpg?w=900&t=st=1683043134~exp=1683043734~hmac=7df8d0b1425453a069fe1f46d67450b93fb590fffffba414587c3541dc491504" alt="" />
                </div>
        </nav>
    );
};

export default Header;