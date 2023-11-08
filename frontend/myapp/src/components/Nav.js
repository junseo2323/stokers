import React,{useContext,useState} from 'react';
import logo from "../image/logo123.png";
import hamberger from "../image/hamberger.svg";
import Burgercomp from "./Burgercomp";
import {Outlet} from "react-router"
import {AuthContext} from "../utils/user-Api";

import './Nav.scss';

const Nav = () => {
    const {logoutUser} = useContext(AuthContext);
    const [onbugger,setOnbugger] = useState(false);
    
    const onButtonClick = () => {
        setOnbugger(!onbugger);
    }

    return(
        <>
            <div className='Nav_componenet'>
                <img src={logo} className='logo' />
                <button onClick={onButtonClick} className='bugerbutton'>
                    <img src={hamberger} className='hamberger' />
                </button>
            </div>
            { onbugger?
                <Burgercomp/> : <></>
            }
            <Outlet />
        </>
    );
};

export default Nav;