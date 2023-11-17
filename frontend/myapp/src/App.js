// App.js
import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Api } from "./utils/user-Api";

import Testcomp from "./components/Testcomp";

import Text from "./components/Text"
import Rank from "./components/Rank";
import Exequte from "./components/Execute";
import News from "./components/News";
import NewsMain from "./components/NewsMain";
import Quests from "./pages/Quests";
import Quiz from "./components/Quiz";
import Image from './components/Image';
import Main from "./pages/Main"
import Login from "./pages/Login";
import Register from './pages/Register';
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import store from "./store/store"
import Follow from "./components/Follow";
import Favorit from "./components/Favorit";

import "./App.scss";

const Mainframe = styled.div`
    overflow: hidden;
    width: 390px;
    height: 100vh;
    border-radius: 25px;
    background: white;
    border: 1px solid black;

`;

function App() {

  return (
    <div>
      <Router>
        <Provider store={store}>
          <Api>
            <Mainframe className="scroll">
              <Routes>
                <Route element={<Nav />}>
                  <Route path="/" element={<Main />} />
                  <Route path="/main" element={<Main />} />
                  <Route path="/quest" element={<Quests />} />
                  <Route path="/quest/quiz/:id" element={<Quiz />} />
                  <Route path="/quest/text/:id" element={<Text />} />
                  <Route path="/quest/execute/:id" element={<Exequte />} />
                  <Route path="/quest/image/:id" element={<Image />} />
                  <Route path="/follow/:id" element={<Follow />} />
                  <Route path="/rank" element={<Rank />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/newsmain" element={<NewsMain />} />
                  <Route path="/favorit" element={<Favorit />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Mainframe>
          </Api>
        </Provider>
      </Router>
    </div>
  );
}

export default App;