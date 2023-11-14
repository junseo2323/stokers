import React, { useState } from 'react'
import { useContext } from "react";
import { AuthContext } from "../utils/user-Api";
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
    const { loginUser, registerUser } = useContext(AuthContext);
    const navigator = useNavigate();

    const handleChange = e => {
        setStatus(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        registerUser(username, password, password2, status, email, phone);
        console.log(username, password, password2, status, email, phone);
        navigator("/login");
    };

    return (
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
                                        <input required onChange={e => setUsername(e.target.value)} name='id' />
                                        <span>아이디</span>
                                    </label>
                                </div>

                                <div className='Input_container'>
                                    <label>
                                        <input required type='password' onChange={e => setPassword(e.target.value)} name='비밀번호' />
                                        <span>비밀번호</span>
                                    </label>
                                </div>

                                <div className='Input_container'>
                                    <label>
                                        <input required type='password' onChange={e => setPassword2(e.target.value)} name='비밀번호확인' />
                                        <span>비밀번호 확인</span>
                                    </label>
                                </div>
                                <div className='Input_container'>
                                    <label>
                                        <input required type='phone' onChange={e => setPhone(e.target.value)} name='휴대폰 번호' />
                                        <span>휴대폰 번호</span>
                                    </label>
                                </div>
                                <div className='Input_container'>
                                    <label>
                                        <input required type='email' onChange={e => setEmail(e.target.value)} name='이메일' />
                                        <span>이메일</span>
                                    </label>
                                </div>

                                <div className='Input_container'>
                                    <label className='Radio_container'>
                                        <span>주식 경험</span>

                                        <input type="radio" name="val1" value="1" onChange={handleChange} />
                                        <input type="radio" name="val2" value="5" onChange={handleChange} />
                                        <input type="radio" name="val3" value="10" onChange={handleChange} />
                                        <input type="radio" name="val4" value="15" onChange={handleChange} />
                                        <input type="radio" name="val4" value="20" onChange={handleChange} />

                                    </label>
                                </div>


                            </form>
                        </section>
                    </div>
                    <button className='Button2'>
                        회원가입
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;