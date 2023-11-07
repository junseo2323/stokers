import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import store from "../store/store";
import { fetchQUIZ } from "../actions/fetchQuiz"
import { fetchQUESTDETAIL } from "../actions/fetchQuestdetail"
import { useSelector } from "react-redux";
import './Quiz.scss';



const Quiz = () => {
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
            if(Number(ans) === quizstate.QuizAnswer){
                const aelement = document.getElementById("IsCorrectAns");
                aelement.style.color = 'blue';    
                aelement.innerText = "정답입니다";
                setTimeout(function(){navigate("/quest");}, 1000); //1초 뒤에 메인 퀘스트 페이지로 전황
            }else{ //퀴즈 오답시
                const aelement = document.getElementById("IsCorrectAns");
                aelement.style.color = 'red';    
                aelement.innerText = "오답입니다";
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