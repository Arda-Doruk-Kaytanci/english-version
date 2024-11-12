import React from "react";
import "../Css Files/Contributers.css"
import Contributer from "./Components/Contributer";

function Contributers() {
    return (
        <div className="contributers-page">
            <h1>Teşekkürler</h1>
            <p>
                Bu proje, farklı yeteneklere ve bilgi birikimlerine sahip insanların bir araya gelerek oluşturduğu bir topluluğun ürünü. Her bir katkı sağlayan, projemizin daha iyiye ulaşması için değerli zamanını, bilgisini ve yaratıcı enerjisini paylaştı. Kod geliştirmeden tasarıma, içerik oluşturmadan hata raporlamaya kadar her alanda destek veren bu topluluğun katkıları olmadan, bugün olduğumuz noktada olamazdık.
                Amacımız, katkı sağlayanlarımızın emeklerini vurgulamak ve onlara projeye kattıkları değer için teşekkür etmek. Siz de bu topluluğa katılarak bilgi birikiminizi ve yeteneklerinizi paylaşmak isterseniz, katkı sağlama süreciyle ilgili ayrıntılara göz atabilirsiniz. Hep birlikte, daha iyi ve daha güçlü bir proje inşa etmeye devam ediyoruz.
                <br></br>
                Katkıda bulunan herkese içtenlikle teşekkür ederiz!
            </p>
            <h1>Katkıda Bulunanlar</h1>
            <section className="contributers-container">
                <Contributer name="Arda Doruk Kaytancı"></Contributer>
            </section>
            <h1>Honorable Mention</h1>
            <section></section>
        </div>
    )
}

export default Contributers