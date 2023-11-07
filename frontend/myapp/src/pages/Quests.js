import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../store/store";
import "./Quests.scss"
import { fetchQUEST } from "../actions/fetchQuest"

store.dispatch(fetchQUEST());

const Quests = () => {
  const state = useSelector(state => state.quest.QUEST);
  const [type,setType] = useState("");
  const typearr = ["","quiz","image","text","execute"];
  let navigate = useNavigate();


  return (
    <div className="Quest">
        <div className="Content">
            <div className="InnerContent">
            {state.map((i)=>(
                <button className="Botton"  onClick={()=>{
                      navigate("/quest/"+typearr[i.Type]+"/"+i.QuestId);
                }}>
                    <div className="BottonMainTitle">{i.Name}</div>
                    <div className="BottonContent">{i.Subname}</div>
                </button>
            ))}
                <div className="CASE"></div>
            </div>
        </div>
    </div>
  );
}

export default Quests;
