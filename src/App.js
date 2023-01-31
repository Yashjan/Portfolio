import React from 'react'
import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import { Route, Routes } from "react-router-dom";
const App = () => {
  return(
    <>
    <Sidebar />
    <MainContentStyled>
          <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/about"  exact  element={<AboutPage/>}/>
            <Route path="/resume" exact  element={<ResumePage/>}/>
            <Route path="/blogs"  exact element={<BlogsPage/>}/>
            <Route path="/contact"  exact element={<ContactPage/>}/>
          </Routes>
        </MainContentStyled>
  </>
  )
}
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 19.8rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App