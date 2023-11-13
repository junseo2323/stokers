import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../utils/user-Api";
import store from "../store/store";
import "./Quests.scss"
import { fetchQUEST } from "../actions/fetchQuest"

store.dispatch(fetchQUEST());

const Questlist = () => {
    const state = useSelector(state => state.quest.QUEST);
    let navigate = useNavigate();
    const typearr = ["","quiz","image","text","execute"];
    const {qstatus} = useContext(AuthContext);
    const [status, setStatus] = useState(0); 
    const changeColor = () => {
        try{
            setStatus(qstatus[0].status);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        console.log("effect 실행");
        changeColor()},[qstatus]);

    state.map(data=>{
        if(data.QuestId < status)
            data["id"]="clear";
        else if(data.QuestId > status)
            data["id"]="unclear";
        else
            data["id"] = "now";
    })

    const onClickEvent = (i) => {
        if(i.id == "clear"){
            alert("이미 완료된 퀘스트입니다!");
        }else if(i.id == "now") {
            navigate("/quest/"+typearr[i.Type]+"/"+i.QuestId);
        }else {
            alert("이전 퀘스트를 먼저 수행해주세요!");
        }
    }

    return(
        <>
            {state.map((i)=>(
                <button className="Botton" id={i.id}  onClick={()=>{onClickEvent(i)}}>
                    <div className="BottonMainTitle">{i.Name}</div>
                    <div className="BottonContent">{i.Subname}</div>
                </button>
            ))}
        </>
    )
}
 
const Quests = () => {
    const state = useSelector(state => state.quest.QUEST);
    let navigate = useNavigate();
    

  return (
    <div className="Quest">
        <div className="Content">
            <div className="InnerContent" id="test">
                <Questlist />
                <div className="CASE"></div>
            </div>
        </div>
    </div>
  );
}

export default Quests;
