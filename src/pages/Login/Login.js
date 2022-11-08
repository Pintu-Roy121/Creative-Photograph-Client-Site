import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('')
    const { Login, GoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        Login(email, password)
            .then(result => {
                // const user = result.user;
                navigate('/')
                form.reset('')
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message)
            });
    }


    const googleLogin = () => {

        GoogleLogin()
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful')
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })

    }


    return (
        <div className="hero my-10">
            <div className="hero-content w-2/4">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-8">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email:</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password:</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <p className='text-lg font-semibold text-red-600'>{error ? error : ''}</p>

                        </div>
                        <div className="form-control mt-6 text-center flex flex-col gap-4">
                            <input className="btn btn-primary" type="submit" value={"Log in"} />
                            <p onClick={googleLogin} className='btn btn-outline btn-primary '><FcGoogle className='text-4xl' /></p>
                            <p className='btn btn-outline btn-ghost '><FaGithub className='text-4xl' /></p>
                        </div>
                        <p className='text-center font-semibold'>Do Not Have an Accout? <Link className='font-bold text-orange-600' to='/signup'>SignUp</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;