import React, { useEffect, useState } from "react";
import "../Css Files/OptimizeYourEnvironment.css";
import { Line, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

import axios from 'axios'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



const OptimizationSystem = () => {
    const [inputs, setInputs] = useState({
        floor: 1,
        area: 100,
        balcony_size: 100,
        devices: [],
    });

    const [altitude, setAltitude] = useState([])
    const [weather, setWeather] = useState([])

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [location, setLocation] = useState({});


    const [date, setDate] = useState({
        day: "",
        month: "",
        year: ""
    })
    const [usefulDate, setUsefulDate] = useState()
    const [startDate, setStartDate] = useState()
    const [didIt, setDidIt] = useState(false)
    const formatDate = (year, month, day) => {
        const paddedMonth = month.toString().padStart(2, "0");
        const paddedDay = day.toString().padStart(2, "0");
        return `${year}-${paddedMonth}-${paddedDay}`;
    };

    const [animalData, setAnimalData] = useState([])

    const plantDatabase = [
        { name: "Domates", suitableFor: "ılıman", spaceRequirement: 2, description: "Orta veya büyük balkonlar için uygundur. Bol güneş ışığına ihtiyaç duyar." },
        { name: "Biber", suitableFor: "ılıman", spaceRequirement: 1.5, description: "Orta büyüklükte balkonlar için uygundur. Bol güneş ışığı sever." },
        { name: "Salatalık", suitableFor: "ılıman", spaceRequirement: 1.5, description: "Güneşli alanlarda iyi yetişir, orta büyüklükte balkonlara uygundur." },
        { name: "Marul", suitableFor: "ılıman", spaceRequirement: 1, description: "Hızlı büyüyen ve küçük ila orta boyutlu balkonlar için uygundur." },
        { name: "Kabak", suitableFor: "ılıman", spaceRequirement: 4, description: "Büyük alanlar ve iyi drenajlı toprak için uygundur." },
        { name: "Fesleğen", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Küçük balkonlarda kolayca yetişir, mutfak için uygundur." },
        { name: "Roka", suitableFor: "ılıman", spaceRequirement: 1, description: "Hızlı büyüyen, mutfak için uygun bir bitkidir." },
        { name: "Nane", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Az yer kaplar ve hoş bir aroma sağlar." },
        { name: "Maydanoz", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Küçük balkonlarda kolayca yetişir." },
        { name: "Dereotu", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Küçük balkonlarda kolayca yetişir, mutfakta kullanılabilir." },
        { name: "Çilek", suitableFor: "ılıman", spaceRequirement: 1, description: "Küçük alanlarda kolayca yetişir, tatlı ve lezzetli meyveler sunar." },
        { name: "Elma Ağacı", suitableFor: "soğuk", spaceRequirement: 15, description: "Soğuk iklimlerde büyük alanlarda yetişir." },
        { name: "Şeftali Ağacı", suitableFor: "ılıman", spaceRequirement: 10, description: "Orta ila büyük balkonlarda yetişebilir." },
        { name: "Limon Ağacı", suitableFor: "sıcak", spaceRequirement: 10, description: "Sıcak iklimlerde büyük balkonlar için mükemmel bir seçimdir." },
        { name: "Zeytin Ağacı", suitableFor: "sıcak", spaceRequirement: 12, description: "Büyük alanlar ve sıcak iklimler için idealdir." },
        { name: "Kayısı Ağacı", suitableFor: "ılıman", spaceRequirement: 10, description: "Orta büyüklükte balkonlarda yetişebilir." },
        { name: "Karpuz", suitableFor: "sıcak", spaceRequirement: 5, description: "Büyük alanlarda yetişir, sıcak iklimlerde büyür." },
        { name: "Üzüm Asması", suitableFor: "ılıman", spaceRequirement: 3, description: "Gölge sağlayan dekoratif bir bitkidir." },
        { name: "Tropikal Çiçekler", suitableFor: "sıcak", spaceRequirement: 3, description: "Büyük, güneşli balkonlarda güzel dekoratif bitkiler." },
        { name: "Ayçiçeği", suitableFor: "ılıman", spaceRequirement: 2, description: "Güneşli balkonlarda büyüyen dekoratif ve faydalı bir bitkidir." },
        { name: "Havuç", suitableFor: "soğuk", spaceRequirement: 1, description: "Küçük kaplarda yetişir, soğuk iklimlerde büyür." },
        { name: "Patates", suitableFor: "ılıman", spaceRequirement: 2, description: "Orta büyüklükteki alanlar için uygundur." },
        { name: "Soğan", suitableFor: "soğuk", spaceRequirement: 1, description: "Küçük alanlarda yetişir ve soğuk iklimlere uygundur." },
        { name: "Sarımsak", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Az yer kaplar, mutfak kullanımı için idealdir." },
        { name: "Bambu", suitableFor: "ılıman", spaceRequirement: 8, description: "Büyük balkonlarda dekoratif bir bitki olarak uygundur." },
        { name: "Lavanta", suitableFor: "ılıman", spaceRequirement: 1, description: "Dekoratif ve hoş kokulu bir bitki, güneşli alanları sever." },
        { name: "Nergis", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Küçük balkonlarda yetişebilen dekoratif bir bitkidir." },
        { name: "Orkide", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Dekoratif bir çiçek, dikkatli bakım gerektirir." },
        { name: "Karanfil", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Dekoratif bir çiçek, küçük alanlarda yetişir." },
        { name: "Sukulentler", suitableFor: "sıcak", spaceRequirement: 0.5, description: "Sıcak iklimlerde az yer kaplar ve kolayca yetişir." },
        { name: "Kaktüs", suitableFor: "sıcak", spaceRequirement: 0.5, description: "Sıcak ve kurak koşullarda kolayca yetişir." },
        { name: "Çam Fidanı", suitableFor: "soğuk", spaceRequirement: 20, description: "Soğuk iklimlerde büyük alanlar için uygundur." },
        { name: "Zencefil", suitableFor: "sıcak", spaceRequirement: 2, description: "Sıcak iklimlerde yetişir ve tıbbi faydalar sağlar." },
        { name: "Nar", suitableFor: "ılıman", spaceRequirement: 8, description: "Dekoratif bir ağaç, ılıman iklimlerde yetişir." },
        { name: "Muz Ağacı", suitableFor: "sıcak", spaceRequirement: 10, description: "Sıcak iklimlerde büyük balkonlar için idealdir." },
        { name: "Fındık Ağacı", suitableFor: "soğuk", spaceRequirement: 15, description: "Soğuk iklimlerde büyük alanlar için uygundur." },
        { name: "Ahududu", suitableFor: "ılıman", spaceRequirement: 3, description: "Tatlı meyve, orta büyüklükte balkonlar için uygundur." },
        { name: "Kiraz Ağacı", suitableFor: "ılıman", spaceRequirement: 12, description: "Büyük balkonlar için uygundur." },
        { name: "Böğürtlen", suitableFor: "ılıman", spaceRequirement: 2, description: "Orta büyüklükte balkonlar için uygundur." },
        { name: "Ananas", suitableFor: "sıcak", spaceRequirement: 6, description: "Sıcak iklimlerde yetişir, dikkatli bakım gerektirir." },
        { name: "Hardal", suitableFor: "ılıman", spaceRequirement: 2, description: "Baharat bitkisi olarak yetiştirilir." },
        { name: "Adaçayı", suitableFor: "ılıman", spaceRequirement: 1, description: "Tıbbi ve mutfak kullanımı için uygundur." },
        { name: "Kekik", suitableFor: "ılıman", spaceRequirement: 1, description: "Küçük balkonlarda kolayca yetişir." },
        { name: "Kavun", suitableFor: "ılıman", spaceRequirement: 4, description: "Büyük balkonlarda yetişir ve sıcak yazlarda büyüme gösterir." },
        { name: "Turp", suitableFor: "soğuk", spaceRequirement: 1, description: "Küçük balkonlarda ve soğuk iklimlerde yetişebilir." },
        { name: "Armut Ağacı", suitableFor: "ılıman", spaceRequirement: 12, description: "Orta ve büyük balkonlar için uygundur." },
        { name: "Nar Ağacı", suitableFor: "ılıman", spaceRequirement: 10, description: "Ilıman iklimlerde küçük alanlarda yetişebilir." },
        { name: "Brokoli", suitableFor: "soğuk", spaceRequirement: 2, description: "Soğuk iklimlerde yetişen besleyici bir sebzedir." },
        { name: "Enginar", suitableFor: "ılıman", spaceRequirement: 3, description: "Güneşli balkonlarda büyüyen dayanıklı bir bitkidir." },
        { name: "Papaya", suitableFor: "sıcak", spaceRequirement: 8, description: "Sıcak iklimlerde ve geniş balkonlarda yetişebilir." },
        { name: "Avokado", suitableFor: "sıcak", spaceRequirement: 12, description: "Sıcak iklimlerde büyük balkonlarda yetişir." },
        { name: "Erik Ağacı", suitableFor: "ılıman", spaceRequirement: 10, description: "Orta ve geniş balkonlar için uygundur." },
        { name: "Kayısı", suitableFor: "ılıman", spaceRequirement: 8, description: "Ilıman iklimlerde balkonlarda yetişen tatlı bir meyvedir." },
        { name: "Fesleğen Mor", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Dekoratif bir bitkidir ve mutfaklarda sıkça kullanılır." },
        { name: "Defne Ağacı", suitableFor: "ılıman", spaceRequirement: 5, description: "Büyük balkonlar için uygundur, hoş bir aroma yayar." },
        { name: "Çam Fıstığı", suitableFor: "soğuk", spaceRequirement: 20, description: "Soğuk iklimlerde geniş alanlarda yetişir." },
        { name: "Kivi", suitableFor: "ılıman", spaceRequirement: 6, description: "Tırmanıcı yapısıyla dikey alanlar için uygundur." },
        { name: "Ananas", suitableFor: "sıcak", spaceRequirement: 5, description: "Tropik balkonlarda yetişir ve dikkatli bakım gerektirir." },
        { name: "Karnabahar", suitableFor: "soğuk", spaceRequirement: 2, description: "Soğuk havalarda yetişir ve küçük balkonlar için uygundur." },
        { name: "Yer Fıstığı", suitableFor: "sıcak", spaceRequirement: 3, description: "Sıcak iklimlerde yetişen faydalı bir bitkidir." },
        { name: "Kivi Asması", suitableFor: "ılıman", spaceRequirement: 5, description: "Orta büyüklükte balkonlarda gölge sağlayabilir." },
        { name: "Patlıcan", suitableFor: "ılıman", spaceRequirement: 2, description: "Bol güneşli alanları seven dayanıklı bir sebzedir." },
        { name: "Hardal Otu", suitableFor: "ılıman", spaceRequirement: 1, description: "Ilıman iklimlerde küçük balkonlarda yetişebilir." },
        { name: "Arpa", suitableFor: "soğuk", spaceRequirement: 4, description: "Soğuk iklimlerde yetişen faydalı bir tahıldır." },
        { name: "Buğday", suitableFor: "ılıman", spaceRequirement: 5, description: "Tahıl olarak kullanılabilir ve geniş balkonlarda yetişir." },
        { name: "Mısır", suitableFor: "ılıman", spaceRequirement: 6, description: "Büyük balkonlarda yetişebilen bir sebzedir." },
        { name: "Zencefil", suitableFor: "sıcak", spaceRequirement: 2, description: "Tıbbi özelliklere sahip bir bitki, sıcak iklimlerde yetişir." },
        { name: "Adaçayı", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Tıbbi bitki olarak bilinir ve küçük balkonlara uygundur." },
        { name: "Melisa", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Hoş bir kokuya sahip, küçük alanlarda yetişir." },
        { name: "Tere", suitableFor: "soğuk", spaceRequirement: 0.5, description: "Soğuk iklimlerde küçük balkonlarda yetişebilir." },
        { name: "Lahana", suitableFor: "soğuk", spaceRequirement: 3, description: "Soğuk iklimlerde geniş alanlarda yetişir." },
        { name: "Ihlamur Ağacı", suitableFor: "ılıman", spaceRequirement: 15, description: "Büyük alanlarda yetişebilen hoş kokulu bir ağaçtır." },
        { name: "Mango", suitableFor: "sıcak", spaceRequirement: 12, description: "Tropik iklimlerde ve geniş balkonlarda yetişebilir." },
        { name: "Ceviz Ağacı", suitableFor: "soğuk", spaceRequirement: 25, description: "Soğuk iklimlerde geniş alanlar için uygundur." },
        { name: "Kavun", suitableFor: "sıcak", spaceRequirement: 6, description: "Sıcak yaz aylarında yetişen tatlı bir meyvedir." },
        { name: "Anason", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Tıbbi ve mutfak kullanımı için uygundur." },
        { name: "Kekik Dağ", suitableFor: "soğuk", spaceRequirement: 0.5, description: "Dağ iklimine uygun, az yer kaplayan bir bitkidir." },
        { name: "Portakal Ağacı", suitableFor: "ılıman", spaceRequirement: 8, description: "Orta ve büyük balkonlarda yetişebilir." },
        { name: "Böğürtlen", suitableFor: "ılıman", spaceRequirement: 2, description: "Tatlı meyve veren, orta büyüklükte balkonlar için uygundur." },
        { name: "Ahududu", suitableFor: "ılıman", spaceRequirement: 2, description: "Orta büyüklükte balkonlarda yetişebilen tatlı bir bitkidir." },
        { name: "Fındık Ağacı", suitableFor: "soğuk", spaceRequirement: 20, description: "Soğuk iklimlerde büyük alanlar için uygundur." },
        { name: "Lale", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Dekoratif bir çiçek, küçük balkonlarda yetişebilir." },
        { name: "Nane Çeşitleri", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Farklı nane türleri küçük alanlarda yetişir." },
        { name: "Papatya", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Küçük alanlarda yetişen hoş kokulu bir bitkidir." },
        { name: "Yonca", suitableFor: "soğuk", spaceRequirement: 1, description: "Soğuk iklimlerde küçük balkonlar için uygundur." },
        { name: "Börülce", suitableFor: "ılıman", spaceRequirement: 1, description: "Orta büyüklükte balkonlarda yetişebilir." },
        { name: "Kivi Asması", suitableFor: "ılıman", spaceRequirement: 6, description: "Orta büyüklükte balkonlarda gölge sağlayabilir." },
        { name: "Ebegümeci", suitableFor: "ılıman", spaceRequirement: 1, description: "Tıbbi özellikleri olan ve kolayca yetişen bir bitkidir." },
        { name: "Çam Sakızı", suitableFor: "soğuk", spaceRequirement: 25, description: "Soğuk iklimlere uygun büyük alanlarda yetişir." },
        { name: "Nane Çayı", suitableFor: "ılıman", spaceRequirement: 0.5, description: "Mutfak kullanımı için ideal küçük balkon bitkisi." }
    ];

    function recommendPlants(weatherData, balconyArea) {
        if (!Array.isArray(weatherData) || weatherData.length === 0) {
            throw new Error("Geçersiz hava durumu verisi sağlandı.");
        }

        const reversedTemperatures = [...weatherData].reverse();

        const averageTemperature = reversedTemperatures.reduce((sum, temp) => sum + temp, 0) / reversedTemperatures.length;

        console.log("30 Yıllık Ortalama Sıcaklık:", averageTemperature);

        let climate;
        if (averageTemperature < 10) {
            climate = "soğuk";
        } else if (averageTemperature >= 10 && averageTemperature <= 20) {
            climate = "ılıman";
        } else {
            climate = "sıcak";
        }

        const suitablePlants = plantDatabase.filter(
            (plant) => plant.suitableFor === climate && plant.spaceRequirement <= balconyArea
        );

        if (suitablePlants.length === 0) {
            return [];
        }
        return suitablePlants.map((plant) => ({
            name: plant.name,
            description: plant.description,
            spaceRequirement: plant.spaceRequirement,
            amount: Math.round((balconyArea - 5) / plant.spaceRequirement)
        }));
    }
    useEffect(() => {
        const time = new Date();
        const currentDate = {
            day: time.getDate(),
            month: time.getMonth() + 1,
            year: time.getFullYear(),
        };
        setDate(currentDate);
        setUsefulDate(formatDate(currentDate.year, currentDate.month, currentDate.day));
        setStartDate(formatDate(currentDate.year - 30, currentDate.month, currentDate.day));
    }, []);

    useEffect(() => {
        const getLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            alert("Konum erişimi reddedildi. Lütfen tarayıcı ayarlarından konum iznini açın!");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            alert("Konum bilgisi alınamadı. Lütfen cihazınızın konum ayarlarını kontrol edin.");
                            break;
                        case error.TIMEOUT:
                            alert("Konum isteği zaman aşımına uğradı. Lütfen tekrar deneyin.");
                            break;
                        default:
                            alert("Bilinmeyen bir hata oluştu. Lütfen tekrar deneyin.");
                    }
                }
            );
        };

        getLocation();
    }, []);



    const fetchWeatherData = async (firstDate, lastDate) => {
        try {
            console.log("Start Date:", startDate);
            console.log("End Date:", usefulDate);

            const response = await axios.get("https://archive-api.open-meteo.com/v1/archive", {
                params: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    start_date: firstDate,
                    end_date: lastDate,
                    daily: "temperature_2m_mean",
                    timezone: "UTC",
                },
            });
            console.log(response.data);
            setDidIt(true)
            setWeather(response.data)
            setAltitude(response.data.elevation)
        } catch (e) {
            console.error("Error fetching data:", e);
        }
    };

    useEffect(() => {
        console.log(location.longitude, location.latitude, usefulDate, startDate)
        if (location.latitude && location.longitude && usefulDate && startDate && !didIt) {
            console.log("Location and date set, fetching weather data...");
            const firstDate = startDate
            const lastDate = usefulDate
            fetchWeatherData(firstDate, lastDate);
        }
    },)

    const handleInputChange = (e, index, field) => {

        if (field) {
            const updatedDevices = [...inputs.devices];
            updatedDevices[index][field] = e.target.value;
            setInputs((prev) => ({ ...prev, devices: updatedDevices }));
        } else {
            const { name, value } = e.target;
            setInputs((prev) => ({ ...prev, [name]: value }));
        }
        console.log(inputs)
    };

    const createMoreDeviceAdder = () => {
        setInputs((prev) => ({
            ...prev,
            devices: [...prev.devices, { name: "", watt: 0, hours: 0 }],
        }));
    };

    const removeDevice = (index) => {
        setInputs((prev) => ({
            ...prev,
            devices: prev.devices.filter((_, i) => i !== index),
        }));
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16,
                        family: "Arial",
                        style: "italic",
                    },
                    color: "black",
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 14,
                        family: "Courier New",
                    },
                    color: "black",
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 14,
                        family: "Courier New",
                    },
                    color: "black",
                },
            },
        },
    };
    const DeviceAdder = ({ device, index }) => {
        return (
            <div className="device-adder">
                <label>
                    Cihaz Adı
                    <input
                        className="device-input"
                        type="text"
                        defaultValue={device.name}
                        onBlur={(e) => handleInputChange(e, index, "name")}
                    />
                </label>
                <label>
                    Saatlik Watt
                    <input
                        className="device-input"
                        type="number"
                        defaultValue={device.watt}
                        onBlur={(e) => handleInputChange(e, index, "watt")}
                    />
                </label>
                <label>
                    Günlük Kullanım
                    <input
                        className="device-input"
                        type="number"
                        defaultValue={device.hours}
                        onBlur={(e) => handleInputChange(e, index, "hours")}
                    />
                </label>
                <button type="button" className="delete-btn" onClick={() => removeDevice(index)}>
                    Sil
                </button>
            </div>
        );
    };

    const handleSubmit = (e) => {
        const startDate = formatDate(date.year - 30, date.month, date.day);
        e.preventDefault();
        setLoading(true);
        setError(null);
        console.log(startDate)
        console.log(usefulDate)
        console.log("fetching data bio")
        fetchBiodiversityData(location.latitude, location.longitude)
        let electricity = calculateElectricity(weather, inputs.devices, inputs.area)
        try {
            setTimeout(() => {
                setResponse({
                    altitude: altitude,
                    energy_usage: electricity,
                    avg_yearly_increase: -2.5,
                    projected_energy_usage: 88,
                });
                setLoading(false);
            }, 1000);
        } catch (err) {
            setError("An error occurred while processing the data.");
            setLoading(false);
        }
    };

    const generateEnergyUsageChartData = () => {
        if (!response) return {};
        return {
            labels: Array.from(
                { length: response.energy_usage.length },
                (_, i) => `Day ${i + 1}`
            ),
            datasets: [
                {
                    label: "Enerji Kullanımı (kWh)",
                    data: response.energy_usage,
                    borderColor: "#92BDA3",
                    backgroundColor: "rgba(75,192,192,0.2)",
                    fill: true,
                },
            ],
        };
    };
    function estimateNext10Years(temperatureData) {
        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 30;
        const endYear = currentYear;

        if (!Array.isArray(temperatureData) || temperatureData.length === 0) {
            throw new Error("Invalid temperature data provided.");
        }

        const totalDays = temperatureData.length;
        const totalYears = endYear - startYear + 1;
        const daysInYear = Math.floor(totalDays / totalYears);

        if (totalDays % totalYears !== 0) {
            console.warn(
                "Data might be incomplete or irregular for yearly division. Proceeding with approximate calculations."
            );
        }
        const yearlyAverages = [];
        for (let i = 0; i < totalYears; i++) {
            const startIndex = i * daysInYear;
            const yearData = temperatureData.slice(startIndex, startIndex + daysInYear);
            const yearlyAverage =
                yearData.reduce((sum, temp) => sum + temp, 0) / yearData.length;
            yearlyAverages.push(yearlyAverage);
        }


        const n = yearlyAverages.length;
        const x = Array.from({ length: n }, (_, i) => i + startYear);
        const y = yearlyAverages;

        const xMean = x.reduce((sum, xi) => sum + xi, 0) / n;
        const yMean = y.reduce((sum, yi) => sum + yi, 0) / n;

        let num = 0,
            den = 0;
        for (let i = 0; i < n; i++) {
            num += (x[i] - xMean) * (y[i] - yMean);
            den += (x[i] - xMean) ** 2;
        }

        const slope = num / den;
        const intercept = yMean - slope * xMean;


        const lapseRate = -6.5 / 1000;

        const next10Years = [];
        for (let i = endYear + 1; i <= endYear + 10; i++) {
            const predictedTemp = slope * i + intercept + lapseRate;    
            next10Years.push(predictedTemp);
        }

        return next10Years;
    }

    const generateProjectedYearsChart = () => {
        if (
            !Array.isArray(weather.daily.temperature_2m_mean) ||
            weather.daily.temperature_2m_mean.length === 0
        ) {
            console.error("Invalid weather data:", weather.daily.temperature_2m_mean);
            return {};
        }

        if (isNaN(altitude)) {
            console.error("Invalid altitude:", altitude);
            return {};
        }

        function generateNext10Years() {
            const time = new Date();
            const year = time.getFullYear();
            const dateArray = [];
            for (let i = 1; i <= 10; i++) {
                dateArray.push(year + i);
            }
            return dateArray;
        }

        return {
            labels: generateNext10Years(),
            datasets: [
                {
                    label: "Tahmini Sıcaklıklar",
                    data: estimateNext10Years(weather.daily.temperature_2m_mean, altitude),
                    backgroundColor: "#92BDA3",
                    borderColor: "black",
                    borderWidth: 1,
                }
            ]
        };
    };

    const generateBiodiversityChartData = () => {
        console.log(animalData)
        if (!Array.isArray(animalData) || animalData.length === 0) {
            console.error("animalData is invalid:", animalData);
            return {};
        }
        return {
            labels: animalData.map((animal) => (animal.commonName === "Unknown" ? animal.species : animal.commonName) || animal.species || "Unknown"),
            datasets: [
                {
                    label: "Ne Kadar Sık",
                    data: animalData.map((animal) => animal.occurrences || 0),
                    backgroundColor: "#92BDA3",
                    borderColor: "black",
                    borderWidth: 1,
                },
            ],
        };
    };

    const fetchBiodiversityData = async (latitude, longitude, radius = 75) => {
        try {
            const response = await axios.get("https://api.inaturalist.org/v1/observations/species_counts", {
                params: {
                    lat: latitude,
                    lng: longitude,
                    radius,
                    per_page: 10,
                },
            });

            const speciesCounts = response.data.results.map((result) => ({
                species: result.taxon?.name || "Unknown",
                occurrences: result.count || 0,
                commonName: result.taxon?.preferred_common_name || "Unknown",
                rank: result.taxon?.rank || "Unknown",
                taxonId: result.taxon?.id,
            }));

            setAnimalData(speciesCounts);
            console.log(speciesCounts)
        } catch (error) {
            console.error("Error fetching biodiversity data:", error);
            setError("Failed to fetch biodiversity data.");
        }
    };



    function calculateElectricity(weatherData, devices, area) {
        if (isNaN(area) || area <= 0) {
            console.error("Invalid area:", area);
            return [];
        }

        const baseEnergy = area * 0.1;
        const hvacPowerPerM2 = 0.05;

        const deviceEnergy = devices.reduce((sum, device, index) => {
            const watt = parseFloat(device.watt < 0 ? 0 : device.watt);
            const hours = parseFloat(device.hours < 0 || device.hours > 24 ? 0 : device.hours);

            if (isNaN(watt) || isNaN(hours)) {
                console.warn(`Invalid device data at index ${index}:`, device);
                return sum;
            }

            return sum + (watt / 1000) * hours;
        }, 0);

        console.log("Device Energy:", deviceEnergy);

        const reversedTemperatures = [...(weatherData.daily?.temperature_2m_mean || [])].reverse();

        const daysIn10Months = 10 * 30;

        const last10MonthsTemperatures = reversedTemperatures.slice(0, daysIn10Months);

        const validTemperatures = last10MonthsTemperatures.filter((temp) => !isNaN(temp));

        if (validTemperatures.length === 0) {
            console.warn("No valid temperature data for the last 10 months.");
            return [];
        }

        const energyUsage = validTemperatures.map((entry) => {
            const tempDifference = Math.abs(20 - entry);

            return (
                baseEnergy +
                hvacPowerPerM2 * area * tempDifference / 24 +
                deviceEnergy
            );
        });

        console.log("Energy Usage for Last 10 Months:", energyUsage);
        return energyUsage;
    }

    return (

        <div className="optimize">
            <form onSubmit={handleSubmit}>
                <button type="button" className="add-device" onClick={createMoreDeviceAdder}>
                    Cihaz Ekle
                </button>
                <div id="device-adder-container">
                    {inputs.devices.map((device, index) => (
                        <DeviceAdder
                            key={index}
                            device={device}
                            index={index}
                        />
                    ))}
                </div>
                <div className="form-container">
                    <label>
                        <p>
                            Kaçıncı Kaçttasınız:
                        </p>
                        <input
                            className="optimize-input"
                            type="number"
                            name="floor"
                            value={inputs.floor}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        <p>
                            Alanınız (m²)
                        </p>

                        <input
                            className="optimize-input"
                            type="number"
                            name="area"
                            value={inputs.area}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        <p>
                            Balkon Alanı (m²):
                        </p>
                        <input
                            type="number"
                            name="balcony_size"
                            value={inputs.balcony_size}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type="submit" id="submit-btn" disabled={loading}>
                        {loading ? "Processing..." : "Submit"}
                    </button>
                </div>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {response && (
                <div className="response-container">
                    <h2>Sonuçlar</h2>
                    <div className="crops-container">
                        {recommendPlants(weather.daily.temperature_2m_mean, inputs.balcony_size).map((plant, index) => {
                            return (
                                <li className="crop-li" key={index}>
                                    Bitki Adı: {plant.name}
                                    <br></br>
                                    Açıklama: {plant.description}
                                    <br></br>
                                    Bitki için Gerekli Alan: {plant.spaceRequirement}
                                    <br></br>
                                    Kaç Tane Ekebilirsin: {plant.amount}
                                </li>
                            )
                        })}
                    </div>
                    {response && response.energy_usage && (
                        <Line options={options} data={generateEnergyUsageChartData()} />
                    )}

                    {animalData && animalData.length > 0 && (
                        <Bar options={options} data={generateBiodiversityChartData()} />
                    )}

                        <Bar options={options} data={generateProjectedYearsChart()}></Bar>
                </div>
            )}
        </div>
    );
};

export default OptimizationSystem;
