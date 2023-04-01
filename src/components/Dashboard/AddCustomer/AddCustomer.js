import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useToken from '../../../hooks/useToken';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddCustomer = () => {
    const { user, createUser, userLogout, setIsLoading } = useContext(AuthContext);
    const [token] = useToken(user?.email);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleSignUp = e => {
        setIsLoading(true);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const userData = {
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
                    createUser(email, password)
                        .then(() => {
                            toast.success('User Created Successfully!');
                            setIsLoading(false);
                        })
                        .catch(err => {
                            console.error(err);
                            userLogout().then().catch();
                            if (err) {
                                const error = err.message?.split('/')[1].substring(0, err.message.split('/')[1].length - 2);
                                const capError = error.charAt(0).toUpperCase() + error.slice(1);
                                toast.error(capError.split('-').join(' '));
                                setIsLoading(false);
                            }
                        })
                } else if (data.message) {
                    toast.error(data.message);
                }
            })
            .catch(err => console.error(err))

    }
    return (
        <div>
            AddCustomer
        </div>
    );
};

export default AddCustomer;