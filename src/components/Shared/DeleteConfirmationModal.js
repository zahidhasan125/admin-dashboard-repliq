import React from 'react';

const DeleteConfirmationModal = ({ handleRemoveFromCart, selectedProduct, setSelectedProduct }) => {
    return (
        <div className='w-auto'>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative bg-slate-900 text-white text-center">
                    <label htmlFor="delete-confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are you sure to Delete this item?</h3>
                    <div className="flex items-center justify-center gap-4">
                        <div className="avatar">
                            <div className="mask mask-squircle w-16 h-16 hover:scale-105 ease-in-out duration-300">
                                <img src={selectedProduct.thumbnail} alt='' />
                            </div>
                        </div>
                        <p className="pt-2">{selectedProduct?.title}</p>
                    </div>
                    <div className="modal-action justify-center">
                        <label onClick={() => handleRemoveFromCart(selectedProduct)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                        <label onClick={() => setSelectedProduct(null)} className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteConfirmationModal;