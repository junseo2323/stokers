import React, { useState, useRef } from 'react';
import './News.scss';
import category1 from '../image/category1.png';


const News = () => {

  return (
    <div className = "News">
      <div className="MainTitle">오늘의 뉴스</div>
      <div className="SubTitle">각 카테고리별 뉴스를 확인하고<br />투자를 진행해봅시다!</div>

      <div className="Body">
        <div className="Title">
          <img className="TitleImage" src={category1}></img>
          <div className="TitleName">이차전지</div>
        </div>
        <div className="Explain">이차전지 주식테마는 전기차 및 재생에너지 기술 증가에 따른 수요 증가로 인해 관련 기업들의 주식이 주목받는 투자 테마입니다.
</div>
        <div className="NewsBody">
          <div className="NewsInfo">
            <div className="NewsTitle">전기연 이차전지·3D프린팅 기술, 국가연구개발 우수성과 선정</div>
            <div className="NewsDate">조선비즈· 9시간 전</div>
          </div>
          <div className="NewsImage"></div>
        </div>
      </div>
      </div>
  );
};

export default News;
