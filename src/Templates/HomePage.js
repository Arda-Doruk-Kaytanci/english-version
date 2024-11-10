import React from "react";
import "../Css Files/HomePage.css"
import ArticleWidget from "./Components/ArticleWidget";
import article1Img from "../Images/burdur.png"
function HomePage() {
    return (
        <div>
            <div className="article-widget-container">
                <ArticleWidget link="/articles/article-1" name="Arda" img={article1Img} figcaption="Awdıajıodwakawd" />
                <ArticleWidget link="/articles/article-1" name="Arda" img={article1Img} figcaption="Awdıajıodwakawd" />
                <ArticleWidget link="/articles/article-1" name="Arda" img={article1Img} figcaption="Awdıajıodwakawd" />
                <ArticleWidget link="/articles/article-1" name="Arda" img={article1Img} figcaption="Awdıajıodwakawd" />
            </div>
        </div>
    )
}
export default HomePage