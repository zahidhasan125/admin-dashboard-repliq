import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_dnsName}/products`)
            .then(res => {
                setProducts(res.data);
                setIsLoading(false);
            })
            .catch(err => console.error(err))
    }, [])

    if (isLoading) {
        return <progress className="progress w-full mx-auto bg-yellow-700"></progress>
    }
    return (
        <div className='pb-12'>
            <h2 className='text-center text-5xl font-semibold my-8'>All Products</h2>
            <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 px-8'>

                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;