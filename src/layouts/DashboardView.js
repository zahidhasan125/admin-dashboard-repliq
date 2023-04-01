import React, { useContext } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FcAddDatabase, FcList } from 'react-icons/fc';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdPersonAdd } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";
import { FaHome } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardView = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            {
                isAdmin &&
                <div className="navbar-end lg:hidden w-auto">
                    <div className="dropdown">
                        <label tabIndex={0} htmlFor="dashboard-drawer" className="btn btn-ghost btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                </div>
            }
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-gradient-to-tr from-gray-950 via-gray-800 to-gray-950 p-6">
                    {/* Outlet content goes here */}
                    <Outlet />
                </div>
                <div className="drawer-side bg-gradient-to-tl from-gray-950 via-gray-800 to-gray-950 md:border-r border-gray-700">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard"><AiOutlineHome className='text-2xl' />Dashboard Home</Link></li>
                        {
                            isAdmin &&

                            <>
                                <li>
                                    <Link to="/dashboard/allcustomers"><HiOutlineUserGroup className='text-2xl' />
                                        All Customers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/addcustomers"><MdPersonAdd className='text-2xl' />
                                        Add Customers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/orderslist"><BsBagCheck className='text-2xl' />
                                        Orders List
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/productslist"><FcList className='text-2xl' />
                                        Products List
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/addproduct"><FcAddDatabase className='text-2xl' />
                                        Add Product
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/profile"><CgProfile className='text-2xl' />
                                        Profile
                                    </Link>
                                </li>

                            </>
                        }
                        <li>
                            <Link to="/"><FaHome className='text-2xl' />
                                View Site Home
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardView;