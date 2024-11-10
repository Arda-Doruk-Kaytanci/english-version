import React from "react";
import "../Css Files/NavBar.css"
import { Link, Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./HomePage";
import Article1 from "./Article1";
import logoImg from "../Images/logo.png"
function NavBar() {
    const currLoc = useLocation()
    const isHere = (loc) => {
        return currLoc.pathname == loc ? true : false
    }
    return (
        <>
            <div className="nav-container">
                <img alt="the logo" src={logoImg}></img>
                <nav>
                    <Link className="nav-bar-link" to="/articles/article-1" style={{ color: isHere('/articles/article-1') ? "black" : "grey" }}>Article1</Link>
                    <Link className="nav-bar-link" to="/" style={{ color: isHere('/') ? "black" : "grey" }}>Homepage</Link>
                    <Link className="nav-bar-link" to="/" style={{ color: isHere('/') ? "black" : "grey" }}>Homepage</Link>
                    <Link className="nav-bar-link" to="/" style={{ color: isHere('/') ? "black" : "grey" }}>Homepage</Link>
                    <Link className="nav-bar-link" to="/" style={{ color: isHere('/') ? "black" : "grey" }}>Homepage</Link>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/articles/article-1" element={<Article1 />}></Route>
            </Routes>
        </>
    )
}
export default NavBar