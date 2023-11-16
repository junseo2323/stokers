// Buying.js
import './Follow.scss';
import React, { useState, useRef } from 'react';

const Follow = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      console.log('Selected Files:', selectedFiles);
      // 파일을 서버로 업로드하는 등의 로직을 추가할 수 있습니다.
    } else {
      console.log('No files selected.');
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="Follow">
      <div className="MainTitle">주식 길라잡이</div>
      <div className="SubTitle">차근차근 단계를 밟아가면서<br />새로운 주식 정보를 얻어봅시다.</div>

      <div className="Body">
        <div className="ExplainTitle">계좌를 만들어보자</div>
        <div className="ExplainBody">
          <div className="ExplainImage"></div>
        </div>
        <div className="Explain">토스 앱을 키고, 하단의 주식 탭을 클릭해주세요!</div>
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
