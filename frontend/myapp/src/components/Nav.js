import React, { useContext, useState } from 'react';
import logo from "../image/logo123.png";
import hamberger from "../image/hamberger.svg";
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
    const onLinkClick = () => {
        const element = document.getElementsByClassName('.Buger');
        element.style.display = "none";
        onBugerClick();
        element.style.display = "block";
    }

    return (
        <>
            <div className='Nav_componenet' id='Nav_componenet'>
                <div className='Buger' id='OffBuger'>
                    <button className='ExitButton' onClick={onBugerClick}>X</button>
                    <ul>
                        <li>
<<<<<<< HEAD
                            <Link to="/">홈</Link>
=======
                            <Link to="/main" onClick={onLinkClick}>홈</Link>
>>>>>>> a366a61348552d5936dcb17a75855da00188a683
                        </li>
                        <li>
                            <Link to="/quest" onClick={onLinkClick}>퀘스트</Link>
                        </li>
                        <li>
                            <Link to="/rank" onClick={onLinkClick}>퀘스트 랭크</Link>
                        </li>
                        <li>
<<<<<<< HEAD
                            <Link to="/">오늘의 뉴스</Link>
                        </li>
                        <li>
                            <Link to="/">다른 컨텐츠</Link>
=======
                            <Link to="/news" onClick={onLinkClick}>오늘의 뉴스</Link>
                        </li>
                        <li>
                            <Link to="/follow" onClick={onLinkClick}>주식 길라잡이</Link>
>>>>>>> a366a61348552d5936dcb17a75855da00188a683
                        </li>
                        <li>
                            <Link to="/login" onClick={logoutUser} className='logout'>로그아웃</Link>
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