import React,{useState} from 'react'
import {useContext} from "react";
import {AuthContext} from "../App";
import { useNavigate } from 'react-router-dom';

import logo from '../image/logo123.png'
import "./Register.scss"

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [status, setStatus] = useState(0);
    const {loginUser, registerUser } = useContext(AuthContext);
    const navigator = useNavigate();
    
    const handleSubmit = async e => {
        e.preventDefault();
        registerUser(username, phone , password, password2,email,status);
        navigator("/login");
    };

    return(
        <div>
            <div className='Register'>
            <div className='Background_container'>
                <div className='Logo_container2'>
                    <img src={logo} className='Logo2'></img>
                    <h1>회원가입</h1>
                </div>
                <div className='Login2_container'>
                    <section className="register-form">
                        <form onSubmit={handleSubmit}>
                            <div className='Input_container'>
                                <label>
                                    <input required name='id'/>
                                    <span>아이디</span>
                                </label>
                            </div>

                            <div className='Input_container'>
                                <label>
                                    <input required type='password' name='비밀번호' />
                                    <span>비밀번호</span>
                                </label>
                            </div>

                            <div className='Input_container'>
                                <label>
                                    <input required type='password' name='비밀번호확인' />
                                    <span>비밀번호 확인</span>
                                </label>
                            </div>
                            <div className='Input_container'>
                                <label>
                                    <input required type='phone' name='휴대폰 번호' />
                                    <span>휴대폰 번호</span>
                                </label>
                            </div>
                            <div className='Input_container'>
                                <label>
                                    <input required type='email' name='이메일' />
                                    <span>이메일</span>
                                </label>
                            </div>

                            <div className='Input_container'>
                                <label className='Radio_container'>
                                    <span>주식 능력도</span>
                                    <div>
                                        <input type="radio" name="val1" value="1" />
                                        <input type="radio" name="val2" value="5" />
                                        <input type="radio" name="val3" value="10" />  
                                        <input type="radio" name="val4" value="15" /> 
                                    </div> 
                                </label>
                            </div>
                            
                            <button className='Button2'>
                                회원가입
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Register