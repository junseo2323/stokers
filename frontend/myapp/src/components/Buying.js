import './Buying.scss';
import React, { useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../utils/user-Api';

const Buying = () => {
  let { id } = useParams();
  const { submitImagemission, user } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState(null);
  const [questId] = useState(id);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log('Drag Over');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    console.log('Dropped Files:', droppedFiles);
    handleDroppedFiles(droppedFiles);
  };

  const handleDroppedFiles = (files) => {
    if (files && files.length > 0) {
      const droppedFile = files[0];
      setImageFile(droppedFile);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await submitImagemission(user.user_id, imageFile, questId);
    console.log(user.user_id, imageFile, parseInt(questId));
    console.log(response);
    alert(response.data);
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handleUploadIconClick = (e) => {
    e.preventDefault();
    openFileInput();
  };

  return (
    <div className="Buying" onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="MainTitle">주식 1주 구매하기</div>
      <div className="SubTitle">주식을 시작하면서,<br />1주를 구매해봅시다.</div>

      <div className="Content">
        <div className="ExplainBotton">
          <div className="ExplainTit">주식을 구매한 후, 매도 완료 사진을 <br />아래에 업로드 해주세요!</div>
        </div>
        <div className="UploadBox">
          <form onSubmit={handleFormSubmit}>
            <div
              className="UploadIcon"
              onClick={handleUploadIconClick}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            ></div>
            <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </form>
        </div>
        <button className="YesBotton">
          <div className="Yes">확인</div>
        </button>
      </div>
    </div>
  );
};

export default Buying;
