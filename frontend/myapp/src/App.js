// App.js
import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Api } from "./utils/user-Api";

import Text from "./components/Text"
import Exequte from "./components/Quest_execute"
import Quests from "./pages/Quests";
import Quiz from "./components/Quiz";

import Main from "./pages/Main"
import Login from "./pages/Login";
import Register from './pages/Register';
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import store from "./store/store"

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
            <Mainframe>
              <Routes>
                <Route element={<Nav />}>
                  <Route path="/" element={<Quests />} />
                  <Route path="/quest" element={<Quests />} />
                  <Route path="/quest/quiz/:id" element={<Quiz />} />
                  <Route path="/quest/text/:id" element={<Text />} />
                  <Route path="/quest/exequte/:id" element={<Exequte />} />
                  <Route path="/quest/image/:id" element={<Quiz />} />
                </Route>
                <Route path="/main" element={<Main />} />
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