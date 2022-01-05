import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
   import './index.css';
import AboutMe from "./containers/AboutMe";
import Home from "./containers/Home";
import Portfolio from "./containers/Portfolio";
import Contactame from "./containers/Contactame";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter >
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