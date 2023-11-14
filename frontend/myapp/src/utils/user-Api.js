import React, { createContext,useState,useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();

const Api = ({children}) => {
    const urls = "http://ec2-13-124-97-107.ap-northeast-2.compute.amazonaws.com:8080";
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

    const [qstatus, setQstatus] = useState(); // localStorage에 authTokens이 있을 경우 jwt_decode로 authTokens를 decode해서 user 정보에 넣는다.

    const InitQstatus = async (username) => {
        console.log("이니셜라이징 진행중.");
        console.log(username);

        axios.get(urls+"/api/status/"+username)
            .then(
                async function (response) {
                    // response
                    setQstatus(response.data);
                    console.log(response.data); //데이터 전송 성공시
                }
            )
            .catch(
                console.log("ERRoR INIT")
            )
            
    }

    const [loading, setLoading] = useState(true);

    const loginUser = async (username, password) => {
        console.log("로그인 함수 호출됨.")
        const response = await fetch(urls+"/api/token/", {
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
        
        const response = await fetch(urls+"/api/refresh/"+username, {
        method: "GET"
        });
        const data = await response.json();
    }
    


    const registerUser = async (username, password, password2,status,email,phone) => {
        console.log("회원가입 함수 호출됨.")
        
        const response = await fetch(urls+"/api/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password,
            password2,
            phone,
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
        console.log(qstatus)
        console.log(contextData)
        if (authTokens) {
        setUser(jwtDecode(authTokens.access));
        }
        setLoading(false);
    
        if (user){
        refreshUser(user.username);
        InitQstatus(user.username);
        }
    }, [authTokens, loading]);
    
    const contextData = {
        user,
        qstatus,
        setUser,
        authTokens,
        setAuthTokens,
        registerUser, //회원가입
        loginUser, //로그인
        logoutUser,
        refreshUser
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};


export {Api,AuthContext};