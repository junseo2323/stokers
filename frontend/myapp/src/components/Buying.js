// Buying.js
import './Buying.scss';
import React, { useState, useRef } from 'react';

const Buying = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

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
    // 파일 선택 input을 클릭합니다.
    fileInputRef.current.click();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Buying" onDrop={handleDrop} onDragOver={preventDefault}>
      <div className="MainTitle">주식 1주 구매하기</div>
      <div className="SubTitle">주식을 시작하면서,<br />1주를 구매해봅시다.</div>

      <div className="Content">
        <div className="ExplainBotton">
          <div className="ExplainTit">주식을 구매한 후, 매도 완료 사진을 <br />아래에 업로드 해주세요!</div>
        </div>
        <div
          className="UploadBox"
          onClick={openFileInput}
          onDrop={handleDrop}
          onDragOver={preventDefault}
        >
          {/* 파일 업로드를 위한 input 요소 */}
          <div className="UploadIcon"></div>
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            multiple
          />
        </div>
        <div className="YesBotton">
          <div className="Yes" onClick={handleUpload}>확인</div>
        </div>
      </div>
    </div>
  );
};

export default Buying;
