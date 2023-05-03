import React from 'react';
import { Form, Link } from 'react-router-dom';
import Register from '../Register/Register';

const Login = () => {
    return (
        <div className=' border-black pl-10 mx-72 my-3 border-2 bg-slate-200 '>
            <h3 className='text-center'>Please Login</h3>
            <Form >
                <div className='bg-slate-200'>
                    <label  htmlFor="email">Email</label><br />
                    <input className='w-96 mb-2 text-start pl-3 border-solid border-black h-8 m-auto border-2 rounded-sm' type="email" name="email" id="email" placeholder='Enter Your Email' required />
                </div>
                <label  htmlFor="password">Password</label><br />
                <input className='w-96  text-start pl-3 border-solid border-black h-8 border-2 rounded-sm' type="password" name="password" id="password" placeholder='Enter Your Password' required />
                <br />
                <div className='mt-6 text-center' >
                    <button className='bg-gray-400 border-black border-2 p-1 rounded-md w-52 text-orange-700 text-xl font-semibold mb-3'>Google Sign-in</button>
                    <br />
                    <button className='bg-slate-400  border-black border-2 p-1 rounded-md w-52 text-black text-xl font-semibold'>Github Sign-in</button>
                </div>
                <h4 className='text-center'>Don't have an account? <Link>Please<Register>Register</Register></Link></h4>
            </Form>
        </div>
    );
};

export default Login;