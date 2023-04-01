import React, { useContext } from 'react';
import { BsBagCheck } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { FcAddDatabase, FcList } from 'react-icons/fc';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdPersonAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            {
                isAdmin &&
                <>
                    <h2 className='text-center text-5xl font-semibold my-8 border-b-2 pb-2'>Welcome Home Admin!</h2>
                    <ul className='m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4'>
                        <Link to="/dashboard/allcustomers" className="border-green-300 border p-4 rounded-md hover:bg-slate-900">
                            <li className="flex items-center gap-3 text-4xl text-center hover:scale-105 ease-in-out duration-200"><HiOutlineUserGroup className='text-2xl' />
                                All Customers
                            </li>
                        </Link>
                        <Link to="/dashboard/addcustomers" className="border-green-300 border p-4 rounded-md hover:bg-slate-900">
                            <li className="flex items-center gap-3 text-4xl text-center hover:scale-105 ease-in-out duration-200"><MdPersonAdd className='text-2xl' />
                                Add Customers
                            </li>
                        </Link>
                        <Link to="/dashboard/orderslist" className="border-green-300 border p-4 rounded-md hover:bg-slate-900">
                            <li className="flex items-center gap-3 text-4xl text-center hover:scale-105 ease-in-out duration-200"><BsBagCheck className='text-2xl' />
                                Orders List
                            </li>
                        </Link>
                        <Link to="/dashboard/productslist" className="border-green-300 border p-4 rounded-md hover:bg-slate-900">
                            <li className="flex items-center gap-3 text-4xl text-center hover:scale-105 ease-in-out duration-200"><FcList className='text-2xl' />
                                Products List
                            </li>
                        </Link>
                        <Link to="/dashboard/addproduct" className="border-green-300 border p-4 rounded-md hover:bg-slate-900">
                            <li className="flex items-center gap-3 text-4xl text-center hover:scale-105 ease-in-out duration-200"><FcAddDatabase className='text-2xl' />
                                Add Product
                            </li>
                        </Link>
                        <Link to="/dashboard/profile" className="border-green-300 border p-4 rounded-md hover:bg-slate-900">
                            <li className="flex items-center gap-3 text-4xl text-center hover:scale-105 ease-in-out duration-200"><CgProfile className='text-2xl' />
                                Profile
                            </li>
                        </Link>
                        <Link to="/" className="border-green-300 border p-4 rounded-md hover:bg-slate-900">
                            <li className="flex items-center gap-3 text-4xl text-center hover:scale-105 ease-in-out duration-200"><FaHome className='text-2xl' />
                                View Site Home
                            </li>
                        </Link>
                    </ul>
                </>
            }
        </div>
    );
};

export default DashboardHome;