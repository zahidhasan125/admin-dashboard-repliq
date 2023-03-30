import React from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import { AiOutlineUserAdd, AiOutlineLogin } from 'react-icons/ai';


const NavBar = () => {

    const submenu = <>
        <li>
            <Link>Home</Link>
            <Link>Products</Link>
            <Link>Cart</Link>
        </li>
        <li tabIndex={0}>
            <Link className="justify-between">
                Dashboard
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </Link>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 bg-opacity-25 rounded-box">
                <li>
                    <Link>Customers</Link>
                </li>
                <li>
                    <Link>Add Customer</Link>
                </li>
                <li>
                    <Link>Orders</Link>
                </li>
                <li>
                    <Link>Products</Link>
                </li>
                <li>
                    <Link>Add Products</Link>
                </li>
            </ul>
        </li>
    </>
    return (
        <div className="navbar border-b sticky top-0 z-40 px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 bg-opacity-25 rounded-box w-52">
                        {submenu}
                    </ul>
                </div>
                <Link to='/' className="uppercase border py-1 px-2 rounded-md font-semibold text-2xl hover:scale-110">E-Shop</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {submenu}
                </ul>
            </div>
            <div className="navbar-end gap-1">
                <Link to='/login' className="border border-red-300 text-red-300 py-2 px-3 rounded-md cursor-pointer font-bold bg-inherit hover:scale-105 uppercase flex items-center gap-2">
                    <FaPowerOff className='text-xl' />
                    Logout
                </Link>
                <Link className="border border-green-300 text-green-300 py-2 px-3 rounded-md cursor-pointer font-bold bg-inherit hover:scale-105 uppercase flex items-center gap-2">
                    <AiOutlineLogin className='text-xl font-bold' />
                    Login
                </Link>
                <Link to='/signup' className="border border-blue-300 text-blue-300 py-2 px-3 rounded-md cursor-pointer font-bold bg-inherit hover:scale-105 uppercase flex items-center gap-2">
                    <AiOutlineUserAdd className='text-xl font-bold' />
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default NavBar;