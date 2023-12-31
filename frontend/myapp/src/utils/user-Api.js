import React, { createContext,useState,useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import Swal from "sweetalert2";

const AuthContext = createContext();

const Api = ({children}) => {
    const urls = "http://localhost:8000";
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
    const [mtheme, setMtheme]=useState();
    const fetchNewsData = async(article) => {
            try {
              const response = await axios.get('http://localhost:8000/api/news/'+article);
              return response.data.items;
            } catch (error) {
              console.error('Error fetching news data:', error);
            }
    }
    const InitQstatus = async (username) => {
        console.log("이니셜라이징 진행중.");
        console.log(username);

        axios.get(urls+"/api/status/"+username)
            .then(
                async function (response) {
                    // response
                    console.log(response);
                    setQstatus(response.data);
                }
            )
            .catch(

                )
            
    }
    const InitMtheme = async (username) => {
        console.log("이니셜라이징 진행중.");
        console.log(username);

        axios.get(urls+"/api/theme/"+username)
            .then(
                async function (response) {
                    // response
                    console.log(response);
                    setMtheme(response.data);
                }
            )
            .catch(

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
        console.log("로그인 성공");
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
    
        } else {
            Swal.fire({
                icon: 'error',
                title: '로그인 에러',
                text: '없는 정보입니다!',  
                }        
            );
        }
    };
    
    
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

    const updatestatusUser = async (username,newstatue) => {
        console.log("status 업데이트 함수 호출됨.")
        
        try {
            const response = await fetch(urls + "/api/update_status/" + username + "/", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: newstatue
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const updatethemeUser = async (username,favorit) => {
        console.log(username,favorit)
        try {
            const response = await fetch(urls + "/api/update_theme/" + username + "/", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    theme: favorit
                })
            }); 
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
    };
    
    const submitTextmission = async (QuestId, userid, TextAnswer) => {
        console.log("textmission 함수 호출됨.")
        
        const response = await fetch(urls+"/api/textmission/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                QuestId: QuestId,
                username:    userid,
                TextAnswer:    TextAnswer
            })
        });
    };

    const submitImagemission = async (username,imageFile,questId) => {
    
        try {
          const formData = new FormData();
          formData.append('username', username);
          formData.append('image', imageFile);
          formData.append('QuestId', questId);
    
          const response = await axios.post('http://localhost:8000/api/imagemission/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(response.data)
          return response.data; // 서버에서 온 응답 확인
    
          // 여기에서 응답을 상태에 따라 처리할 수 있습니다.
        } catch (error) {
          console.log(error);
          return error;
        }
      };


    useEffect(() => {
        if (authTokens) {
        setUser(jwtDecode(authTokens.access));
        }
        setLoading(false);
    
        if (user){
            console.log(user);
            InitQstatus(user.username);
            InitMtheme(user.username);
        }
        
    }, [authTokens, loading]);
    
    const contextData = {
        user,
        qstatus,
        mtheme,
        setUser,
        authTokens,
        setAuthTokens,
        registerUser, //회원가입
        loginUser, //로그인
        logoutUser,
        updatestatusUser,
        submitTextmission,
        submitImagemission,
        fetchNewsData,
        updatethemeUser,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};


export {Api,AuthContext};