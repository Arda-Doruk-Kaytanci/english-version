import React from 'react'
import burdurImg from "../Images/burdur.png"
import "../Css Files/Article1.css"
function Article1() {
    return (
        <>
            <p id='x'>
                Ele alacağımız bu çalışmada, Burdur'un Ağlasun bölgesinde yer alan bazı memeli yaban hayvanlarının (Tilki, Porsuk, Yaban Tavşanı, Yaban Domuzu ve kaya sansarı) ekosistem içerisindeki dağılımları ile birbirleriyle ilişkileri araştırılmış ve bu türlerin ekosistem dengesi için bir gösterge olup olamayacağı gözlemlenmiştir. Bu araştırmanın amacı, ekosistemin dengede olduğunu gösteren memeli türlerin aynı alanda bulunma durumlarını incelemek ve bu türlerin birbirleriyle olan ilişkilerini analiz etmektir.
            </p>
            <img src={burdurImg} alt='Çalışma bölgesi olan burdurun haritası'></img>
            <h1>Araştırma Alanı Ve Metodoloji</h1>
            <p>Çalışma, Isparta Orman Bölge Müdürlüğüne bağlı Burdur-Ağlasun yöresinde, 350 m ile 2200 m yükseklikleri arasındaki 70 örnek alanda yürütülmüştür. Bölgede Akdeniz iklimi görülürken, dağlık alanlar ve karasal iklime yakın özellikler de görülmektedir. Çalışma alanıları ise şunlardır: orman, tarım arazileri, açık alanlar ve yerleşim yerleridir. Burada avcılık faaliyetlerinin yoğun olması yaban hayvanlarının davranışlarını etkilemiştir.
                <br>
                </br>
                Arazi çalışmalarında dolaylı gözlem teknikleri (ayak izi, dışkı, yuva vb.) kullanılarak var-yok yöntemi ile veriler toplanmıştır ve bu veriler PC-ORD adlı programda kümeleme analizi yöntemi ile analiz edilmiştir. Bu analiz sonucunda, örnek alanlar A, B ve C olarak üç gruba ayrılmıştır. Grupların memeli türlerle ilişkileri belirlenirken, SPSS adlı yazılımda Khi-kare testi ve interspesifik korelasyon analizi yapılmıştır. Eğilimsiz Uyum Analizi (DCA) ise Past adlı program kullanılarak uygulanmıştır ve bu sayede türlerin örnek alanlarda yerleşim dağılımları gözlemlenmiştir.
            </p>
            <h1>Bulgular ve Analiz Sonuçları</h1>
            <h2>Kümeleme ve Gösterge Türler</h2>
            <ol>
                <li>
                    A Grubu: Kaya sansarı ve tilki pozitif gösterge türleri olarak belirlenmiş, porsuk ise negatif gösterge tür olarak tespit edilmiştir. Bu grup, ormanlık alanlar ve çalılık bölgeler gibi daha kapalı habitatları içermektedir.
                </li>
                <li>
                    B Grubu: Porsuk pozitif gösterge türü olarak ortaya çıkarken, tilki negatif gösterge türü olarak gözlenmiştir. Bu grup daha açık alanlarda bulunmuştur, tarım alanlarına daha yakın bölgeleri içermektedir.
                </li>
                <li>
                    C Grubu: Kaya sansarı, tilki ve porsuk türlerinin negatif gösterge tür olarak belirlendiği bu grubun bulunduğu yer, insan müdahalesinin daha az olduğu, ziraat alanlarına daha uzak, doğal alanlardan oluşmaktadır.
                </li>
            </ol>
            <h2>Türlerin Habitat Tercihleri</h2>
            <ol>
                <li>Yaban Domuzu (Sus scrofa): Hem ormanlık hem de tarım alanlarında yaygın olarak bulunmuştur, geniş bir besin yelpazesine sahip olması nedeni ile farklı habitatlarda rahatlıkla yaşamaktadır. Özellikle meyve ve tohumlarla beslendiği için tarım alanlarını da tercih etmektedir.</li>
                <li>Kaya sansarı (Martes foina): Yerleşim yerleri ve kayalık bölgelerle çalılık alanlarda yaygın olarak gözlemlenmiştir.</li>
                <li>Porsuk (Meles meles): Ormanlık alanları ve tarım alanlarını tercih etmiştir.</li>
                <li>Yaban Tavşanı (Lepus europaeus): Geniş bir yayılım göstermiş ve her tür habitatta bulunmuştur. Çalışmanın sonuçları, bu türün açık alanları ve ziraat alanlarını tercih ettiğini, lakin çalılık ve ormanlık alanlarla birleşik bölgelerde daha sık gözlemlendiğini ortaya koymuştur.</li>
            </ol>
            <h2>Etkileşimler ve Ekolojik Rol</h2>
            <ol>
                <li>
                    Tilki (Vulpes vulpes): Tilkinin beslenme alışkanlığı omnivor olduğundan, küçük memeliler, kuşlar ve bitkisel besinlerle beslenmektedir. Özellikle kemirgen yoğunluğu yüksek olan alanları tercih etmektedir.
                </li>
                <li>
                    Kaya sansarı (Martes foina): Yerleşim yerleri ve kayalık bölgelerle çalılık alanlarda yaygın olarak gözlemlenmiştir. Bu tür, beslenme açısından omnivor olup, genellikle küçük memeliler ve kuş yumurtaları ile beslenmekte, zaman zaman bitkisel besinlere de yönelmektedir.
                </li>
                <li>
                    Porsuk (Meles meles): Ormanlık alanları ve tarım alanlarını tercih eden Porsuk, besin kaynağı olarak tahıl, bitki kökleri, böcekler ve küçük memelilerden yararlanmaktadır. İnsan aktivitesinin düşük olduğu alanları tercih etmekte olup, yoğun insan etkisi bulunan bölgelerden kaçınmaktadır.
                </li>
            </ol>
            <h1>Sonuçlar ve Değerlendirme</h1>
            <p>Çalışmada elde edilen bulgular, Ağlasun bölgesindeki memeli türlerin habitat tercihlerini ve birbirleriyle olan ekolojik ilişkilerini ortaya koymaktadır. Özellikle, yaban domuzu ve yaban tavşanı gibi geniş habitat toleransına sahip türlerin ekosistemde yaygın olarak dağıldığını, tilki ve kaya sansarı'nın daha spesifik habitat tercihleri gösterdiği ortaya çıkmıştır. Ayrıca, porsuk’un daha izole habitatları tercih ettiği gözlenmiş ve diğer türlerle habitat örtüşmesinden kaçındığı da belirlenmiştir. Bu bulgular, ekosistem dengesi ve biyolojik çeşitliliğin korunması açısından önemli olup insanlığa çok önemli bakış açıları kazandırmıştır.
                <br></br>
                Bu çalışma, gösterge tür analizlerinin ekosistem yönetiminde nasıl kullanılabileceğine dair örnek sunmaktadır ve yaban hayatı yönetimi stratejilerinin geliştirilmesine katkı sağlamaktadır. Türlerin birbirleriyle olan ilişkilerini belirlemek için kullanılan analiz yöntemleri, ekolojik araştırmalarda daha geniş ölçekte uygulanabilir ve diğer bölgelerdeki tür dağılım çalışmalarına örnek teşkil edebilir.
            </p>
            <p>X adlı makalenin özetidir.</p>
        </>
    )
}
export default Article1