import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Burgercomp.scss";

const Burgercomp = (props) => {

    const onButtonClick = () => {
        props.setOnbugger(false);
    }

    return (
        <div className='Buger' id='Buger'>
            <button className='ExitButton' onClick={onButtonClick}>X</button>
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
                    <Link to="/" className='logout'>로그아웃</Link>
                </li>
            </ul>
        </div>
    )
}

export default Burgercomp;