import React, { useState } from 'react';
import ProductDetailsModal from './ProductDetailsModal';
import { FaAngleRight } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { title, price, thumbnail, brand, discountPercentage } = product;
    return (
        <div className="card bg-opacity-10 hover:bg-opacity-25 bg-slate-400 shadow-xl">
            <figure className="px-5 pt-5 min-h-[268px] cursor-pointer hover:scale-110 ease-in-out duration-300">
                <img src={thumbnail} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-start p-5">
                <h2 className="card-title">{title}</h2>
                <h3 className='font-bold'>Price: ${price}</h3>
                <p>Brand: {brand}</p>
                <p>Discount: {discountPercentage}%</p>
                <div className="card-actions mx-auto">
                    <label onClick={() => setSelectedProduct(product)} htmlFor="products-detail-modal" className="btn btn-accent btn-sm text-white">View Details <FaAngleRight /></label>
                </div>
            </div>
            {
                selectedProduct && <ProductDetailsModal
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                ></ProductDetailsModal>
            }
        </div>
    );
};

export default ProductCard;