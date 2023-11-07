import React from 'react'
import logo123 from "../image/logo123.png"
import "./Login.scss";

import { useContext } from "react";
import {AuthContext} from "../App";
import { useNavigate,Link } from "react-router-dom";
import { useState, useEffect } from "react";
 
const Login = () => {
    const {loginUser , user} = useContext(AuthContext);
    const [islogined, setIslogined] = useState("False");
    const navigator = useNavigate();
  
    const handleSubmit = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        setIslogined(loginUser(username, password));
      };
      
      const handleRegister = () => {
        navigator("/register");
      }
    
      if (user) {
        navigator("/");
      } 
  
    return(
        <div className='Login'>
            <div className='Background_container'>
                <div className='Logo_container'>
                    <img src={logo123} className='Logo'></img>
                </div>
                <div className='Login_container'>
                    <form onSubmit={handleSubmit}>
                        <div className='Input0_container'>
                            <label>
                                <input required name='id' type="text" id="username"/>
                                <span>아이디</span>
                            </label>
                        </div>
                        <div className='Input0_container'>
                            <label>
                                <input type="password" name="password" id="password" autoComplete="off" required />
                                <span>비밀번호</span>
                            </label>
                        </div>
                        <button className='Button'>
                            로그인
                        </button>
                    </form>
                </div>
            </div>
            <div className='Link_contaienr'>
                <Link to="/register">아이디/비밀번호 찾기</Link>
                <br />
                <Link to="/register">회원가입</Link>
            </div>

        </div>
    )
} 

export default Login;