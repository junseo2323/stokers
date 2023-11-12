import React, { useContext, useState } from 'react';
import logo from "../image/logo123.png";
import hamberger from "../image/hamberger.svg";
import Burgercomp from "./Burgercomp";
import { Outlet } from "react-router"
import { AuthContext } from "../utils/user-Api";
import { Link } from 'react-router-dom';
import "./Burgercomp.scss";

import './Nav.scss';

const Nav = () => {
    const { logoutUser } = useContext(AuthContext);
    const [onbugger, setOnbugger] = useState(false);

    const onButtonClick = () => {
        setOnbugger(!onbugger);
        document.querySelector('.Buger').setAttribute("id", "OnBuger");
        document.querySelector('.element_container').setAttribute("id", "OffBugerElement");
        
    }

    const onBugerClick = () => {
        setOnbugger(!onbugger);
        document.querySelector('.Buger').setAttribute("id", "OffBuger");
        document.querySelector('.element_container').setAttribute("id", "OnBugerElement");

    }

    return (
        <>
            <div className='Nav_componenet' id='Nav_componenet'>
                <div className='Buger' id='OffBuger'>
                <button className='ExitButton' onClick={onBugerClick}>X</button>
                <ul>
                    <li>
                        <Link to="/">개인정보 관리</Link>
                    </li>
                    <li>
                        <Link to="/">퀘스트</Link>
                    </li>
                    <li>
                        <Link to="/">퀘스트 랭크</Link>
                    </li>
                    <li>
                        <Link to="/">단기 / 중장기 추천</Link>
                    </li>
                    <li>
                        <Link to="/">최근 주식 이슈 요약</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={logoutUser} className='logout'>로그아웃</Link>
                    </li>
                </ul>
                </div>
                <div className='element_container' id='OnBugerElement'>
                    <img src={logo} className='logo' />
                                        
                    <button onClick={onButtonClick} className='bugerbutton'>
                        <img src={hamberger} className='hamberger' />
                    </button>
                </div>
            </div>
            
            
            <Outlet />
        </>
    );
};

export default Nav;