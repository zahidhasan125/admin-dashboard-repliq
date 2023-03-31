import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Carousel } from 'react-responsive-carousel';
import { toast } from 'react-hot-toast';

const ProductDetailsModal = ({ setSelectedProduct, selectedProduct }) => {
    const { user } = useContext(AuthContext);
    const { title, price, images, description, brand } = selectedProduct;
    const [quantity, setQuantity] = useState(1);
    const handleAddToCart = () => {

        const item = {
            ...selectedProduct,
            quantity,
            totalPrice: price * quantity,
            customer: user?.email
        }
        const headers = {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('e-shop-task-token')}`
        }

        if (user) {
            axios.patch(`${process.env.REACT_APP_dnsName}/add-to-cart?id=${item._id}`, item, { headers: headers })
                .then(res => {
                    if (res.data?.acknowledged || res.data?.modifiedCount > 0) {
                        toast.success('Item added to cart!');
                        setSelectedProduct(null);
                    }
                })
                .catch(err => console.error(err))
        } else {
            toast('Please Login First', {
                duration: 4000,
                position: 'top-center',
                style: {
                    backgroundColor: '#FAD02C',
                    fontWeight: 700,
                    fontSize: '2rem'
                }
            });
            setSelectedProduct(null);
        }

    }
    return (
        <div className=' '>
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
                    <label>Quantity: </label>
                    <input
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        type="number"
                        name="quantity"
                        id="quantity"
                        defaultValue={quantity}
                        className='pl-2 w-24 rounded-md bg-black'
                        min={1}
                    />

                    <p className="py-4">{description}</p>
                    <div className="modal-action">
                        <label onClick={handleAddToCart} className="btn btn-sm btn-accent">Add to cart</label>
                        <label htmlFor="products-detail-modal" onClick={() => setSelectedProduct(null)} className="btn-sm btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;