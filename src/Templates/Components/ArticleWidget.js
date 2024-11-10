import React from "react";
import { Link } from "react-router-dom"
import "../../Css Files/ComponentCss/ArticleWidget.css"

function ArticleWidget(props) {
    return (
        <>
            <Link to={props.link} className="widget-link">
                <figure>
                    <img src={props.img} className="widget-img" alt={props.name} />
                    <figcaption>{props.figcaption}</figcaption>
                </figure>
            </Link>
        </>
    )
}
export default ArticleWidget