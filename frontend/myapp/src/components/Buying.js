// Buying.js
import './Buying.scss';
import React, { useState, useRef,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from "../utils/user-Api";


const Buying = () => {
  let { id } = useParams();
  const {submitImagemission,qstatus,updatestatusUser,user}  = useContext(AuthContext);
  const [imageFile, setImageFile] = useState(null);
  const [questId, setQuestId] = useState(id); // 여기에 적절한 초기값을 설정하세요
  const [username, setUsername] = useState(user.ser_id); // 여기에 적절한 초기값을 설정하세요
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    const response = submitImagemission(user.user_id,imageFile,questId);
    console.log(user.user_id,imageFile,parseInt(questId));
    console.log(response);
    alert(response.data);
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  }; 

  return (
    <div className="Buying">
      <div className="MainTitle">주식 1주 구매하기</div>
      <div className="SubTitle">주식을 시작하면서,<br />1주를 구매해봅시다.</div>

      <div className="Content">
        <div className="ExplainBotton">
          <div className="Explain">주식을 구매한 후, 매도 완료 사진을</div>
          <div className="Explain">아래에 업로드 해주세요!</div>
        </div>
        <div className="UploadBox">
        <form onSubmit={handleFormSubmit}>
          <div className="UploadIcon" onClick={openFileInput}></div>
            <input
              type="file"
              id="fileInput"
              ref={fileInputRef} 
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          <button className="YesBotton">
            <div className="Yes">확인</div>
          </button>
        </form>
        </div>
      </div>
    </div>

  );
};

export default Buying;
