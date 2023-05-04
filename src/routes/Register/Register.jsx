import React from 'react';
import { Form } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200 text-center">

                <div className="hero-content flex-col ">

                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <h3 className='text-center text-2xl font-bold mt-5'>Please Login!</h3>
                        <Form>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder=" Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            
                        </div>
                        </Form>
                    </div>
                </div>
            </div>

    );
};

export default Register;