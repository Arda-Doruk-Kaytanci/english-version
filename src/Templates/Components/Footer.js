import React from "react";
import "../../Css Files/ComponentCss/Footer.css"
import logoImg from "../../Images/logo.png"
function Footer() {
    return (
        <div className="footer-container">
            <img src={logoImg} alt="sitenin logosu"></img>
            <div className="footer-custom-shape-container">
                <div className="footer-custom-shape doruk">
                    <div>
                        <h2>İletişim Bilgileri</h2>
                        <h3>ardadorukkaytanci@gmail.com</h3>
                        <h3>+90 533 427 46 33</h3>
                    </div>
                    <button id="remove-storage" onClick={() => { localStorage.clear() }}>Animasyonları tekrar görmek için tıkla</button>
                    <div>
                        <h2>Yapımcı</h2>
                        <h3>Arda Doruk Kaytancı</h3>
                        <h3>Aynur Elif Kekeç</h3>
                    </div>
                </div>
                <div className="footer-custom-shape arda"></div>
            </div>
        </div>
    )
}
export default Footer