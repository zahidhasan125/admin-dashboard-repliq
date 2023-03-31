import { useEffect, useState } from 'react';

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_dnsName}/customers/${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('e-shop-task-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin);
                })
        }
    }, [email])
    return [isAdmin];
};

export default useAdmin;