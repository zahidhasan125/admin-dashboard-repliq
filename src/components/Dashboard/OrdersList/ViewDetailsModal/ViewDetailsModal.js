import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const ViewDetailsModal = ({ setSelectedProduct, selectedProduct }) => {
    const { title, price, images, description, quantity, customer, brand } = selectedProduct;

    return (
        <div className='z-30'>
            <input type="checkbox" id="products-detail-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-slate-900">
                    <label onClick={() => setSelectedProduct(null)} htmlFor="products-detail-modal" className="btn btn-sm btn-circle absolute right-0 top-0 text-2xl">✕</label>
                    <Carousel>
                        {
                            images.map((image, idx) =>
                                <figure key={idx} className="px-5 pt-5">
                                    <img src={image} alt="Shoes" className="rounded-xl max-w-xs" />
                                </figure>
                            )
                        }
                    </Carousel>

                    <h3 className="font-bold text-lg">{title}</h3>
                    <p>Brand: {brand}</p>
                    <p className='font-semibold'>Price: ${price}</p>
                    <label>Quantity: {quantity} </label>
                    <p>Customer: { customer }</p>
                    <p className="py-4">{description}</p>
                    <div className="modal-action">
                        <label htmlFor="products-detail-modal" onClick={() => setSelectedProduct(null)} className="btn-sm btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsModal;