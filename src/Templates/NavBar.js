import React, { forwardRef } from "react";
import "../Css Files/NavBar.css"
import { Link, Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./HomePage";
import Article1 from "./Article1";
import logoImg from "../Images/logo.png"
const NavBar = forwardRef((props, ref) => {
    const currLoc = useLocation()
    const isHere = (loc) => {
        return currLoc.pathname === loc ? true : false
    }
    return (
        <>
            <div className="custom-shape-container">
                <div class="border-wrapper">
                    <div className="custom-shape arda"></div>
                </div>
                <div className="custom-shape doruk"></div>
            </div>
            <div className="nav-container">
                <img alt="the logo" src={logoImg}></img>
                <nav ref={ref}>
                    <Link className="nav-bar-link" to="/articles/article-1" style={{ color: isHere('/articles/article-1') ? "#34623F" : "#A1BA89" }}>Article1</Link>
                    <Link className="nav-bar-link" to="/" style={{ color: isHere('/') ? "#34623F" : "#A1BA89" }}>Homepage</Link>
                    <Link className="nav-bar-link" to="/" style={{ color: isHere('/') ? "#34623F" : "#A1BA89" }}>Homepage</Link>
                    <Link className="nav-bar-link" to="/" style={{ color: isHere('/') ? "#34623F" : "#A1BA89" }}>Homepage</Link>
                    <Link className="nav-bar-link" to="/" style={{ color: isHere('/') ? "#34623F" : "#A1BA89" }}>Homepage</Link>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/articles/article-1" element={<Article1 />}></Route>
            </Routes>
        </>
    )
})
export default NavBar