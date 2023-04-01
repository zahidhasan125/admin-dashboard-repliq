import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddCustomer = () => {
    const { setIsLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    
    const handleSignUp = e => {
        setIsLoading(true);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        const userData = {
            displayName: name,
            email
        }

        fetch(`${process.env.REACT_APP_dnsName}/signup`, {
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
                    setIsLoading(false);
                    navigate('/dashboard/allcustomers')
                    toast.success("Customer Created successfully");
                } else if (data.message) {
                    toast.error(data.message);
                }
            })
            .catch(err => console.error(err))

    }
    return (
        <div>
            <h2 className='text-center text-5xl font-semibold my-8 border-b-2 pb-2'>Add New Customer</h2>
            <div className="hero py-10">
                <div className="hero-content flex-col lg:flex-row-reverse w-full md:max-w-md">
                    <div className="card shadow-2xl w-full border-t bg-slate-300 bg-opacity-10">
                        <form onSubmit={handleSignUp} className="card-body pt-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Customer name*</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter customer name" className="input input-bordered border-blue-300 bg-slate-800" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Customer Email*</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter customer email" className="input input-bordered border-blue-300 bg-slate-800" required />
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-outline border-blue-300 hover:bg-blue-300 text-white">Create Customer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCustomer;