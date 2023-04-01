import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { setIsLoading } = useContext(AuthContext);

    const handleAddProduct = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const thumbnail = form.thumbnail.value;
        const price = form.price.value;
        const stock = form.stock.value;

        const product = {
            name,
            description,
            brand,
            category,
            thumbnail,
            price,
            stock,
            images: [thumbnail]
        }

        fetch(`${process.env.REACT_APP_dnsName}/product`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setIsLoading(false);
                    toast.success("Product Added successfully");
                } else if (data.message) {
                    toast.error(data.message);
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <h2 className='text-center text-5xl font-semibold my-8 border-b-2 pb-2'>Add New Product</h2>
            <div className="hero py-10">
                <div className="hero-content flex-col lg:flex-row-reverse w-full md:max-w-md">
                    <div className="card shadow-2xl w-full border-t bg-slate-300 bg-opacity-10">
                        <form onSubmit={handleAddProduct} className="card-body pt-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Product name*</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter product name" className="input input-bordered border-green-300 bg-slate-800" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Product Description*</span>
                                </label>
                                <input type="text" name='description' placeholder="Enter product description" className="input input-bordered border-green-300 bg-slate-800" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Brand*</span>
                                </label>
                                <input type="text" name='brand' placeholder="Enter product brand" className="input input-bordered border-green-300 bg-slate-800" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Category*</span>
                                </label>
                                <input type="text" name='category' placeholder="Enter product category" className="input input-bordered border-green-300 bg-slate-800" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Product Image Url*</span>
                                </label>
                                <input type="text" name='thumbnail' placeholder="Enter product image url" className="input input-bordered border-green-300 bg-slate-800" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Product Price*</span>
                                </label>
                                <input type="number" name='price' placeholder="Enter product price" className="input input-bordered border-green-300 bg-slate-800" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Product Stock*</span>
                                </label>
                                <input type="number" name='stock' placeholder="Enter product stock" className="input input-bordered border-green-300 bg-slate-800" required />
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-outline border-green-300 hover:bg-green-300 text-white">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;