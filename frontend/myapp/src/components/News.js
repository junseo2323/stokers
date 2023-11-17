import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../utils/user-Api";

import './News.scss';
import category1 from '../image/category1.png';
import category2 from '../image/category2.png';
import category3 from '../image/category3.png';
import category4 from '../image/category4.png';
import category5 from '../image/category5.png';
import category6 from '../image/category6.png';
import category7 from '../image/category7.png';
import category8 from '../image/category8.png';
import category9 from '../image/category9.png';
import category10 from '../image/category10.png';
import category11 from '../image/category11.png';
import category12 from '../image/category12.png';
import category13 from '../image/category13.png';
import category14 from '../image/category14.png';
import category15 from '../image/category15.png';
import category16 from '../image/category16.png';


const News = () => {
  let { theme } = useParams();
  const test = theme;
  const { fetchNewsData } = useContext(AuthContext);
  const [newsData,setNewsData] = useState([]);
  let controlimg;

function formatDate(pubDate) {
  const months = [
    "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
  ];

  const date = new Date(pubDate);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${month} ${day} (${getDayOfWeek(date)}) ${hours}시 ${minutes}분`;
}

function getDayOfWeek(date) {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  return daysOfWeek[date.getDay()];
}

function calculateHoursAgo(pubDate) {
  const currentDate = new Date();
  const publishedDate = new Date(pubDate);
  
  const timeDifference = currentDate - publishedDate;
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));

  return hoursAgo;
}

  useEffect(()=>{
    const article = test+"주식";
    const res = fetchNewsData(article);
    res.then(
    data => {
        setNewsData(data);
    }
  )
},[theme])
const removeHtmlTags = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  return doc.body.textContent || "";
};

  
  switch (theme) {
    case '이차전지':
      controlimg = category1;
      break;
    case '반도체':
      controlimg = category2;
      break;
    case '의복':
      controlimg = category3;
      break;
    case '원자력':
      controlimg = category4;
      break;
    case '주류':
      controlimg = category5;
      break;
    case '여행':
      controlimg = category6;
      break;
    case '바이오':
      controlimg = category7;
      break;
    case '친환경':
      controlimg = category8;
      break;
    case '스마트폰':
      controlimg = category9;
      break;
    case '엔터테이먼트':
      controlimg = category10;
      break;
    case '기계':
      controlimg = category11;
      break;
    case '부동산':
      controlimg = category12;
      break;
    case '항공':
      controlimg = category13;
      break;
    case '조선':
      controlimg = category14;
      break;
    case '의료기기':
      controlimg = category15;
      break;
    case '방위산업':
      controlimg = category16;
      break;
    default:
      controlimg = '';
  };

  const sub = {
    '이차전지' : "이차전지 주식테마는 전기차 및 재생에너지 기술 증가에 따른 수요 증가로 인해 관련 기업들의 주식이 주목받는 투자 테마입니다.",
    '반도체' : "반도체 주식테마는 전자제품의 증가와 혁신, 5G 네트워크 및 인공지능 등에 대한 수요 증가로 인해 성장하고 있는 주식 시장 트렌드를 나타냅니다.",
    '원자력' : "원자력 주식테마는 원자력 발전 및 핵에너지 기술에 대한 관심과 수요 증가에 따라 관련 기업들의 주가가 영향을 받는 주식 시장 동향을 나타냅니다",
    '의복' : "의복 주식테마는 패션 및 의류 산업에서의 소비 동향, 브랜드의 성과, 온라인 쇼핑 트렌드 등을 반영하여 의류 회사들의 주가 동향을 나타내는 주식 시장 테마입니다.",
    '주류' : "주류 주식테마는 주류 산업에서의 소비 트렌드, 맥주, 와인, 양주 등 다양한 음료 시장의 성장과 수요 변화에 따라 주류 기업들의 주가 동향을 반영한 주식 시장 동향을 나타냅니다",
    '여행' : "여행 및 리오프닝 관련 주식테마는 여행 및 관광 산업의 회복과 성장에 기인한 항공사, 호텔, 여행사 등 관련 기업들의 주가 동향을 나타내는 주식 시장 동향을 의미합니다",
    '바이오' : "바이오 주식테마는 생명 과학 및 생명공학 분야의 혁신과 의료 기술 발전에 따라 생물학적 제품 및 의약품 회사들의 주가 동향을 반영한 주식 시장 동향을 나타냅니다",
    '친환경' : "친환경 주식테마는 환경 보호 및 지속가능성에 중점을 둔 기업들, 태양광, 풍력, 전기 자동차 등 친환경 기술 분야의 성장과 관련된 주식 시장 동향을 나타냅니다",
    '스마트폰' : "스마트폰 주식테마는 모바일 기술의 발전과 스마트폰 수요 증가에 따라 스마트폰 제조사 및 관련 기술 기업들의 주가 동향을 반영한 주식 시장 동향을 나타냅니다",
    '엔터테이먼트' : "엔터테인먼트 주식테마는 미디어, 영화, 음악, 게임 등 엔터테인먼트 산업에서의 성장과 소비 트렌드에 기반하여 관련 기업들의 주가 동향을 반영한 주식 시장 동향을 나타냅니다",
    '기계' : "기계 주식테마는 산업 자동화, 로봇 기술, 제조업 혁신 등 기계 및 자동화 기술에 관련된 기업들의 주가 동향을 반영한 주식 시장 동향을 나타냅니다",
    '부동산' : "부동산 주식테마는 부동산 시장의 동향과 부동산 관련 기업들의 성과에 주목하여 부동산 투자 및 건설 업체의 주가 동향을 나타내는 주식 시장 테마를 의미합니다",
    '항공' : "항공 주식테마는 항공 산업의 성장과 항공 여행 수요의 변화에 따라 항공사 및 항공 기업들의 주가 동향을 반영한 주식 시장 동향을 나타냅니다",
    '조선' : "조선 주식테마는 조선업 및 해운 산업의 경제적 영향과 선박 건조, 해운 및 해양 산업 동향을 반영하여 조선업 및 해운 기업들의 주가 동향을 나타내는 주식 시장 테마입니다",
    '의료기기' : "의료기기 주식테마는 의료 기술 및 의료기기 분야의 혁신과 수요 증가에 따라 의료기기 제조 및 개발 기업들의 주가 동향을 나타내는 주식 시장 동향을 의미합니다",
    '방위산업' : "방위산업 주식테마는 국방 및 안보 관련 분야에서의 수요 증가와 군사 기술 혁신에 따라 방위산업 기업들의 주가 동향을 나타내는 주식 시장 동향을 의미합니다",

  };

  return (
    <div className = "News">
      <div className="MainTitle">오늘의 뉴스</div>
      <div className="SubTitle">각 카테고리별 뉴스를 확인하고<br />투자를 진행해봅시다!</div>

      <div className="Body">
        <div className="Title">
          <img className="TitleImage" src={controlimg}></img>
          <div className="TitleName">{theme}</div>
        </div> 
        <div className="Explain">{sub[theme]}</div>
        <div className="NewsBody">
          <div className="NewsInfo">
          {newsData.map((news) => (
            <li key={news.link}>
                <a href={news.link} target="_blank" rel="noopener noreferrer">
                <div className="NewsTitle">{removeHtmlTags(news.title)}</div>
                <div className="NewsDate">{formatDate(news.pubDate)} • {calculateHoursAgo(news.pubDate)}시간 전</div>
                </a>
            </li>
            ))}
          </div>
        </div>
      </div>
      </div>
  );
};

export default News;
