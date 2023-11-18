import "./Rank.scss"
import image_level1 from '../image/house.png'
import image_level2 from '../image/startup.png'
import image_level3 from '../image/low.png'
import image_level4 from '../image/middle.png'
import image_level5 from '../image/high.png'

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../utils/user-Api";


const Rank = () => {
  const { qstatus, user,fetchNewsData,mtheme } = useContext(AuthContext);
  const [theme, setTheme] = useState("이차전지");
  const [status, setStatus] = useState(0);  
  const [userRanking, setUserRanking] = useState([]);
  const [usermyRanking, setMyUserRanking] = useState([]);
  const [level, setLevel] = useState(0);

  const controlImg = [image_level1,image_level2,image_level3,image_level4,image_level5];


  const changeStatus = () => {
    try {
        setStatus(qstatus[user.user_id - 1].status);
        setTheme(mtheme[user.user_id - 1].theme);
    } catch (err) {
        console.log(err);
    }
}
const fetchUserRanking = async () => {
  try {
    // Replace 'your-api-endpoint' with the actual endpoint of your API
    const response = await fetch("http://localhost:8000/api/user_rank/");
    const data = await response.json();

    setUserRanking(data); // Assuming the API response contains an array of user rankings
  } catch (error) {
    console.error("Error fetching user ranking:", error);
  }
};

const fetchmyUserRanking = async () => {
  try {
    // Replace 'your-api-endpoint' with the actual endpoint of your API
    const response = await fetch("http://localhost:8000/api/user_rank/"+user.username+"/");
    const data = await response.json();

    setMyUserRanking(data); // Assuming the API response contains an array of user rankings
  } catch (error) {
    console.error("Error fetching user ranking:", error);
  }
};


useEffect(()=>{
  changeStatus();
  fetchUserRanking();
  fetchmyUserRanking();
  setLevel(parseInt(status/10));

},[qstatus])
  console.log(user);

  return (
    <div className="Rank">
      <div className="Container1">
        <div className="Block1">
          <div className="Username">{user.username}</div>
          <div className="Interest">관심분야 : {theme}</div>
          <div className="Completed_quest">진행현황 : {status}단계</div>
          <div className="Ranking">#{usermyRanking.rank}위</div>
        </div>
        <div className="Block2">
          <div className="Wrapper">
            <img src={image_level1} className='Rank_img' />
          </div>
        </div>
      </div>
      <div className="Container2">
        <div className="Top">
          <div className="Left">순위</div>
          <div className="Center">유저</div>
          <div className="Right">진행도</div>
        </div>
        <div className="Bottom">
          <ul>
          {userRanking.map((userData, index) => (
            <li key={index}>
              <div className="Left">{userData.rank}</div>
              <div className="Center">
                <div className="Img_small">
                  <img src={controlImg[parseInt(userData.status/10)]} className="Img"></img>
                </div>
                <div className="Name">{userData.username}</div>
              </div>
              <div className="Right">{`${userData.status}단계`}</div>
              
            </li>
          ))}
            <li>
            <div className="Left">{usermyRanking.rank}</div>
              <div className="Center">
                <div className="Img_small">
                  <img src={controlImg[level]} className="Img"></img>
                </div>
                <div className="Name">{user.username}</div>
              </div>
              <div className="Right">{status}단계</div>
            </li>
            
          </ul>
        </div>
      </div>
    </div >
  );
}

export default Rank