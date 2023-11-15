import React, { useState,useEffect, useContext } from 'react';
import { AuthContext } from "../utils/user-Api";
import store from "../store/store";
import { fetchQUESTDETAIL } from "../actions/fetchQuestdetail"
import { useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import './Text.scss';

const Text = () =>
{
  let { id } = useParams();
  const {qstatus,updatestatusUser,submitTextmission,user}  = useContext(AuthContext);
  const navigator = useNavigate();
  const [textfile,setTextfile] = useState("");

  useEffect(()=>{
    store.dispatch(fetchQUESTDETAIL(id));
  } ,[]) 

  const handleSubmit = async e => {
    e.preventDefault();
    submitTextmission(id,user.user_id,textfile);
    navigator("/quest");
  };

  const detailstate = useSelector(state => state.questdetail.QUESTDETAIL);
 
  return (
    <div className="Text">
      <div className="MainTitle">{detailstate.Name}</div>
      <div className="SubTitle">{detailstate.Subname} </div>
      <div className="Content">
        <div className="Explain">{detailstate.Detail}</div>
        <form onSubmit={handleSubmit}>
            <textarea className="Box-text" onChange={e => {setTextfile(e.target.value)}} placeholder='여기에 답을 입력해주세요.' />
            <button className="YesButton">
              <div className="Yes">확인</div>
            </button>
        </form>
      </div>
    </div>
  );
};

export default Text; 