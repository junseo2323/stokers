import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Follow.scss';
import './DragStyles.scss';
// 이미지 import
import Follow1 from '../image/Follow1.png';
import Follow2 from '../image/Follow2.png';
import Follow3 from '../image/Follow3.png';
import Follow4 from '../image/Follow4.png';
import Follow5 from '../image/Follow5.png';
import FollowBuy1 from '../image/FollowBuy1.png';
import FollowBuy2 from '../image/FollowBuy2.png';
import FollowBuy3 from '../image/FollowBuy3.png';
import FollowBuy4 from '../image/FollowBuy4.png';
import FollowBuy5 from '../image/FollowBuy5.png';
 
const Follow = () => {
  let { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef(null);
  // 이미지 배열
  var imagePaths = [Follow1, Follow2, Follow3, Follow4, Follow5];

  

  switch(parseInt(id)){
    case 11:
      console.log("test")
      imagePaths = [Follow1, Follow2, Follow3, Follow4, Follow5];
      break;
    case 2:
      imagePaths = [FollowBuy1, FollowBuy2, FollowBuy3, FollowBuy4, FollowBuy5];
      break;
    default:

     break;
  }; 


  var currentImagePath = imagePaths[activeIndex];;


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
    <div className='follow'>
      <div
        className={`Follow ${isDragging ? 'Dragging' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="MainTitle">주식 길라잡이</div>
        <div className="SubTitle">차근차근 단계를 밟아가면서<br />새로운 주식 정보를 얻어봅시다.</div>

        <div className="Body">
          <div className="ExplainTitle">계좌를 만들어보자</div>
          <div className="ExplainBody">

            <div className="ExplainImage">
              <img src={currentImagePath} alt={`Follow ${activeIndex + 1}`} />
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
    </div>
  );
};

export default Follow;
