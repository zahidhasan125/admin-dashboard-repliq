import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const submenu = <>
        <li>
            <a>Home</a>
            <a>Products</a>
            <a>Cart</a>
        </li>
        <li tabIndex={0}>
            <a className="justify-between">
                Dashboard
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 bg-opacity-25 rounded-box">
                <li>
                    <a>Customers</a>
                </li>
                <li>
                    <a>Add Customer</a>
                </li>
                <li>
                    <a>Orders</a>
                </li>
                <li>
                    <a>Products</a>
                </li>
                <li>
                    <a>Add Products</a>
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
                <Link to='/' className="uppercase border py-1 px-2 rounded-md font-semibold text-2xl">E-Shop</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {submenu}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-inherit">Login</a>
            </div>
        </div>
    );
};

export default NavBar;