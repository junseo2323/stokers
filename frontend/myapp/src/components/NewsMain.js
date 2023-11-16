import React, { useState, useRef } from 'react';
import './NewsMain.scss';
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

const NewsMain = () => {

  return (
    <div className = "NewsMain">
      <div className="MainTitle">오늘의 뉴스</div>
      <div className="SubTitle">각 카테고리별 뉴스를 확인하고<br />투자를 진행해봅시다!</div>

      <div className="Body">
        <div className="ExplainTit">헤드라인</div>
        <div className="Headline"></div>
        <div className="CategoryTit">카테고리</div>
        <div className="CategoryRow">
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category1} alt="Category 1" />
            <div className="CategoryName">이차전지</div>
          </div>
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category2} alt="Category 2" />
            <div className="CategoryName">반도체</div>
          </div>
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category3} alt="Category 3" />
            <div className="CategoryName">의복</div>
          </div>
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category4} alt="Category 4" />
            <div className="CategoryName">원자력</div>
          </div>
        </div>
        <div className="CategoryRow">
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category5} alt="Category 5" />
            <div className="CategoryName">주류</div>
          </div>
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category6} alt="Category 6" />
            <div className="CategoryName">여행</div>
          </div>
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category7} alt="Category 7" />
            <div className="CategoryName">바이오</div>
          </div>
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category8} alt="Category 8" />
            <div className="CategoryName">친환경</div>
          </div>
        </div>
        <div className="CategoryRow">
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category9} alt="Category 9" />
            <div className="CategoryName">스마트폰</div>
          </div>
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category10} alt="Category 10" />
            <div className="CategoryName">엔터테이먼트</div>
          </div>
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category11} alt="Category 11" />
            <div className="CategoryName">기계</div>
          </div>
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category12} alt="Category 12" />
            <div className="CategoryName">부동산</div>
          </div>
        </div>
        <div className="CategoryRow">
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category13} alt="Category 13" />
            <div className="CategoryName">항공</div>
          </div>
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category14} alt="Category 14" />
            <div className="CategoryName">조선</div>
          </div>
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category15} alt="Category 15" />
            <div className="CategoryName">의료기기</div>
          </div>
          <div className="CategoryIn">
          <img className="CategoryIcon" src={category16} alt="Category 16" />
            <div className="CategoryName">방위산업</div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default NewsMain;
