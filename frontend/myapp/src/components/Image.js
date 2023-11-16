import './Image.scss';
import Swal from "sweetalert2";
import upload from "../image/UploadIcon.png";
import success from "../image/Success.png";
import React, { useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../utils/user-Api';

const Image = () => {
  let { id } = useParams();
  const { updatestatusUser,qstatus,submitImagemission, user } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState(null);
  const [questId, setQuestId] = useState(id);
  const fileInputRef = useRef(null);
  const Toast = Swal.mixin({
    toast: true,
    position: 'center-center',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
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
    if(imageFile==null){
      Toast.fire({
        icon: 'warning',
        title: '사진을 먼저 업로드해주세요!!!'
    })
    }else {
      const response = await submitImagemission(user.user_id, imageFile, questId);
      if (response.ans.ocr_result) {
        Toast.fire({
          icon: 'success',
          title: '성공!!!'
        });
        updatestatusUser(user.username,qstatus[user.user_id-1].status+1);
        setTimeout(function(){
          window.location.replace("/quest");
      }, 1500); //1초 뒤에 메인 퀘스트 페이지로 전황

      } else {
        Toast.fire({
          icon: 'error',
          title: '정확한 캡쳐 화면을 넣어주세요!!!'
        });
      }
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handleUploadIconClick = (e) => {
    e.preventDefault();
    openFileInput();
  };

  return (
    <div className="Image" onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="MainTitle">주식 1주 구매하기</div>
      <div className="SubTitle">주식을 시작하면서,<br />1주를 구매해봅시다.</div>

      <div className="Content">
        <div className="ExplainBotton">
          <div className="ExplainTit">주식을 구매한 후, 매도 완료 사진을 <br />아래에 업로드 해주세요!</div>
        </div>
        <form onSubmit={handleFormSubmit}>

        <div className="UploadBox">
            <div
              onClick={handleUploadIconClick}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >{imageFile ? 
              <img className="UploadIcon" src={success} /> : 
              <img className="UploadIcon" src={upload} />  
              }

            </div>
            <input
              type="file" 
              id="fileInput"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
        </div>
        <button className="YesBotton">
          <div className="Yes">확인</div>
        </button>
        </form>

      </div>
    </div>
  );
};

export default Image;
