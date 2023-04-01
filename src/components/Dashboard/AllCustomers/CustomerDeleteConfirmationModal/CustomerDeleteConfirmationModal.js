import React from 'react';

const CustomerDeleteConfirmationModal = ({ handleRemoveFromCart, selectedCustomer, setSelectedCustomer }) => {
    return (
        <div>
            <div className='w-auto'>
                <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box relative bg-slate-900 text-white text-center">
                        <label htmlFor="delete-confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Are you sure to 'Delete' this customer?</h3>
                        <div className="flex items-center justify-center gap-4">
                            <p className="pt-2">{selectedCustomer?.displayName ? selectedCustomer?.displayName : selectedCustomer?.email}</p>
                        </div>
                        <div className="modal-action justify-center">
                            <label onClick={() => handleRemoveFromCart(selectedCustomer)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                            <label onClick={() => setSelectedCustomer(null)} className="btn btn-xs">Cancel</label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerDeleteConfirmationModal;