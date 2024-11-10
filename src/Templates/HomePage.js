import React, { useState, useRef, useEffect } from "react";
import "../Css Files/HomePage.css";
import ArticleWidget from "./Components/ArticleWidget";
import article1Img from "../Images/burdur.png";

function HomePage() {
    const [isVisible, setIsVisible] = useState(false);
    const desoRef = useRef(null);

    const Flashbang = () => {
        const [isFlashing, setIsFlashing] = useState(false);

        const triggerFlashbang = (duration = 300) => {
            setIsFlashing(true);
            setTimeout(() => {
                setIsFlashing(false);
            }, duration);
        };

        useEffect(() => {
            if (isVisible) {
                triggerFlashbang();
            }
        }, [isVisible]);

        return <div className={`flashbang ${isFlashing ? 'active' : ''}`}></div>;
    };

    useEffect(() => {
        const element = desoRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div>
            <Flashbang />
            <div className="article-widget-container">
                <ArticleWidget link="/articles/article-1" name="Arda" img={article1Img} figcaption="Awdıajıodwakawd" />
                <ArticleWidget link="/articles/article-1" name="Arda" img={article1Img} figcaption="Awdıajıodwakawd" />
                <ArticleWidget link="/articles/article-1" name="Arda" img={article1Img} figcaption="Awdıajıodwakawd" />
                <ArticleWidget link="/articles/article-1" name="Arda" img={article1Img} figcaption="Awdıajıodwakawd" />

            </div>
        </div>
    );
}

export default HomePage;
