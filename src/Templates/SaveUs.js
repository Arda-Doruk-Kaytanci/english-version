import React, { useEffect } from "react";
import "../Css Files/SaveUs.css"
import pol1 from "../Images/pol1.jpg"
import pol2 from "../Images/pol2.jpg"
import pol3 from "../Images/pol3.jpg"
import pol4 from "../Images/pol4.jpg"
import nature1 from "../Images/nature1.jpg"
import nature2 from "../Images/nature2.jpg"
import nature3 from "../Images/nature3.jpg"
import nature4 from "../Images/nature4.jpg"
import logo1 from "../Images/logo1.png"
import logo2 from "../Images/logo2.png"
import logo3 from "../Images/logo3.png"
import logo4 from "../Images/logo4.png"
import logo5 from "../Images/logo5.png"
import logo6 from "../Images/logo6.png"
import logo7 from "../Images/logo7.png"
import logo8 from "../Images/logo8.png"
import logo9 from "../Images/logo9.png"
import biglogo1 from "../Images/biglogo1.png"
import biglogo2 from "../Images/biglogo2.png"
import biglogo3 from "../Images/biglogo3.png"
import biglogo4 from "../Images/biglogo4.png"
import biglogo5 from "../Images/biglogo5.png"
import biglogo6 from "../Images/biglogo6.png"
import biglogo7 from "../Images/biglogo7.png"
import biglogo8 from "../Images/biglogo8.png"
import info1 from "../Images/info1.png"
import info2 from "../Images/info2.png"
import info3 from "../Images/info3.png"
import info4 from "../Images/info4.png"
import info5 from "../Images/info5.png"
import info6 from "../Images/info6.png"

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
                    <img alt="" className="div-img" src={pol1}></img>
                </div>
                <div className="div a2th">
                    <img alt="" className="div-img" src={nature1}></img>
                </div>
                <div className="div a3th">
                    <img alt="" className="div-img" src={pol2}></img>
                </div>
                <div className="div a4th">
                    <img alt="" className="div-img" src={nature2}></img>
                </div>
                <div className="div a5th">
                    <img alt="" className="div-img" src={pol3}></img>
                </div>
                <div className="div a6th">
                    <img alt="" className="div-img" src={nature3}></img>
                </div>
                <div className="div a7th">
                    <img alt="" className="div-img" src={pol4}></img>
                </div>
                <div className="div a8th">
                    <img alt="" className="div-img" src={nature4}></img>
                </div>
            </section>
            <h1>Küçük başla</h1>

            <section className="container2">
                <div className="div b1th">
                    <img alt="" className="div-img" src={logo1}></img>
                </div>
                <div className="div b2th">
                    <img alt="" className="div-img" src={logo2}></img>
                </div>
                <div className="div b3th">
                    <img alt="" className="div-img" src={logo3}></img>
                </div>
                <div className="div b4th">
                    <img alt="" className="div-img" src={logo4}></img>
                </div>
                <div className="div b5th">
                    <img alt="" className="div-img" src={logo5}></img>
                </div>
                <div className="div b6th">
                    <img alt="" className="div-img" src={logo6}></img>
                </div>
                <div className="div b7th">
                    <img alt="" className="div-img" src={logo7}></img>
                </div>
                <div className="div b8th">
                    <img alt="" className="div-img" src={logo8}></img>
                </div>
                <div className="div b9th">
                    <img alt="" className="div-img" src={logo9}></img>
                </div>
            </section>
            <h1>Belki Bir Gün Büyür</h1>
            <section className="container">
                <div className="div a1th">
                    <img alt="" className="div-img" src={biglogo1}></img>
                </div>
                <div className="div a2th">
                    <img alt="" className="div-img" src={biglogo2}></img>
                </div>
                <div className="div a3th">
                    <img alt="" className="div-img" src={biglogo3}></img>
                </div>
                <div className="div a4th">
                    <img alt="" className="div-img" src={biglogo4}></img>
                </div>
                <div className="div a5th">
                    <img alt="" className="div-img" src={biglogo5}></img>
                </div>
                <div className="div a6th">
                    <img alt="" className="div-img" src={biglogo6}></img>
                </div>
                <div className="div a7th">
                    <img alt="" className="div-img" src={biglogo7}></img>
                </div>
                <div className="div a8th">
                    <img alt="" className="div-img" src={biglogo8}></img>
                </div>
            </section>
            <h1>Hala Mı Anlamadın?</h1>
            <h2>Gel O Zaman</h2>
            <div className="stepsconta">
                <ul className="steps-to-solve">
                    <li className="used-tools-container right">
                        <img src={info1} alt="" className="highlight-img"></img >
                        <p>Yaşadığımız gezegen, insanoğlunun ortak yuvası. Ancak bu yuvanın sürdürülebilirliği, giderek artan tehditlerle karşı karşıya. Her geçen gün, iklim değişikliğinin yıkıcı etkilerini daha fazla hissediyoruz: Yükselen deniz seviyeleri, ani sıcaklık değişimleri, kuraklık ve giderek daha sık yaşanan doğal felaketler bunun en somut göstergelerinden. Ancak her şeye rağmen bir umut ışığı var. Henüz geç değil. Bugünden harekete geçersek, doğayla uyum içinde yaşayarak bu değişimin önüne geçebiliriz. Bu sorumluluk sadece hükümetlerin veya büyük şirketlerin değil; her bireyin, her ailenin ve her topluluğun omuzlarında.
                            Daha sürdürülebilir yaşam alışkanlıklarını benimseyerek atıklarımızı azaltabilir, karbon ayak izimizi küçültebilir ve çevre dostu politikaların destekçisi olabiliriz. Elektrik tüketiminde tasarruf yapmak, plastik kullanımı azaltmak ve doğal kaynakların korunmasına katkı sunmak gibi adımlar atarak, dünyayı daha sağlıklı bir geleceğe taşıyabiliriz. Gelecek nesillere tertemiz ormanlar, berrak göller ve canlı ekosistemler bırakmak, hepimizin ortak amacı olmalı.</p>
                    </li>
                    <li className="used-tools-container left">
                        <img src={info2} alt="" className="highlight-img"></img >
                        <p>Dünyayı kurtarmak göz korkutucu bir görev gibi görünebilir. Ancak her büyük dönüşüm, küçük adımlarla başlar. Alışkanlıklarımızı biraz değiştirmek, sürdürülebilir bir geleceğe atılmış dev bir adım demektir. Enerji tasarruflu ampuller kullanmak, tek kullanımlık plastikleri hayatımızdan çıkarmak ve mümkünse kısa mesafelerde arabayı tercih etmek yerine yürümek ya da bisiklet kullanmak bu adımların en basitleridir.
                            Ayrıca, mutfağımızdaki organik atıkları kompost yaparak toprağa geri kazandırabilir, su tasarruflu duş başlıkları ve musluklar kullanarak değerli su kaynaklarını koruyabiliriz. Evde boşa çalışan cihazların fişini çekmek gibi görünüşte küçük olan bu hareketler, toplamda karbon emisyonlarını önemli ölçüde azaltabilir. Bu alışkanlıkların toplum geneline yayılması, ekosistemimizde büyük bir dönüşüm başlatabilir. Her gün attığımız ufak, bilinçli adımlar, yarının dünyasında dev bir fark yaratacaktır. Daha sürdürülebilir bir yaşam biçimini kucaklamak için ne kadar erken harekete geçersek, gezegenimize olan katkımız o kadar büyük olur.</p>

                    </li>
                    <li className="used-tools-container right">
                        <img src={info3} alt="" className="highlight-img"></img >
                        <p>Bireysel çabalar değerli ve gerekli olsa da, değişimi hızlandırmanın yolu topluluk gücünden geçer. Yaşadığınız çevredeki ekolojik projelere destek vererek, etki alanınızı katlayabilirsiniz. Mahallenizde düzenlenen ağaç dikme kampanyalarına katılmak, park ve plaj temizleme etkinliklerinde yer almak ya da yerel derneklerin gönüllüsü olmak sadece doğaya katkı sağlamakla kalmaz, aynı zamanda çevrenizdeki insanlara ilham verir.
                            Topluluk hareketlerini desteklemek için aynı zamanda yenilenebilir enerji, geri dönüşüm gibi konularda farkındalık yaratacak atölyeler düzenlenebilir veya bu tür projelere maddi destek sağlanabilir. Yerel yönetime, yaşadığınız bölgenin daha çevreci olmasını sağlayacak öneriler sunarak doğrudan katkıda bulunabilirsiniz. Unutmayın, birlikte hareket ettiğimizde sesimiz daha güçlü çıkar ve değişim yaratma kapasitemiz artar. Her birey, topluluk içinde bir rol model olabilir ve çevresindekileri harekete geçirebilir.</p>
                    </li>
                    <li className="used-tools-container left">
                        <img src={info4} alt="" className="highlight-img"></img >
                        <p>Bugün attığınız adımlar, yarın nasıl bir dünyada yaşayacağınızı şekillendirecek. Sosyal medyanın gücünden yararlanarak çevre sorunlarına dikkat çekebilir, farkındalık kampanyalarını paylaşarak daha geniş kitlelere ulaşabilirsiniz. Çevrenizdeki insanları da harekete geçirmeye çalışarak, küçük çevrenizde büyük bir fark yaratabilirsiniz.
                            Bununla birlikte, değişim yalnızca bireysel çabalarla sınırlı kalmamalı. Yerel yönetimlere, belediyelere ve milletvekillerine ulaşarak çevre dostu politikaların uygulanmasını destekleyin. Yenilenebilir enerjiye daha fazla yatırım yapılması, plastik kullanımının azaltılması ve yeşil alanların korunması gibi konuların gündeme gelmesini sağlayın. Her birimizin sesi birleştiğinde, güçlü bir değişim hareketi yaratabiliriz. Siz de bu değişimin öncüsü olun. Çünkü doğa, insanlık ve tüm canlılar uyum içinde bir geleceği hak ediyor.</p>
                    </li>
                    <li className="used-tools-container right">
                        <img src={info5} alt="" className="highlight-img"></img >
                        <p>Teknolojik ilerlemeler, sürdürülebilir bir dünya için güçlü araçlar sunuyor. Yenilenebilir enerji kaynakları, karbon salınımını azaltmanın ve doğayı korumanın en etkili yollarından biri. Güneş panelleri, rüzgar enerjisi ve elektrikli araçlar gibi teknolojiler, geleceğin enerji çözümlerini bugünden hayata geçirmemize yardımcı oluyor. Siz de bu yenilikleri hayatınıza dahil ederek değişime katkıda bulunabilirsiniz.
                            Evinize güneş panelleri kurmak, enerji tasarruflu cihazlar kullanmak ve elektrikli araçları tercih etmek bu adımlardan sadece bazıları. Ayrıca, yenilikçi çevre teknolojilerini destekleyen şirketleri tercih ederek endüstrilerin daha sürdürülebilir standartlara geçmesini teşvik edebilirsiniz. Şehirlerde dikey bahçeler, enerji verimli binalar ve akıllı su yönetimi gibi projeler, yeşil bir geleceğin inşasında kritik rol oynuyor. Yeniliklere yatırım yaparak hem doğayı koruyabilir hem de ekonomik faydalar elde edebilirsiniz.</p>
                    </li>
                    <li className="used-tools-container left">
                        <img src={info6} alt="" className="highlight-img"></img >
                        <p>Bugün dünyaya nasıl davrandığımız, yarın çocuklarımıza bırakacağımız mirası belirler. Bu nedenle genç nesilleri çevresel sorumluluk bilinciyle yetiştirmek son derece önemlidir. Onlara doğanın güzelliklerini tanıtarak, ekosistemlerin önemini anlatarak ve sürdürülebilir yaşam alışkanlıklarını öğretmek, gezegenimizin geleceği için yapabileceğimiz en değerli yatırımlardan biridir.
                            Okullarda düzenlenen doğa eğitimlerine katılmak, çocuklarla birlikte ağaç dikmek veya geri dönüşüm projelerinde yer almak, onları bilinçli bireyler olarak yetiştirmemizi sağlar. Ayrıca, çevresel başarıları ve ilham verici liderleri ön plana çıkararak, gençlerin bu mücadeleye katılmaları teşvik edilebilir. Doğa temelli oyunlar, atölyeler ve hikayeler aracılığıyla, geleceğin liderlerinde doğaya karşı derin bir saygı ve sevgi inşa edebiliriz. Böylece çocuklarımız, hem daha sağlıklı bir gezegen miras alacak hem de onu korumak için gereken bilgi ve tutkuyu taşıyacaktır.</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default SaveUs