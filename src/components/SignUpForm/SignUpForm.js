import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUpForm = () => {

    const { user, createUser, userLogout } = useContext(AuthContext);
    const [loggedInUserEmail, setLoggedInUserEmail] = useState('');
    const [token] = useToken(loggedInUserEmail);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (token || loggedInUserEmail !== '') {
        navigate(from, { replace: true });
    }

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const userData = {
            email
        }

        fetch(`${process.env.REACT_APP_dnsNameForDev}/signup`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    createUser(email, password)
                        .then(() => {
                            setLoggedInUserEmail(user?.email);
                            toast.success('User Created Successfully!');
                            navigate(from, { replace: true });
                        })
                        .catch(err => {
                            console.error(err);
                            userLogout().then().catch();
                            if (err) {
                                const error = err.message?.split('/')[1].substring(0, err.message.split('/')[1].length - 2);
                                const capError = error.charAt(0).toUpperCase() + error.slice(1);
                                toast.error(capError.split('-').join(' '));
                            }
                            navigate(from, { replace: true });
                        })
                } else if (data.message) {
                    toast.error(data.message);
                }
            })
            .catch(err => console.error(err))

    }
    return (
        <div className="hero py-10">
            {!user ? <div className="hero-content flex-col lg:flex-row-reverse w-full md:w-3/5 lg:max-w-sm">
                <div className="card shadow-2xl w-full border-t bg-slate-300 bg-opacity-10">
                    <h2 className='text-4xl text-center font-bold mt-4 text-white'>Sign Up</h2>
                    <form onSubmit={handleSignUp} className="card-body pt-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email*</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered border-blue-300 bg-slate-800" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password*</span>
                            </label>
                            <input type="password" name='password' placeholder="P@$$w0Rd (At least 6 character)" className="input input-bordered border-blue-300 bg-slate-800" required />
                        </div>
                        <label className="label">
                            <span className="label-text-alt text-white">Already member? <Link to="/login" className='link link-hover text-md text-green-300 font-bold'>Login</Link></span>
                        </label>
                        <div className="form-control mt-4">
                            <button className="btn btn-outline border-blue-300 hover:bg-blue-300 text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
                :
                <div className="hero my-10">
                    <h2 className='text-4xl text-center font-bold mt-4 text-white'>You are already logged in!</h2>
                </div>
            }
        </div>
    );
};

export default SignUpForm;