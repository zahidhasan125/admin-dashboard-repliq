import React from 'react';
import NavBar from '../components/Shared/NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Main;