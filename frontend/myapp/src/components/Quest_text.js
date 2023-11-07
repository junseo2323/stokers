import React, { useState,useEffect } from 'react';
import store from "../store/store";
import { fetchQUIZ } from "../actions/fetchQuiz"
import { fetchQUESTDETAIL } from "../actions/fetchQuestdetail"
import { useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import './Quest_text.scss';

const Quest_text = () =>
{
  let { id } = useParams();

  useEffect(()=>{
    store.dispatch(fetchQUESTDETAIL(id));
  } ,[])

  const detailstate = useSelector(state => state.questdetail.QUESTDETAIL);

  return (
    <div className="Text">
      <div className="MainTitle">{detailstate.Name}</div>
      <div className="SubTitle">{detailstate.Subname} </div>
      <div className="Content">
        <div className="Explain">{detailstate.Detail}</div>
        <textarea className="Box-text" placeholder='여기에 답을 입력해주세요.'></textarea>
        <button className="YesButton">
          <div className="Yes">확인</div>
        </button>
      </div>
    </div>
  );
};

export default Quest_text; 