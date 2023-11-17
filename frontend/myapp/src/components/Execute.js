import './Execute.scss';

import store from '../store/store';
import Eximage from "../image/Execute.png";

import { fetchQUESTDETAIL } from '../actions/fetchQuestdetail';
import { AuthContext } from '../utils/user-Api';

import { useContext,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Swal from 'sweetalert2';

const Execute = () =>
{
const {qstatus,updatestatusUser,user}  = useContext(AuthContext);
const Toast = Swal.mixin({
  toast: true,
  position: 'center-center',
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


useEffect(()=>{
  store.dispatch(fetchQUESTDETAIL(id));
},[])
const detailstate = useSelector(state => state.questdetail.QUESTDETAIL);

const onClickButton = () => {
  
  Toast.fire({
    icon: "warning",
    title: "주식 길라잡이-" + detailstate.Name,
    text: "이동 하시겠습니까?",
    confirmButtonText: true,
    showCancelButton: true,
    confirmButtonText: "이동",
    cancelButtonText: "취소",
}).then((res) => {
  if (res.isConfirmed) {
    updatestatusUser(user.username,qstatus[user.user_id-1].status+1);
    switch(parseInt(id)){
      case 6: //6번 미션 - 뉴스 메인 가기.
        window.location.replace("/newsmain");
        break;
      case 8: //8번 미션 - 관심영역 정하기.
        window.location.replace("/favorit");
        break;
      case 14: //14번 미션 - 홈 화면가서 확인하기.
        window.location.replace("/main");
        break;
      default:
        window.location.replace("/follow/"+id);
        break;
    }
  }
  else{
      //취소
      
  }
});

}




let { id } = useParams();

  return ( 
    <div className="Execute">
      <div className="MainTitle">{detailstate.Name}</div>
      <div className="SubTitle">{detailstate.Subname}</div>
      <div className="Content">
        <div className="Explain">{detailstate.Detail}</div>
        <button className="Box-execute" onClick={onClickButton}>
          <img src={Eximage}></img>
          <div className='Icon-execute'>미션 이동하기</div>
        </button>
      </div>
    </div>
  );
};

export default Execute; 