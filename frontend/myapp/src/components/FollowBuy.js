import React, { useState, useRef } from 'react';
import './Follow.scss';
import './DragStyles.scss';
// 이미지 import
import FollowBuy1 from '../image/FollowBuy1.PNG';
import FollowBuy2 from '../image/FollowBuy2.PNG';
import FollowBuy3 from '../image/FollowBuy3.PNG';
import FollowBuy4 from '../image/FollowBuy4.PNG';
import FollowBuy5 from '../image/FollowBuy5.PNG';

const FollowBuy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef(null);
  // 이미지 배열
  const imagePaths = [FollowBuy1, FollowBuy2, FollowBuy3, FollowBuy4, FollowBuy5];
  var currentImagePath = imagePaths[activeIndex];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.touches[0].clientX;
      const deltaX = touchStartX.current - touchEndX;

      if (!isDragging && Math.abs(deltaX) > 10) {
        setIsDragging(true);
      }

      if (isDragging) {
        if (deltaX > 50) {
          setActiveIndex((prevIndex) => Math.min(prevIndex + 1, imagePaths.length - 1));
          touchStartX.current = null; // 드래그 시 바로 터치 끝내기
        } else if (deltaX < -50) {
          setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
          touchStartX.current = null; // 드래그 시 바로 터치 끝내기
        }
      }
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
    setIsDragging(false);
  };

  return (
    <div
      className={`FollowBuy ${isDragging ? 'Dragging' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="MainTitle">주식 길라잡이</div>
      <div className="SubTitle">차근차근 단계를 밟아가면서<br />새로운 주식 정보를 얻어봅시다.</div>

      <div className="Body">
        <div className="ExplainTitle">주식을 구매해보자</div>
        <div className="ExplainBody">
          {/* 이미지를 직접 넣기 */}
          <div className="ExplainImage">
            <img src={currentImagePath} alt={`FollowBuy ${activeIndex + 1}`} />
          </div>
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

export default FollowBuy;
