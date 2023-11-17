import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../utils/user-Api";

//사용자의 레벨에 따른 이미지 5가지

import image_level1 from '../image/house.png'
import image_level2 from '../image/startup.png'
import image_level3 from '../image/low.png'
import image_level4 from '../image/middle.png'
import image_level5 from '../image/high.png'

import gsap, { Power1 } from 'gsap'
import logo from '../image/logo123.png'
import "./Main.scss"
import { Link, Navigate } from "react-router-dom";

const Main = () => {
    const { qstatus, user, fetchNewsData, mtheme } = useContext(AuthContext);
    const [newsData, setNewsData] = useState([]);
    const [status, setStatus] = useState(0);
    const [theme, setTheme] = useState("이차전지");
    const [level, setLevel] = useState(0);
    const [image, setImage] = useState(image_level1);
    const Navigate = useNavigate();

    const removeHtmlTags = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || "";
    };

    const changeStatus = () => {
        try {
            setStatus(qstatus[user.user_id - 1].status);
            setTheme(mtheme[user.user_id - 1].theme);
        } catch (err) {
            console.log(err);
        }
    }

    const controlImg = [image_level1, image_level2, image_level3, image_level4, image_level5];


    function floatingObject(selector, delay, size) {
        gsap.to(selector, 1.5, {
            y: size,
            repeat: -1, // -1 무한반복
            yoyo: true, // 애니메이션 되돌아오기(설정안할 시 끈킴)
            ease: Power1.easeInOut, // 타이밍함수
            delay: 0 // 지연시간
        })
    }
    useEffect(() => {
        floatingObject('.Floating', 3, 10);
    }, [qstatus]);
    useEffect(() => {

    }, []);
    useEffect(() => {
        const article = theme + "산업";
        const res = fetchNewsData(article);
        res.then(
            data => {
                setNewsData(data);
            }
        )
        setLevel(parseInt(status / 10));
        changeStatus();

    }, [qstatus])

    const levelname = ['가내수공업', '스타트업', '중소기업', '중견기업', '대기업', '마스터'];

    const onClickButton = () => {
        Navigate('/quest');
    }

    return (
        <div className="Main">
            <div className="Container1">
                <div className="Wrapper">
                    <img src={controlImg[level]} className='Floating'></img>
                </div>
                <div className="User_information">
                    <div className="Level">{levelname[level]}</div>
                    <div className="Name">{user.username}</div>
                </div>
                <div className="Quest">
                    <div className="Quest_process">퀘스트 진행도</div>
                    <div className="Quest_level">{status}단계</div>
                </div>
                <div className="Interest">
                    <div className="Interest_area">관심분야</div>
                    <div className="Interest_name">{theme}</div>
                </div>
            </div>
            <div className="Container2">
                <button className="Quest_button" onClick={onClickButton}>
                    <div className="Maintext" >퀘스트</div>
                    <div className="Subtext">주식 시장 가이드</div>
                </button>
                <div className="News">
                    <ul>
                        <h3>오늘의 뉴스</h3>
                        {newsData.map((news) => (
                            <li key={news.link}>
                                <a href={news.link} target="_blank" rel="noopener noreferrer">
                                    {removeHtmlTags(news.title)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="Bottom">
                    <button class="Item1">최근 주식이슈 요약</button>
                    <button class="Item2">단기 / 중장기 추천</button>
                    <button class="Item3">개인 추천 종목</button>
                    <button class="Item4">item4</button>
                </div>
            </div>
        </div>
    );
}

export default Main;