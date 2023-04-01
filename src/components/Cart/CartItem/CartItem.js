import React from 'react';

const CartItem = ({item, setSelectedProduct}) => {
    return (
        <tr key={item._id} className="hover:bg-gray-100 dark:hover:bg-gray-700 mb-2">
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
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.totalPrice}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.quantity}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button className='btn btn-warning btn-xs mr-1'>Checkout</button>
                <label htmlFor='delete-confirm-modal' onClick={() => setSelectedProduct(item)} className='btn btn-error btn-xs'>Del</label>
            </td>

        </tr>
    );
};

export default CartItem;