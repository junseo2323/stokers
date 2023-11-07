// App.js
import React from "react";
import styled from "styled-components";

import {jwtDecode} from 'jwt-decode';
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Text from "./components/Quest_text"
import Exequte from "./components/Quest_execute"
import Quests from "./pages/Quests"; 
import Quiz from "./components/Quiz";

import Login from "./pages/Login";
import Register from './pages/Register';
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import store from "./store/store"

const Mainframe = styled.div `
    overflow: hidden;
    width: 390px;
    height: 100vh;
    border-radius: 25px;
    background: white;
    border: 1px solid black;
`;

export const AuthContext = createContext(); // Context 생성


function App() {
  const [authTokens, setAuthTokens] = useState(() =>
  localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  ); // localStorage에 authTokens이 있을 경우 가져와서 authTokens에 넣는다.

  const [user, setUser] = useState(() =>
      localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  ); // localStorage에 authTokens이 있을 경우 jwt_decode로 authTokens를 decode해서 user 정보에 넣는다.
  const [loading, setLoading] = useState(true);

  const loginUser = async (username, password) => {
      console.log("로그인 함수 호출됨.")
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          username,
          password
      })
      });
      const data = await response.json();
  
      // 로그인에 성공했을 경우 홈으로 이동
      if (response.status === 200) {
      console.log("로그인 성공")
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
  
      } else {
      console.log("로그인 에러")
      }
  };
  
  const refreshUser = async (username) => {
      console.log("리프레시 진행중.");
      console.log(username);
      const response = await fetch("http://127.0.0.1:8000/api/refresh/"+username, {
      method: "GET"
      });
      const data = await response.json();
  }
  
  const registerUser = async (username, phone , password, password2,email,status) => {
      console.log("회원가입 함수 호출됨.")
      
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          username,
          phone,
          password,
          password2,
          email,
          status,
      })
              });
      if (response.status === 201) {
      console.log("회원가입 완료");
      } else if (response.status === 400){
      console.log("회원가입 실패 - 이미 있는 아이디입니다.")
      } else {
      console.log("회원가입 실패")
      }
  };
  
  
  const logoutUser = () => {
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem("authTokens");
  };
  
  useEffect(() => {
      console.log(contextData)
      if (authTokens) {
      setUser(jwtDecode(authTokens.access));
      }
      setLoading(false);
  
      if (user){
      refreshUser(user.username);
      }
  }, [authTokens, loading]);
  
  const contextData = {
      user,
      setUser,
      authTokens,
      setAuthTokens,
      registerUser, //회원가입
      loginUser, //로그인
      logoutUser,
      refreshUser
  };
    
  return (
    <div>
      <Router>
          <Provider store={store}>
          <AuthContext.Provider value={contextData}>
            <Mainframe>
              <Routes>
                <Route element={<Nav />}>
                  <Route path="/" element={<Quests />}/>
                  <Route path="/quest" element={<Quests/>} />
                  <Route path="/quest/quiz/:id" element={<Quiz/>} />
                  <Route path="/quest/text/:id" element={<Text/>} />
                  <Route path="/quest/exequte/:id" element={<Exequte/>} />
                  <Route path="/quest/image/:id" element={<Quiz/>} />
                </Route>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
              </Routes>
              </Mainframe>
          </AuthContext.Provider>
          </Provider>
      </Router>
    </div>
  );
}

export default App;