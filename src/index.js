import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutMe from "./containers/AboutMe";
import Home from "./containers/Home";
import Portfolio from "./containers/Portfolio";
import Contactame from "./containers/Contactame";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="contactme" element={<Contactame/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
