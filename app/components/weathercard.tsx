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
    <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">

      {/* === SEARCH BOX === */}
      <div className="flex gap-3 mb-6">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchCityWeather()}
          placeholder="Cari kota..."
          className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500"
        />

        <button
          onClick={searchCityWeather}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 px-4 py-2 rounded-lg font-bold"
        >
          {loading ? "..." : "Cari"}
        </button>
      </div>

      {/* === WEATHER CONTENT === */}
      <div className="flex">

        {/* LEFT INFO */}
        <div className="flex-1">
          {!weather ? (
            <p className="text-gray-400">
              Masukkan nama kota untuk melihat cuaca
            </p>
          ) : (
            <>
              <h3 className="text-lg font-bold">{cityName}</h3>
              <p className="text-3xl font-bold text-yellow-300">
                {weather.current_weather.temperature}°C
              </p>

              <p className="text-gray-300 mt-2">
                Angin:{" "}
                <span className="text-blue-300 font-bold">
                  {weather.current_weather.windspeed} km/h
                </span>
              </p>

              <p className="text-gray-300">
                Waktu:{" "}
                <span className="text-green-300 font-bold">
                  {new Date(weather.current_weather.time).toLocaleTimeString(
                    "id-ID",
                    { hour: "2-digit", minute: "2-digit" }
                  )}
                </span>
              </p>
            </>
          )}
        </div>

        {/* RIGHT ICON */}
        <div className="w-20 h-20 rounded-full bg-gray-700 ml-4"></div>
      </div>

    </div>
  );
}
