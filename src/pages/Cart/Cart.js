import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import DeleteConfirmationModal from '../../components/Shared/DeleteConfirmationModal';
import CartItem from '../../components/Cart/CartItem/CartItem';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { data: cartItems = [], isLoading, refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_dnsName}/cart?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('e-shop-task-token')}`
                }
            })
            const data = res.json();
            return data;
        }
    })

    console.log(selectedProduct);

    if (isLoading) {
        return <progress className="progress w-full mx-auto"></progress>;
    }

    const handleRemoveFromCart = item => {
        fetch(`${process.env.REACT_APP_dnsName}/cart?id=${item._id}`, {
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
    }

    return (
        <div>
            <div className="overflow-x-auto w-full px-8">
                {cartItems?.length < 1 ?

                    <h2 className='text-center text-5xl font-semibold my-8'>No Items Found. Add items to cart first.</h2>
                    :
                    <h2 className='text-center text-5xl font-semibold my-8'>All Cart Items</h2>

                }
                {
                    cartItems?.length >= 1 &&
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
                                cartItems?.map(item => <CartItem key={item._id} setSelectedProduct={setSelectedProduct} item={item} />)
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
                        handleRemoveFromCart={handleRemoveFromCart}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    ></DeleteConfirmationModal>
                }

            </div>
        </div>
    );
};

export default Cart;