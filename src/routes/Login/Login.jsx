import React from 'react';
import { Form, Link } from 'react-router-dom';


const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
            <div className="hero min-h-screen bg-base-200 text-center">

                <div className="hero-content flex-col ">

                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <h3 className='text-center text-2xl font-bold mt-5'>Please Login!</h3>
                        <Form onSubmit={handleLogin}>
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
                                <input type="text" name='password' placeholder="Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <h2 className='text-xl'>Or</h2>
                        </div>
                        <div className='' >
                            <button className="btn btn-outline btn-primary mb-3">Sign in with Google</button><br />
                            <button className="btn btn-outline btn-secondary">Sign in with Github</button>
                        </div>
                        </Form>
                        <div>
                        Don't have an account?<Link to='/register' className='btn btn-link '>Register
                        </Link>
                        </div>
                        
                    </div>
                </div>
            </div>

        

    );
};

export default Login;