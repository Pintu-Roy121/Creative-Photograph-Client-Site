import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import { Oval } from 'react-loader-spinner';

const Login = () => {
    const [error, setError] = useState('')
    const { Login, GoogleLogin, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Login')
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";



    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Sign in with Email password.........................
        Login(email, password)
            .then(result => {
                if (loading) {
                    return <div className='h-32 my-24 relative'>
                        <div className='absolute left-1/2'>
                            <Oval
                                height={40}
                                width={40}
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#4fa94d"
                                strokeWidth={6}
                                strokeWidthSecondary={6}

                            />
                        </div>
                    </div>
                }
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                if (user) {
                    fetch('https://creative-photograph-server.vercel.app/jwt', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(currentUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            localStorage.setItem('User-Token', data.token)
                            form.reset('');
                            navigate(from, { replace: true });
                            setError('')
                        })
                }
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            });
    }



    // Signin with google ................................
    const googleLogin = () => {
        GoogleLogin()
            .then(result => {
                if (loading) {
                    return <div className='h-32 my-24 relative'>
                        <div className='absolute left-1/2'>
                            <Oval
                                height={40}
                                width={40}
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#4fa94d"
                                strokeWidth={6}
                                strokeWidthSecondary={6}

                            />
                        </div>
                    </div>
                }
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                toast.success('Login Successful')

                fetch('https://creative-photograph-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('User-Token', data.token)
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                setError(error.message)
            })

    }
    const handleFogotPassword = () => {
        toast.error('Not Implemented');
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
                                <Link onClick={handleFogotPassword} className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <p className='text-lg font-semibold text-red-600'>{error ? error : ''}</p>

                        </div>
                        <div className="form-control mt-6 text-center flex flex-col gap-4">
                            <input className="btn btn-primary" type="submit" value={"Log in"} />
                            <p onClick={googleLogin} className='btn btn-outline btn-primary '><FcGoogle className='text-4xl' /></p>
                        </div>
                        <p className='text-center font-semibold'>Do Not Have an Accout? <Link className='font-bold text-orange-600' to='/signup'>SignUp</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;