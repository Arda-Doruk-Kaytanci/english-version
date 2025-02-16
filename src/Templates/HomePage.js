import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css Files/HomePage.css";
import ArticleWidget from "./Components/ArticleWidget";
import article1Img from "../Images/article1showcaseimage.png";
import article2Img from "../Images/article2.png"
import article3Img from "../Images/article3.png"
import img3 from "../Images/forest3.png";
import img4 from "../Images/deso5.png";
import img5 from "../Images/deso2.png";
import img6 from "../Images/deso4.png";
import img7 from "../Images/forest1.png";
import img8 from "../Images/forest2.png";

function HomePage() {
    const [isVisible, setIsVisible] = useState(false);
    const desoRef = useRef(null);

    const Flashbang = () => {
        const [isFlashing, setIsFlashing] = useState(false);

        const triggerFlashbang = (duration = 1000) => {
            setIsFlashing(true);
            setTimeout(() => {
                setIsFlashing(false);
            }, duration);
        };

        useEffect(() => {
            const hasFlashed = localStorage.getItem("hasFlashed");

            if (isVisible && !hasFlashed) {
                triggerFlashbang();
                console.log("Flashbang triggered");

                localStorage.setItem("hasFlashed", "true");
            }
        }, []);

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

    useEffect(() => {
        const images = document.querySelectorAll(".img");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        images.forEach((img) => observer.observe(img));

        return () => {
            images.forEach((img) => observer.unobserve(img));
        };
    }, []);

    return (
        <div>
            <Flashbang />
            <section className="warning-section-container">
                <section className="warning-section left">
                    <figure>
                        <img className="img deso" src={img4} alt="a desolated land" />
                        <figcaption>
                            Do you want a world like this?
                            <br />
                            Dark, breathless, hopeless, lifeless...
                        </figcaption>
                    </figure>
                    <figure>
                        <img className="img deso" src={img5} alt="a desolated land" />
                        <figcaption>
                            You don't want that, do you?
                            <br />
                            I wouldn’t want it either. Why would I?
                        </figcaption>
                    </figure>
                    <figure>
                        <img className="img deso" src={img6} alt="a desolated land" />
                        <figcaption>
                            Then remember, it's still not too late.
                            <br />
                            There is still hope, take action before it's too late.
                        </figcaption>
                    </figure>
                </section>
                <div className="arrow-container">
                    <div className="arrowright"></div>
                    <div className="arrowleft"></div>
                </div>
                <section className="warning-section right">
                    <figure>
                        <img className="img forest" src={img3} alt="a forest" />
                        <figcaption ref={desoRef}>
                            Yes! Like I said, a world like this is possible.
                            <br />
                            And soon.
                        </figcaption>
                    </figure>
                    <figure>
                        <img className="img forest" src={img7} alt="a forest" />
                        <figcaption>
                            And it’s not even hard to reach.
                            <br />
                            Come on, start now.
                        </figcaption>
                    </figure>
                    <figure>
                        <img className="img bottom" src={img8} alt="a forest" />
                        <figcaption>
                            Work for that bright future.
                            <br />
                            So, what will you do?
                        </figcaption>
                    </figure>
                </section>
            </section>
            <section className="ribbon-container">
                <Link to="/save-us" className="ribbon">Save Us</Link>
            </section>
        </div>
    );
    
}

export default HomePage;
