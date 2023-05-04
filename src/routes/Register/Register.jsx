import React from 'react';
import { Form, Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.vaule;
        const password = form.password.value;
        console.log( name, email, password)
    }
    return (
        <div className="hero min-h-screen bg-base-200 text-center">

                <div className="hero-content flex-col ">

                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <h3 className='text-center text-2xl font-bold mt-5'>Please Register!</h3>
                        <Form onSubmit={handleRegister}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder=" Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo URL' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                                <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an Account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            
                        </div>
                        </Form>
                    </div>
                </div>
            </div>

    );
};

export default Register;