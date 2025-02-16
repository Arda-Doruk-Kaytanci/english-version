import React, { forwardRef } from "react";
import "../../Css Files/ComponentCss/NavBar.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../HomePage";
import Article1 from "../Article1";
import logoImg from "../../Images/logo.png";
import SaveUs from "../SaveUs";
import Resources from "../Resources";
import Contributers from "../Contributers";
import Optimize from "../OptimizeYourEnvironment";
import Article2 from "../Article2";
import Article3 from "../Article3";
import CropsCategory from "../CropsCategory";
const NavBar = forwardRef((props, ref) => {
  const currLoc = useLocation();
  const isHere = (loc) => {
    return currLoc.pathname === loc ? true : false;
  };
  return (
    <>
      <div className="custom-shape-container">
        <div className="border-wrapper">
          <div className="custom-shape arda"></div>
        </div>
        <div className="custom-shape doruk"></div>
      </div>
      <div className="nav-container">
        <img alt="the logo" src={logoImg}></img>
        <nav ref={ref}>
          <Link
            className="nav-bar-link"
            to="/"
            style={{ color: isHere("/") ? "#34623F" : "#A1BA89" }}
          >
            Homepage
          </Link>
          <Link
            className="nav-bar-link"
            to="/save-us"
            style={{ color: isHere("/save-us") ? "#34623F" : "#A1BA89" }}
          >
            Save us
          </Link>
          <Link
            className="nav-bar-link"
            to="/informations"
            style={{ color: isHere("/informations") ? "#34623F" : "#A1BA89" }}
          >
            Info
          </Link>
          <Link
            className="nav-bar-link"
            to="/get-educated"
            style={{ color: isHere("/get-educated") ? "#34623F" : "#A1BA89" }}
          >
            Be Informed
          </Link>
          <Link
            className="nav-bar-link"
            to="/contributers"
            style={{ color: isHere("/contributers") ? "#34623F" : "#A1BA89" }}
          >
            Contributers
          </Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/save-us" element={<SaveUs />}></Route>
        <Route path="/articles/article-1" element={<Article1 />}></Route>
        <Route path="/articles/article-2" element={<Article2 />}></Route>
        <Route path="/articles/article-3" element={<Article3 />}></Route>
        <Route path="/informations" element={<Resources />}></Route>
        <Route path="/get-educated" element={<Optimize />}></Route>
        <Route path="/contributers" element={<Contributers />}></Route>
        <Route path="/crops" element={<CropsCategory />}></Route>
      </Routes>
    </>
  );
});
export default NavBar;
