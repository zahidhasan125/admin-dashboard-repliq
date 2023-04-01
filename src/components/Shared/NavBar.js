import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import { AiOutlineUserAdd, AiOutlineLogin } from 'react-icons/ai';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import CustomBtn from './CustomBtn';
import useAdmin from '../../hooks/useAdmin';


const NavBar = () => {
    const { user, userLogout } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    
    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure to Logout?')
        confirmLogout && userLogout().then().catch()
    }
    const submenu = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/products'>Products</Link>
        </li>
        <li>
            <Link to='/cart'>Cart</Link>
        </li>
        {
            isAdmin &&
            <li tabIndex={0}>
                <Link to='/dashboard' className="">
                    Dashboard
                        <svg className="fill-current md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        <svg className="fill-current hidden md:block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </Link>
                {
                    isAdmin &&
                    <ul className="menu menu-compact dropdown-content p-1 shadow bg-slate-700 bg-opacity-80 rounded-box z-20">
                        <li className='hover:bg-slate-500 hover:font-bold hover:text-white'>
                            <Link to='/dashboard/allcustomers'>Customers</Link>
                        </li>
                        <li className='hover:bg-slate-500 hover:font-bold hover:text-white'>
                            <Link to='/dashboard/addcustomers'>Add Customer</Link>
                        </li>
                        <li className='hover:bg-slate-500 hover:font-bold hover:text-white'>
                            <Link to='/dashboard/orderslist'>Orders</Link>
                        </li>
                        <li className='hover:bg-slate-500 hover:font-bold hover:text-white'>
                            <Link to='/dashboard/productslist'>Products</Link>
                        </li>
                        <li className='hover:bg-slate-500 hover:font-bold hover:text-white'>
                            <Link to='/dashboard/addproduct'>Add Products</Link>
                        </li>
                        <li className='hover:bg-slate-500 hover:font-bold hover:text-white'>
                            <Link to='/dashboard/profile'>Profile</Link>
                        </li>
                    </ul>
                }
            </li>
        }
        {
            user ?
                <li className='mt-1 md:hidden'>
                    <CustomBtn
                        borderColor="border-red-300"
                        textColor={"text-red-300"}
                        btnText={"Logout"}
                        handler={handleLogout}
                    >
                        <FaPowerOff className='text-xl' />
                    </CustomBtn>
                </li>
                :
                <div className='md:hidden'>
                    <li className='mb-1'>
                        <Link to={'/login'}>
                            <CustomBtn
                                borderColor="border-green-300"
                                textColor={"text-green-300"}
                                btnText={"Login"}
                            >
                                <AiOutlineLogin className='text-xl font-bold' />
                            </CustomBtn>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/signup'}>
                            <CustomBtn
                                borderColor="border-blue-300"
                                textColor={"text-blue-300"}
                                btnText={"Signup"}
                            >
                                <AiOutlineUserAdd className='text-xl font-bold' />
                            </CustomBtn>
                        </Link>
                    </li>
                </div>
        }

    </>

    return (
        <div className="navbar px-6">
            <div className="navbar-start w-full justify-between">
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="ps-0 cursor-pointer md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 bg-opacity-90 rounded-box">
                        {submenu}
                    </ul>
                </div>
                <Link to='/' className="uppercase border-double border-2 py-1 px-2 rounded-md font-semibold text-2xl hover:scale-110 ease-in-out duration-300">E-Shop</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 divide-x divide-slate-700">
                    {submenu}
                </ul>
            </div>
            <div className="navbar-end hidden md:flex gap-1">
                {user ?
                    <CustomBtn
                        borderColor="border-red-300"
                        textColor={"text-red-300"}
                        btnText={"Logout"}
                        handler={handleLogout}
                        extraClass='hover:scale-105 hover:bg-gray-900 ease-in-out duration-300'
                    >
                        <FaPowerOff className='text-xl' />
                    </CustomBtn>
                    :
                    <>
                        <Link to={'/login'}>
                            <CustomBtn
                                borderColor="border-green-300"
                                textColor={"text-green-300"}
                                btnText={"Login"}
                                extraClass='hover:scale-105 hover:bg-gray-900 ease-in-out duration-300'
                            >
                                <AiOutlineLogin className='text-xl font-bold' />
                            </CustomBtn>
                        </Link>
                        <Link to={'/signup'}>
                            <CustomBtn
                                borderColor="border-blue-300"
                                textColor={"text-blue-300"}
                                btnText={"Signup"}
                                extraClass='hover:scale-105 hover:bg-gray-900 ease-in-out duration-300'
                            >
                                <AiOutlineUserAdd className='text-xl font-bold' />
                            </CustomBtn>
                        </Link>
                    </>
                }
            </div>
        </div>
    );
};

export default NavBar;