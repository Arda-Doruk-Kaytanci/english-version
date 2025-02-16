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

import axios from "axios";

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

  const [altitude, setAltitude] = useState([]);
  const [weather, setWeather] = useState([]);

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [location, setLocation] = useState({});

  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [usefulDate, setUsefulDate] = useState();
  const [startDate, setStartDate] = useState();
  const [didIt, setDidIt] = useState(false);
  const formatDate = (year, month, day) => {
    const paddedMonth = month.toString().padStart(2, "0");
    const paddedDay = day.toString().padStart(2, "0");
    return `${year}-${paddedMonth}-${paddedDay}`;
  };

  const [livingData, setLivingData] = useState([]);

  const plantDatabase = [
    {
      name: "Tomato",
      suitableFor: "temperate",
      spaceRequirement: 2,
      description:
        "Suitable for medium or large balconies. Requires plenty of sunlight.",
    },
    {
      name: "Pepper",
      suitableFor: "temperate",
      spaceRequirement: 1.5,
      description:
        "Suitable for medium-sized balconies. Loves plenty of sunlight.",
    },
    {
      name: "Cucumber",
      suitableFor: "temperate",
      spaceRequirement: 1.5,
      description:
        "Grows well in sunny areas, suitable for medium-sized balconies.",
    },
    {
      name: "Lettuce",
      suitableFor: "temperate",
      spaceRequirement: 1,
      description:
        "Fast-growing and suitable for small to medium-sized balconies.",
    },
    {
      name: "Zucchini",
      suitableFor: "temperate",
      spaceRequirement: 4,
      description: "Suitable for large spaces and well-drained soil.",
    },
    {
      name: "Basil",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "Easily grown on small balconies, suitable for kitchen use.",
    },
    {
      name: "Arugula",
      suitableFor: "temperate",
      spaceRequirement: 1,
      description: "Fast-growing, suitable for kitchen use.",
    },
    {
      name: "Mint",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "Takes up little space and provides a pleasant aroma.",
    },
    {
      name: "Parsley",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "Easily grown on small balconies.",
    },
    {
      name: "Dill",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "Easily grown on small balconies, can be used in cooking.",
    },
    {
      name: "Strawberry",
      suitableFor: "temperate",
      spaceRequirement: 1,
      description:
        "Easily grown in small spaces, offers sweet and tasty fruits.",
    },
    {
      name: "Watermelon",
      suitableFor: "hot",
      spaceRequirement: 5,
      description: "Grows in large areas and hot climates.",
    },
    {
      name: "Grape Vine",
      suitableFor: "temperate",
      spaceRequirement: 3,
      description: "A decorative plant that provides shade.",
    },
    {
      name: "Tropical Flowers",
      suitableFor: "hot",
      spaceRequirement: 3,
      description: "Beautiful decorative plants for large, sunny balconies.",
    },
    {
      name: "Sunflower",
      suitableFor: "temperate",
      spaceRequirement: 2,
      description:
        "A decorative and useful plant that grows on sunny balconies.",
    },
    {
      name: "Carrot",
      suitableFor: "cold",
      spaceRequirement: 1,
      description: "Grows in small containers, suitable for cold climates.",
    },
    {
      name: "Potato",
      suitableFor: "temperate",
      spaceRequirement: 2,
      description: "Suitable for medium-sized spaces.",
    },
    {
      name: "Onion",
      suitableFor: "cold",
      spaceRequirement: 1,
      description: "Grows in small spaces and is suitable for cold climates.",
    },
    {
      name: "Garlic",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "Takes up little space, ideal for kitchen use.",
    },
    {
      name: "Bamboo",
      suitableFor: "temperate",
      spaceRequirement: 8,
      description: "Suitable as a decorative plant for large balconies.",
    },
    {
      name: "Lavender",
      suitableFor: "temperate",
      spaceRequirement: 1,
      description: "A decorative and fragrant plant that loves sunny areas.",
    },
    {
      name: "Daffodil",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "A decorative plant that can grow on small balconies.",
    },
    {
      name: "Orchid",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "A decorative flower that requires careful maintenance.",
    },
    {
      name: "Carnation",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "A decorative flower that grows in small spaces.",
    },
    {
      name: "Succulents",
      suitableFor: "hot",
      spaceRequirement: 0.5,
      description: "Takes up little space and grows easily in hot climates.",
    },
    {
      name: "Cactus",
      suitableFor: "hot",
      spaceRequirement: 0.5,
      description: "Easily grows in hot and arid conditions.",
    },
    {
      name: "Pine Sapling",
      suitableFor: "cold",
      spaceRequirement: 20,
      description: "Suitable for large spaces in cold climates.",
    },
    {
      name: "Ginger",
      suitableFor: "hot",
      spaceRequirement: 2,
      description: "Grows in hot climates and provides medicinal benefits.",
    },
    {
      name: "Pomegranate",
      suitableFor: "temperate",
      spaceRequirement: 8,
      description: "A decorative tree that grows in temperate climates.",
    },
    {
      name: "Raspberry",
      suitableFor: "temperate",
      spaceRequirement: 3,
      description: "A sweet fruit suitable for medium-sized balconies.",
    },
    {
      name: "Blackberry",
      suitableFor: "temperate",
      spaceRequirement: 2,
      description: "Suitable for medium-sized balconies.",
    },
    {
      name: "Pineapple",
      suitableFor: "hot",
      spaceRequirement: 6,
      description: "Grows in hot climates, requires careful maintenance.",
    },
    {
      name: "Mustard",
      suitableFor: "temperate",
      spaceRequirement: 2,
      description: "Grown as a spice plant.",
    },
    {
      name: "Sage",
      suitableFor: "temperate",
      spaceRequirement: 1,
      description: "Suitable for medicinal and culinary use.",
    },
    {
      name: "Thyme",
      suitableFor: "temperate",
      spaceRequirement: 1,
      description: "Easily grown on small balconies.",
    },
    {
      name: "Melon",
      suitableFor: "temperate",
      spaceRequirement: 4,
      description: "Grows in large balconies and thrives in hot summers.",
    },
    {
      name: "Radish",
      suitableFor: "cold",
      spaceRequirement: 1,
      description: "Grows in small balconies and cold climates.",
    },
    {
      name: "Broccoli",
      suitableFor: "cold",
      spaceRequirement: 2,
      description: "A nutritious vegetable grown in cold climates.",
    },
    {
      name: "Artichoke",
      suitableFor: "temperate",
      spaceRequirement: 3,
      description: "A hardy plant that grows on sunny balconies.",
    },
    {
      name: "Papaya",
      suitableFor: "hot",
      spaceRequirement: 8,
      description: "Can grow in hot climates and large balconies.",
    },
    {
      name: "Avocado",
      suitableFor: "hot",
      spaceRequirement: 12,
      description: "Grows on large balconies in hot climates.",
    },
    {
      name: "Apricot",
      suitableFor: "temperate",
      spaceRequirement: 8,
      description: "A sweet fruit grown on balconies in temperate climates.",
    },
    {
      name: "Purple Basil",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "A decorative plant often used in kitchens.",
    },
    {
      name: "Pine Nut",
      suitableFor: "cold",
      spaceRequirement: 20,
      description: "Grows in large areas in cold climates.",
    },
    {
      name: "Kiwi",
      suitableFor: "temperate",
      spaceRequirement: 6,
      description: "Suitable for vertical areas with its climbing structure.",
    },
    {
      name: "Pineapple",
      suitableFor: "hot",
      spaceRequirement: 5,
      description: "Grows on tropical balconies, requires careful maintenance.",
    },
    {
      name: "Cauliflower",
      suitableFor: "cold",
      spaceRequirement: 2,
      description: "Grows in cold weather and is suitable for small balconies.",
    },
    {
      name: "Peanut",
      suitableFor: "hot",
      spaceRequirement: 3,
      description: "A beneficial plant grown in hot climates.",
    },
    {
      name: "Kiwi Vine",
      suitableFor: "temperate",
      spaceRequirement: 5,
      description: "Can provide shade on medium-sized balconies.",
    },
    {
      name: "Eggplant",
      suitableFor: "temperate",
      spaceRequirement: 2,
      description: "A hardy vegetable that loves sunny areas.",
    },
    {
      name: "Mustard Greens",
      suitableFor: "temperate",
      spaceRequirement: 1,
      description: "Can grow on small balconies in temperate climates.",
    },
    {
      name: "Barley",
      suitableFor: "cold",
      spaceRequirement: 4,
      description: "A useful grain grown in cold climates.",
    },
    {
      name: "Wheat",
      suitableFor: "temperate",
      spaceRequirement: 5,
      description: "Can be used as grain and grows on large balconies.",
    },
    {
      name: "Corn",
      suitableFor: "temperate",
      spaceRequirement: 6,
      description: "A vegetable that can grow on large balconies.",
    },
    {
      name: "Ginger",
      suitableFor: "hot",
      spaceRequirement: 2,
      description: "A medicinal plant that grows in hot climates.",
    },
    {
      name: "Sage",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "Known as a medicinal plant, suitable for small balconies.",
    },
    {
      name: "Lemon Balm",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "Has a pleasant aroma, grows in small spaces.",
    },
    {
      name: "Watercress",
      suitableFor: "cold",
      spaceRequirement: 0.5,
      description: "Can grow in cold climates on small balconies.",
    },
    {
      name: "Cabbage",
      suitableFor: "cold",
      spaceRequirement: 3,
      description: "Grows in large spaces in cold climates.",
    },
    {
      name: "Mango",
      suitableFor: "hot",
      spaceRequirement: 12,
      description: "Can grow in tropical climates and large balconies.",
    },
    {
      name: "Melon",
      suitableFor: "hot",
      spaceRequirement: 6,
      description: "A sweet fruit that grows in hot summer months.",
    },
    {
      name: "Anise",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "Suitable for medicinal and culinary use.",
    },
    {
      name: "Mountain Thyme",
      suitableFor: "cold",
      spaceRequirement: 0.5,
      description: "A low-space plant suitable for mountain climates.",
    },
    {
      name: "Blackberry",
      suitableFor: "temperate",
      spaceRequirement: 2,
      description: "A sweet fruit suitable for medium-sized balconies.",
    },
    {
      name: "Raspberry",
      suitableFor: "temperate",
      spaceRequirement: 2,
      description: "A sweet fruit that can grow on medium-sized balconies.",
    },
    {
      name: "Tulip",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "A decorative flower that can grow on small balconies.",
    },
    {
      name: "Mint Varieties",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "Different types of mint grow in small areas.",
    },
    {
      name: "Chamomile",
      suitableFor: "temperate",
      spaceRequirement: 0.5,
      description: "A fragrant plant that grows in small areas.",
    },
    {
      name: "Clover",
      suitableFor: "cold",
      spaceRequirement: 1,
      description: "Suitable for small balconies in cold climates.",
    },
    {
      name: "Cowpea",
      suitableFor: "temperate",
      spaceRequirement: 1,
      description: "Can grow on medium-sized balconies.",
    },
    {
      name: "Kiwi Vine",
      suitableFor: "temperate",
      spaceRequirement: 6,
      description: "Can provide shade on medium-sized balconies.",
    },
    {
      name: "Mallow",
      suitableFor: "temperate",
      spaceRequirement: 1,
      description: "A medicinal plant that grows easily.",
    },
  ];

  function recommendPlants(weatherData, balconyArea) {
    if (!Array.isArray(weatherData) || weatherData.length === 0) {
      throw new Error("Geçersiz hava durumu verisi sağlandı.");
    }

    const reversedTemperatures = [...weatherData].reverse();

    const averageTemperature =
      reversedTemperatures.reduce((sum, temp) => sum + temp, 0) /
      reversedTemperatures.length;

    console.log("30 Yıllık Ortalama Sıcaklık:", averageTemperature);

    let climate;
    if (averageTemperature < 10) {
      climate = "cold";
    } else if (averageTemperature >= 10 && averageTemperature <= 20) {
      climate = "temperate";
    } else {
      climate = "hot";
    }

    const suitablePlants = plantDatabase.filter(
      (plant) =>
        plant.suitableFor === climate && plant.spaceRequirement <= balconyArea
    );

    if (suitablePlants.length === 0) {
      return [];
    }
    return suitablePlants.map((plant) => ({
      name: plant.name,
      description: plant.description,
      spaceRequirement: plant.spaceRequirement,
      amount: Math.round((balconyArea - 5) / plant.spaceRequirement),
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
    setUsefulDate(
      formatDate(currentDate.year, currentDate.month, currentDate.day)
    );
    setStartDate(
      formatDate(currentDate.year - 30, currentDate.month, currentDate.day)
    );
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
              alert(
                "Konum erişimi reddedildi. Lütfen tarayıcı ayarlarından konum iznini açın!"
              );
              break;
            case error.POSITION_UNAVAILABLE:
              alert(
                "Konum bilgisi alınamadı. Lütfen cihazınızın konum ayarlarını kontrol edin."
              );
              break;
            case error.TIMEOUT:
              alert(
                "Konum isteği zaman aşımına uğradı. Lütfen tekrar deneyin."
              );
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

      const response = await axios.get(
        "https://archive-api.open-meteo.com/v1/archive",
        {
          params: {
            latitude: location.latitude,
            longitude: location.longitude,
            start_date: firstDate,
            end_date: lastDate,
            daily: "temperature_2m_mean",
            timezone: "UTC",
          },
        }
      );
      console.log(response.data);
      setDidIt(true);
      setWeather(response.data);
      setAltitude(response.data.elevation);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };

  useEffect(() => {
    console.log(location.longitude, location.latitude, usefulDate, startDate);
    if (
      location.latitude &&
      location.longitude &&
      usefulDate &&
      startDate &&
      !didIt
    ) {
      console.log("Location and date set, fetching weather data...");
      const firstDate = startDate;
      const lastDate = usefulDate;
      fetchWeatherData(firstDate, lastDate);
    }
  });

  const handleInputChange = (e, index, field) => {
    if (field) {
      const updatedDevices = [...inputs.devices];
      updatedDevices[index][field] = e.target.value;
      setInputs((prev) => ({ ...prev, devices: updatedDevices }));
    } else {
      const { name, value } = e.target;
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
    console.log(inputs);
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
          Device Name
          <input
            className="device-input"
            type="text"
            defaultValue={device.name}
            onBlur={(e) => handleInputChange(e, index, "name")}
          />
        </label>
        <label>
          Watt Per Hour
          <input
            className="device-input"
            type="number"
            defaultValue={device.watt}
            onBlur={(e) => handleInputChange(e, index, "watt")}
          />
        </label>
        <label>
          Daily Usage
          <input
            className="device-input"
            type="number"
            defaultValue={device.hours}
            onBlur={(e) => handleInputChange(e, index, "hours")}
          />
        </label>
        <button
          type="button"
          className="delete-btn"
          onClick={() => removeDevice(index)}
        >
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
    console.log(startDate);
    console.log(usefulDate);
    console.log("fetching data bio");
    fetchBiodiversityData(location.latitude, location.longitude);
    let electricity = calculateElectricity(
      weather,
      inputs.devices,
      inputs.area
    );
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
        (_, i) => `Gün ${i + 1}`
      ),
      datasets: [
        {
          label: "Energy Usage (kWh)",
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
      const yearData = temperatureData.slice(
        startIndex,
        startIndex + daysInYear
      );
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
          label: "Estimated Temperatures",
          data: estimateNext10Years(
            weather.daily.temperature_2m_mean,
            altitude
          ),
          backgroundColor: "#92BDA3",
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    };
  };

  const generateBiodiversityChartData = () => {
    console.log(livingData);
    if (!Array.isArray(livingData) || livingData.length === 0) {
      console.error("livingData is invalid:", livingData);
      return {};
    }
    return {
      labels: livingData.map(
        (animal) =>
          (animal.commonName.toUpperCase() === "Unknown"
            ? animal.species
            : animal.commonName.toUpperCase()) ||
          animal.species ||
          "Unknown"
      ),
      datasets: [
        {
          label: "How Frequent",
          data: livingData.map((animal) => animal.occurrences || 0),
          backgroundColor: "#92BDA3",
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    };
  };

  const fetchBiodiversityData = async (latitude, longitude, radius = 75) => {
    try {
      const response = await axios.get(
        "https://api.inaturalist.org/v1/observations/species_counts",
        {
          params: {
            lat: latitude,
            lng: longitude,
            radius,
            per_page: 20,
          },
        }
      );

      const speciesCounts = response.data.results.map((result) => ({
        species: result.taxon?.name || "Unknown",
        occurrences: result.count || 0,
        commonName: result.taxon?.preferred_common_name || "Unknown",
        rank: result.taxon?.rank || "Unknown",
        taxonId: result.taxon?.id,
      }));

      setLivingData(speciesCounts);
      console.log(speciesCounts);
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
      const hours = parseFloat(
        device.hours < 0 || device.hours > 24 ? 0 : device.hours
      );

      if (isNaN(watt) || isNaN(hours)) {
        console.warn(`Invalid device data at index ${index}:`, device);
        return sum;
      }

      return sum + (watt / 1000) * hours;
    }, 0);

    console.log("Device Energy:", deviceEnergy);

    const reversedTemperatures = [
      ...(weatherData.daily?.temperature_2m_mean || []),
    ].reverse();

    const daysIn10Months = 10 * 30;

    const last10MonthsTemperatures = reversedTemperatures.slice(
      0,
      daysIn10Months
    );

    const validTemperatures = last10MonthsTemperatures.filter(
      (temp) => !isNaN(temp)
    );

    if (validTemperatures.length === 0) {
      console.warn("No valid temperature data for the last 10 months.");
      return [];
    }

    const energyUsage = validTemperatures.map((entry) => {
      const tempDifference = Math.abs(20 - entry);

      return (
        baseEnergy +
        (hvacPowerPerM2 * area * tempDifference) / 24 +
        deviceEnergy
      );
    });

    console.log("Energy Usage for Last 10 Months:", energyUsage);
    return energyUsage;
  }

  return (
    <div className="optimize">
      <form onSubmit={handleSubmit}>
        <button
          type="button"
          className="add-device"
          onClick={createMoreDeviceAdder}
        >
          Add Device
        </button>
        <div id="device-adder-container">
          {inputs.devices.map((device, index) => (
            <DeviceAdder key={index} device={device} index={index} />
          ))}
        </div>
        <div className="form-container">
          <label>
            <p>Which Floor You Are At</p>
            <input
              className="optimize-input"
              type="number"
              name="floor"
              value={inputs.floor}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <p></p>
            Area Without the Balcony (m²)
            <input
              className="optimize-input"
              type="number"
              name="area"
              value={inputs.area}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <p>Area of The Balcony (m²):</p>
            <input
              type="number"
              name="balcony_size"
              value={inputs.balcony_size}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" id="submit-btn" disabled={loading}>
            {loading ? "Calculating..." : "Calculate"}
          </button>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {response && (
        <div className="response-container">
          <h2>Sonuçlar</h2>
          <div className="crops-container">
            {recommendPlants(
              weather.daily.temperature_2m_mean,
              inputs.balcony_size
            ).map((plant, index) => {
              return (
                <li className="crop-li" key={index}>
                  Plant Name: {plant.name}
                  <br></br>
                  Description: {plant.description}
                  <br></br>
                  Space Need to Plant: {plant.spaceRequirement}
                  <br></br>
                  How Many You Can Plant: {plant.amount}
                </li>
              );
            })}
          </div>
          {response && response.energy_usage && (
            <Line options={options} data={generateEnergyUsageChartData()} />
          )}

          {livingData && livingData.length > 0 && (
            <Bar options={options} data={generateBiodiversityChartData()} />
          )}

          <Bar options={options} data={generateProjectedYearsChart()}></Bar>
        </div>
      )}
    </div>
  );
};

export default OptimizationSystem;
