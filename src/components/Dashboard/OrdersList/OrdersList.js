import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import DeleteConfirmationModal from '../../Shared/DeleteConfirmationModal';
import ViewDetailsModal from './ViewDetailsModal/ViewDetailsModal';

const OrdersList = () => {
    const { user } = useContext(AuthContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedForDetails, setSelectedForDetails] = useState(null);
    const { data: orderItems = [], isLoading, refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_dnsName}/orders`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('e-shop-task-token')}`
                }
            })
            const data = res.json();
            return data;
        }
    })


    if (isLoading) {
        return <progress className="progress w-full mx-auto"></progress>;
    }

    const handleRemoveFromOrders = item => {
        fetch(`${process.env.REACT_APP_dnsNameForDev}/orders?id=${item._id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('e-shop-task-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Item deleted successfully!');
                    refetch();
                }
            })
            .catch(err => {
                console.error(err);
            })
        console.log(item);
    }

    return (
        <div>
            <div className="overflow-x-auto w-full px-8">
                {orderItems?.length < 1 ?

                    <h2 className='text-center text-5xl font-semibold my-8 border-b-2 pb-2'>No Items Found.</h2>
                    :
                    <h2 className='text-center text-5xl font-semibold my-8 border-b-2 pb-2'>All Orders</h2>

                }
                {
                    orderItems?.length >= 1 &&
                    <table className="table w-full table-compact">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Image
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Product Name
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Description
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Customer
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Qty
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {
                                orderItems?.map(item => <tr key={item._id} className="hover:bg-gray-100 dark:hover:bg-gray-700 mb-2">
                                    <td className="p-4 w-4">
                                        <div className="flex items-center">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-16 hover:scale-125 ease-in-out duration-300">
                                                    <img src={item.thumbnail} alt='' />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-normal dark:text-white">{item.title}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-normal dark:text-white">{item.description}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-normal dark:text-white">{item.customer}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.totalPrice}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.quantity}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <label htmlFor="products-detail-modal" onClick={() => setSelectedForDetails(item)} className='btn btn-warning btn-xs mr-1'>View Details</label>
                                        <label htmlFor='delete-confirm-modal' onClick={() => setSelectedProduct(item)} className='btn btn-error btn-xs'>Del</label>
                                    </td>

                                </tr>)
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Image
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Product Name
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Description
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Customer
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Qty
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Action
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                }
                {/* Cart Item Delete Confirmation Modal */}
                {
                    selectedProduct &&
                    <DeleteConfirmationModal
                        handleRemoveFromCart={handleRemoveFromOrders}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    ></DeleteConfirmationModal>
                }
                {/* Item Details Modal */}
                {
                    selectedForDetails && <ViewDetailsModal
                        selectedProduct={selectedForDetails}
                        setSelectedProduct={setSelectedForDetails}
                    ></ViewDetailsModal>
                }
            </div>
        </div>
    );
};

export default OrdersList;