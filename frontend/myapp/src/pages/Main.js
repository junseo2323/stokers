import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

const Main = () => {
    const { qstatus, user } = useContext(AuthContext);
    const [status, setStatus] = useState(0);
    const [level, setLevel] = useState(0);
    const [image, setImage] = useState(image_level1);
    const changeStatus = () => {
        try {
            setStatus(qstatus[user.user_id - 1].status);
        } catch (err) {
            console.log(err);
        }
    }

    const chageImage = () => {
        console.log(level);
        switch(level){
            case 0:
                setImage(image_level1);
                break;
            case 1:
                setImage(image_level2);
                break;
            case 2:
                setImage(image_level3);
                break;
            case 3:
                setImage(image_level4);  
                break;
            case 4:
                setImage(image_level5);  
                break;
            default:
                setImage(image_level5);
                break;
        }
    }

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

    useEffect(()=>{
        setLevel(parseInt(status/10));
        changeStatus();
        chageImage();
    },[qstatus])
    
    const levelname = ['가내수공업','스타트업','중소기업','중견기업','대기업','마스터'];

    return (
        <div className="Main">
            <div className="Container1">
                <div className="Wrapper">
                    <img src={image} className='Floating'></img>
                </div>
                <div className="Logo_container">
                    <img src={logo} className='Logo'></img>
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
                    <div className="Interest_name">이차전지</div>
                </div>
            </div>
            <div className="Container2">
                <button className="Quest_button">
                    <div className="Maintext">퀘스트</div>
                    <div className="Subtext">주식 시장 가이드</div>
                </button>
                <div className="News">
                    <ul>
                        <h3>오늘의 뉴스</h3>
                        <li><Link>전기연 이차전지·3D프린팅 기술, 국가연구개발 우수성과 선정</Link></li>
                        <li><Link>"공매도 금지 수혜"  이차전지 레버리지 ETF에 개인 매수세</Link></li>
                        <li><Link>제이스텍, 171억 규모 이차전지 배터리셀 제조공정 수주</Link></li>
                        <li><Link>수소·이차전지 유치해야…정부, 울산경자구역 추가 지정 속도</Link></li>
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