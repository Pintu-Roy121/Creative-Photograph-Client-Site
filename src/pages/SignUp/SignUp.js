import React, { useContext, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { loading, createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useTitle('Register')


    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
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
                        navigate('/');
                    })
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className="hero my-10 w-full">
            <div className="hero-content w-2/4">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-8">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name:</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email:</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password:</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />

                        </div>
                        {
                            error ?
                                <p className='text-lg text-red-600 font-semibold'>{error}</p>
                                :
                                ""
                        }
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sing Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already Hava an Account? <Link className='font-bold text-orange-600' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;