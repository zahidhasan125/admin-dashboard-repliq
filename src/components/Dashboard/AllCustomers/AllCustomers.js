import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import CustomerDeleteConfirmationModal from './CustomerDeleteConfirmationModal/CustomerDeleteConfirmationModal';

const AllCustomers = () => {
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const { data: customers = [], refetch, isLoading } = useQuery({
        queryKey: ['customers'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_dnsName}/customers`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('e-shop-task-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(customers);
    if (isLoading) {
        return <progress className="progress w-full mx-auto"></progress>
    }

    const handleDeleteCustomer = id => {
        fetch(`${process.env.REACT_APP_dnsName}/customer/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('e-shop-task-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch();
                    toast.success('Customer Deleted Successfully!')
                }
            })
    }

    return (
        <div>
            <h2 className='text-center text-5xl font-semibold my-8 border-b-2 pb-2'>All Customers <span className='text-3xl'>({customers?.length})</span></h2>
            <div>
                <table className="table w-full table-compact">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        {
                            customers?.map(customer => <tr key={customer._id} className="hover:bg-gray-100 dark:hover:bg-gray-700 mb-2">
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-normal dark:text-white">
                                    {customer.displayName ? customer.displayName : "No Name"}
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-normal dark:text-white">
                                    {customer.email}
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <button className='btn btn-warning btn-xs mr-1'>Update</button>
                                    <label htmlFor='delete-confirm-modal' onClick={() => setSelectedCustomer(customer)} className='btn btn-error btn-xs'>Del</label>
                                </td>

                            </tr>)
                        }
                    </tbody>
                    {/* Cart Item Delete Confirmation Modal */}
                    {
                        selectedCustomer &&
                        <CustomerDeleteConfirmationModal
                            handleRemoveFromCart={handleDeleteCustomer}
                            selectedCustomer={selectedCustomer}
                            setSelectedCustomer={setSelectedCustomer}
                        ></CustomerDeleteConfirmationModal>
                    }
                    <tfoot>
                        <tr>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Action
                            </th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default AllCustomers;