"use client";

import { useState } from "react";
import { fetchWeather, getCityCoords, WeatherData } from "@/lib/weather";

export default function WeatherCard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false);

  async function searchCityWeather() {
    if (!city.trim()) return alert("Masukkan nama kota dulu!");

    try {
      setLoading(true);

      const geo = await getCityCoords(city);
      const w = await fetchWeather(geo.latitude, geo.longitude);

      setCityName(`${geo.name}, ${geo.country}`);
      setWeather(w);
    } catch (err) {
      alert("City not found!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-xl w-96 text-center border border-gray-700">

      {/* INPUT SEARCH */}
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") searchCityWeather();
        }}
        placeholder="Search city..."
        className="w-full mb-4 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
      />

      <button
        onClick={searchCityWeather}
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-bold"
      >
        {loading ? "Searching..." : "Search"}
      </button>

      {/* Jika belum ada data */}
      {!weather ? (
        <p className="mt-4 text-gray-400">Enter a city to see weather</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold mt-4 text-white">
            Weather — {cityName}
          </h1>

          <p className="text-gray-300 mt-2">
            Temp:{" "}
            <span className="text-yellow-300 font-bold">
              {weather.current_weather.temperature}°C
            </span>
          </p>

          <p className="text-gray-300 mt-2">
            Wind:{" "}
            <span className="text-blue-300 font-bold">
              {weather.current_weather.windspeed} km/h
            </span>
          </p>

          <p className="text-gray-300 mt-2">
            Time:{" "}
            <span className="text-green-300">
              {weather.current_weather.time}
            </span>
          </p>

          <h2 className="mt-4 font-bold text-lg text-purple-300">
            Hourly Forecast
          </h2>

          <ul className="text-gray-300 mt-2 text-sm max-h-40 overflow-y-auto">
            {weather.hourly.time.slice(0, 12).map((t, i) => (
              <li key={i} className="py-1 border-b border-gray-700">
                {t} — {weather.hourly.temperature_2m[i]}°C
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
