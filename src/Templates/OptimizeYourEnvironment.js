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
        floor: 0,
        context_size: 100,
        balcony_size: "",
    });

    const [altitude, setAltitude] = useState()

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

    const [animalData, setAnimalData] = useState()
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
            setDidIt(false)
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
    },);



    const predefinedResponse = {
        altitude: 300,
        energy_usage: [200, 15, 110, 105, 102, 100, 982, 916, 4, 3, 22, 10],
        avg_yearly_increase: -2.5,
        projected_energy_usage: 88,
        biodiversity_recommendations: [
            "Preserve habitats for the following species:",
            "- Oak Tree",
            "- Honey Bee",
            "- Monarch Butterfly",
            "Plant native vegetation to support these species.",
            "Avoid harmful chemicals that disrupt ecosystems.",
        ],
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        const startDate = formatDate(date.year - 30, date.month, date.day);
        e.preventDefault();
        setLoading(true);
        setError(null);
        console.log(startDate)
        console.log(usefulDate)
        try {
            setTimeout(() => {
                setResponse(predefinedResponse);
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
                (_, i) => `Month ${i + 1}`
            ),
            datasets: [
                {
                    label: "Energy Usage (kWh)",
                    data: response.energy_usage,
                    borderColor: "rgba(75,192,192,1)",
                    backgroundColor: "rgba(75,192,192,0.2)",
                    fill: true,
                },
            ],
        };
    };

    const generateBiodiversityChartData = () => {
        if (!animalData || animalData.length === 0) return {};

        return {
            labels: animalData.map((animal) => animal.commonName || animal.species || "Unknown"),
            datasets: [
                {
                    label: "Occurrences",
                    data: animalData.map((animal) => animal.occurrences || 0),
                    backgroundColor: "rgba(75,192,192,0.6)",
                    borderColor: "rgba(75,192,192,1)",
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


            const speciesDetailsPromises = speciesCounts.map(async (speciesData) => {
                if (!speciesData.taxonId) return speciesData;

                try {
                    const taxonResponse = await axios.get(`https://api.inaturalist.org/v1/taxa/${speciesData.taxonId}`);
                    const taxonData = taxonResponse.data.results[0];

                    return {
                        ...speciesData,
                        habitat: taxonData.habitat || "Unknown",
                        conservationStatus: taxonData.conservation_status?.status || "Not Evaluated",
                        distribution: taxonData.range || "Unknown",
                    };
                } catch (error) {
                    console.error(`Error fetching details for ${speciesData.species}:`, error);
                    return speciesData;
                }
            });

            const speciesDetails = await Promise.all(speciesDetailsPromises);
            setAnimalData(speciesDetails);
        } catch (error) {
            console.error("Error fetching biodiversity data:", error);
            setError("Failed to fetch biodiversity data.");
        }
    };
    /*useEffect(() => {
        console.log("fetching animal data")
        fetchBiodiversityData(location.latitude, location.longitude);
    });*/

    const fetchAltitude = async (latitude, longitude) => {
        try {
            const response = await axios.get("https://api.opentopodata.org/v1/srtm90m", {
                params: { locations: `${latitude},${longitude}` },
            });

            if (response.data.results && response.data.results.length > 0) {
                setAltitude(response.data.results[0].elevation);
            } else {
                console.error("No elevation data found.");
                setAltitude("No data");
            }
        } catch (error) {
            console.error("Error fetching altitude:", error);
            setAltitude("Error fetching data");
        }
    };

    useEffect(() => {
        fetchAltitude(location.latitude, location.longitude)
    })

    function calculateElectricity(weatherData, devices, area) {
        const baseEnergy = area * 0.1
        const hvacPowerPerM2 = 0.05
        let deviceEnergy = devices.reduce((sum, device) => {
            return sum + (device.power / 1000) * device.hours;
        }, 0);
        const energyUsage = weatherData.map((entry) => {
            return (
                baseEnergy +
                hvacPowerPerM2 * area * Math.abs(20 - entry.avgTemperature) / 24 +
                deviceEnergy
            );
        });
        return energyUsage
    }

    return (

        <div>
            <h1>Optimization System</h1>
            <form onSubmit={handleSubmit}>
                <br />
                <br />
                <label>
                    Floor:
                    <input
                        type="number"
                        name="floor"
                        value={inputs.floor}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Context Size (m²):
                    <input
                        type="number"
                        name="context_size"
                        value={inputs.context_size}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Years (comma-separated):
                    <input
                        type="text"
                        name="years"
                        value={inputs.years}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit" disabled={loading}>
                    {loading ? "Processing..." : "Submit"}
                </button>
            </form>
            {altitude}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {response && (
                <div>
                    <h2>Results</h2>
                    <p>Context: {response.context_type}</p>
                    <p>Altitude: {response.altitude} meters</p>

                    <h3>Energy Usage Trends</h3>
                    <Line data={generateEnergyUsageChartData()} />

                    <h3>Biodiversity Recommendations</h3>
                    <Bar data={generateBiodiversityChartData()} />
                    <ul>
                        {response.biodiversity_recommendations.map((rec, index) => (
                            <li key={index}>{rec}</li>
                        ))}
                    </ul>

                    <h3>Energy Usage Analysis</h3>
                    <p>
                        Average Yearly Increase:{" "}
                        {response.avg_yearly_increase.toFixed(2)} kWh
                    </p>
                    <p>
                        Projected Yearly Usage:{" "}
                        {response.projected_energy_usage.toFixed(2)} kWh
                    </p>
                </div>
            )}
        </div>
    );
};

export default OptimizationSystem;
