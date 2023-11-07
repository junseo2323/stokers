import React from 'react';
import logo from "../image/logo123.png"
import profile from "../image/profile.png"
import {Outlet} from "react-router"

import './Nav.scss';

const Nav = () => {

    return(
        <>
            <div className='Nav_componenet'>
                <img src={logo} className='logo' />
                <img src={profile} className='profile' />
            </div>
            <Outlet />
        </>
    );
};

export default Nav;