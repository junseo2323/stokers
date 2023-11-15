import React, { useState,useEffect,useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import store from "../store/store";
import { fetchQUIZ } from "../actions/fetchQuiz"
import { fetchQUESTDETAIL } from "../actions/fetchQuestdetail"
import { useSelector } from "react-redux";
import { AuthContext } from "../utils/user-Api";
import Swal from "sweetalert2";

import './Quiz.scss';

 

const Quiz = () => {
    const {qstatus,updatestatusUser,user}  = useContext(AuthContext);
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

    let navigate = useNavigate();
    let { id } = useParams();
    useEffect(()=>{
        store.dispatch(fetchQUIZ(id));
        store.dispatch(fetchQUESTDETAIL(id));
    },[])

    const quizstate = useSelector(state => state.quiz.QUIZ);
    const detailstate = useSelector(state => state.questdetail.QUESTDETAIL);

    const [pre,setPre] = useState();
    const [ans,setAns] = useState();

    const onClickHandler = e => {
        setPre(ans);
        setAns(e.target.id);
    };
 
    //버튼 클릭시 색깔 변경
    useEffect(()=>{
        if(ans!=null){
            const element = document.getElementById(ans);
            element.style.backgroundColor = '#739072';
            element.style.color = 'white';
            //퀴즈 정답시
            if(Number(ans)-1 === quizstate.QuizAnswer){ //db랑 frontend랑 맞지 않았네요. -1로 임시 수정.
                updatestatusUser(user.username,qstatus[user.user_id-1].status+1);
                const aelement = document.getElementById("IsCorrectAns");
                Toast.fire({
                    icon: 'success',
                    title: '정답입니다!!'
                })
                setTimeout(function(){
                    window.location.replace("/quest");
                }, 1500); //1초 뒤에 메인 퀘스트 페이지로 전황
            }else{ //퀴즈 오답시
                const aelement = document.getElementById("IsCorrectAns");
                element.style.backgroundColor = '#DF6B6B';
                Toast.fire({
                    icon: 'error',
                    title: '오답입니다!!'
                })
            }
        }
        
        if(pre != null){
            const pelement = document.getElementById(pre);
            pelement.style.backgroundColor = '#ffffff';
            pelement.style.color = '#000';
        }
    },[ans]); 

    return (
    <div className="quiz">
            <div className="MainTitle">{detailstate.Name}</div>
            <div className="SubTitle">{detailstate.Subname}</div>
        <div className="Content">
            <div className="ExplainBotton">
                <div className="Explain">{detailstate.Detail}</div>
            </div>
            <div className='IsCorrect'><p id='IsCorrectAns'></p></div>
            <div className="QuizBody">
                <div className="AnswerBody">
                    <button onClick={onClickHandler} id='1' className="Answer">{quizstate.Selection1}</button>
                    <button onClick={onClickHandler} id='2' className="Answer">{quizstate.Selection2}</button>
                    <button onClick={onClickHandler} id='3' className="Answer">{quizstate.Selection3}</button>
                    <button onClick={onClickHandler} id='4' className="Answer">{quizstate.Selection4}</button>
                </div>
                <div className="MeaningBody">
                    <div className="Meaning">{quizstate.SelectionDetail1}</div>
                    <div className="Meaning">{quizstate.SelectionDetail2} </div>
                    <div className="Meaning">{quizstate.SelectionDetail3}</div>
                    <div className="Meaning">{quizstate.SelectionDetail4}</div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Quiz;