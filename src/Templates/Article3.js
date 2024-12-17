import React from 'react';
import frameworkImg from "../Images/diagram.png";
import nitrogenCycleImg from "../Images/nitrocycle.png";
import "../Css Files/Article3.css";

function Article3() {
    return (
        <div className="article-3">
            <h1>Yerel Üretim Sistemleri: Teknolojik ve Ekolojik Etkileşimler</h1>
            <p>
                Bu çalışma, endüstriyel süreçler ve ekosistem hizmetleri arasındaki karşılıklı ilişkileri
                inceleyen **teknolojik-ekolojik entegrasyon çerçevesi** sunmaktadır. Yerel üretim sistemlerinin
                **sürdürülebilirliği**, doğal kaynakların verimli kullanımı ve ekosistem sağlığı arasındaki dengeye dayanmaktadır.
            </p>

            <h2>Çalışmanın Amacı ve Kapsamı</h2>
            <ul>
                <li>Teknolojik sistemlerin ekosistem hizmetleriyle uyumlu hale getirilmesi</li>
                <li>Enerji üretimi, atık yönetimi ve doğal kaynakların sürdürülebilir kullanımı</li>
                <li>Ekolojik süreçlerin modellenmesi ve performans göstergeleriyle analizi</li>
            </ul>

            <h2>Temel Kavramsal Model</h2>
            <p>
                Teknolojik-ekolojik çerçeve; **ekolojik bileşenler**, **teknolojik bileşenler** ve **kaynak akışı**
                arasındaki ilişkileri tanımlar.
            </p>
            <ul>
                <li><strong>Ekolojik Bileşenler:</strong> Su döngüsü, azot döngüsü, biyokütle üretimi</li>
                <li><strong>Teknolojik Bileşenler:</strong> Enerji üretim sistemleri, atık arıtma tesisleri</li>
                <li><strong>Kaynak Akışı:</strong> Enerji, su ve besin maddelerinin giriş-çıkışı</li>
            </ul>
            <img src={frameworkImg} alt="Tekno-Ekolojik Sistem Modeli" className="article3-image" />

            <h2>Uygulama Alanı: Whitehill ve Bordon Ekokenti</h2>
            <p>
                Uygulama çalışması, İngiltere’de **Whitehill ve Bordon Ekokenti** üzerinde gerçekleştirilmiştir.
                Burada **fundalık alanlar** kullanılarak biyokütle enerji üretimi optimize edilmiştir.
            </p>
            <h3>Modelleme Adımları</h3>
            <ol>
                <li>Ekolojik ve teknolojik bileşenlerin veri setlerinin oluşturulması</li>
                <li>Enerji üretimi ve azot geri dönüşüm oranlarının hesaplanması</li>
                <li>Sistem performans göstergelerinin belirlenmesi</li>
            </ol>

            <h2>Hesaplamalar ve Analizler</h2>
            <p>
                Bu çalışmada **bütünleşik performans göstergeleri** kullanılmıştır:
            </p>
            <ul>
                <li><strong>Biyokütle Kesim Oranı (%0.5):</strong> Ekosistem sağlığı üzerindeki minimum etkiyle enerji üretimini dengelemek için hesaplanmıştır.</li>
                <li><strong>Azot Geri Dönüşüm Oranı (%50):</strong> Ekolojik döngülerin sürdürülebilir çalışmasını desteklemek amacıyla analiz edilmiştir.</li>
                <li><strong>Enerji Talep Karşılama Oranı (%75):</strong> Yerel enerji taleplerinin büyük kısmı biyokütle üretimiyle karşılanmıştır.</li>
            </ul>
            <img src={nitrogenCycleImg} alt="Azot Döngüsü" className="article3-image" />
            <p>
                Hesaplamalarda **Azot Geri Dönüşüm Katsayısı (NRC)** ve enerji çıktısı oranı kullanılmıştır:
                <pre>
                    NRC = (Toplam Geri Dönüşüm Miktarı) / (Giriş Miktarı) x 100
                    Enerji Üretimi = Biyokütle Hasat Oranı x Enerji Katsayısı
                </pre>
            </p>

            <h2>Bulgular</h2>
            <p>
                Bulgular, biyokütle enerji üretimi ile ekosistem sağlığı arasında güçlü bir ilişki olduğunu göstermektedir:
            </p>
            <ul>
                <li><strong>Optimum Performans:</strong> %50 azot geri dönüşümü ve %0.5 biyokütle kesim oranı</li>
                <li><strong>Toplam Karbon Yakalama:</strong> 50 yıllık süreçte maksimum değere ulaşıldı</li>
                <li><strong>Enerji Talep Karşılanma:</strong> Yerel enerji talebinin %75'i karşılandı</li>
                <li><strong>Ekosistem Sağlığı:</strong> Dengeli azot döngüsü ve fundalık alanların korunması</li>
            </ul>

            <h2>Sonuç ve Değerlendirme</h2>
            <p>
                Teknolojik ve ekolojik entegrasyon, sürdürülebilir enerji üretimi için önemli fırsatlar sunmaktadır.
                Bu çalışma, biyokütle enerji sistemlerinin ekosistem hizmetleriyle entegre edildiğinde nasıl verimli
                ve çevre dostu hale getirilebileceğini göstermektedir. Modelleme süreci, diğer bölgelerde de uygulanabilir
                bir çerçeve sunmaktadır.
            </p>
            <p><em>Kaynak: Martinez‐Hernandez ve diğerleri, 2016</em></p>
        </div>
    );
}

export default Article3;
