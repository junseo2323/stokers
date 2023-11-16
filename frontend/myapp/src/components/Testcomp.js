import React, { useState, useEffect,useContext } from 'react';
import { AuthContext } from "../utils/user-Api";

const NaverNewsApp = () => {
  const [newsData, setNewsData] = useState([]);
  const {fetchNewsData}  = useContext(AuthContext);

  useEffect(() => {
    const article = "인하대학교";
    const res = fetchNewsData(article);
    res.then(
      data => {
        console.log(data)
        setNewsData(data);
      }
    )
  }, []); 

  return (
    <div>
      <h1>Naver News App</h1>
      <ul>
        {newsData.map((news) => (
          <li key={news.link}>
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              {news.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NaverNewsApp;
