
import './Follow.scss';
import React, { useState, useRef } from 'react';

const Follow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="Follow">
      <div className="MainTitle">주식 길라잡이</div>
      <div className="SubTitle">차근차근 단계를 밟아가면서<br />새로운 주식 정보를 얻어봅시다.</div>

      <div className="Body">
        <div className="ExplainTitle">계좌를 만들어보자</div>
          <div className="ExplainBody">
            <div className="ExplainImage"></div>
          </div>
        <div className="PageNumber">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`CircleNum ${activeIndex === index ? 'active' : 'inactive'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Follow;
