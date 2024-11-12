import React, { useEffect } from "react";
import placeHolderImg from "../Images/placeholder.png"
import "../Css Files/SaveUs.css"
function SaveUs() {

    useEffect(() => {
        let observer;

        const timeoutId = setTimeout(() => {
            const images = document.querySelectorAll(".div-img");

            observer = new IntersectionObserver(
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
        }, 1000);


        return () => {
            clearTimeout(timeoutId);

            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div className="save-us">
            <h1>Ne Yapmalıyız Peki?</h1>
            <section className="container">
                <div className="div a1th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a2th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a3th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a4th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a5th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a6th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a7th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a8th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
            </section>
            <h1>Küçük başla</h1>

            <section className="container2">
                <div className="div b1th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div b2th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div b3th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div b4th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div b5th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div b6th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div b7th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div b8th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div b9th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
            </section>
            <h1>Belki Bir Gün Büyür</h1>
            <section className="container">
                <div className="div a1th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a2th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a3th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a4th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a5th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a6th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a7th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
                <div className="div a8th">
                    <img alt="" className="div-img" src={placeHolderImg}></img>
                </div>
            </section>
            <h1>Hala Mı Anlamadın?</h1>
            <h2>Gel O Zaman</h2>
            <div className="stepsconta">
                <ul className="steps-to-solve">
                    <li className="used-tools-container right">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>
                    </li>
                    <li className="used-tools-container left">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>

                    </li>
                    <li className="used-tools-container right">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>
                    </li>
                    <li className="used-tools-container left">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>
                    </li>
                    <li className="used-tools-container right">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>
                    </li>
                    <li className="used-tools-container left">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default SaveUs