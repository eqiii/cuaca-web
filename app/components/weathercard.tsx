// file: /components/weather-card.tsx

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
    <div className="w-140 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 p-6 ml-40 h-[300px] flex flex-col">

      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 shrink-0">
        <h2 className="text-xl font-bold text-white">Weather</h2>
        <div className="grow h-px bg-red-500 ml-4"></div>
      </div>

      {/* Body → ATM Style: LEFT input | RIGHT info */}
      <div className="flex gap-6 flex-1 overflow-hidden">
        
        {/* LEFT - Search */}
        <div className="w-1/3 shrink-0 flex flex-col">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchCityWeather()}
            placeholder="Cari kota..."
            className="w-full mb-3 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500"
          />

          <button
            onClick={searchCityWeather}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 py-2 rounded-lg font-bold transition"
          >
            {loading ? "Mencari..." : "Cari"}
          </button>
        </div>

        {/* RIGHT – ALWAYS SAME HEIGHT (Scrollable part inside) */}
        <div className="flex-1 overflow-hidden">
          {!weather ? (
            <div className="flex items-center justify-center h-full text-gray-400">
              Masukkan nama kota untuk melihat cuaca
            </div>
          ) : (
            <div className="h-full flex flex-col overflow-hidden">
              
              {/* TOP INFO */}
              <div className="flex items-center gap-4 mb-3 shrink-0">
                <div className="w-16 h-16 bg-gray-700 rounded-full"></div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {cityName}
                  </h3>
                  <p className="text-3xl font-bold text-yellow-300">
                    {weather.current_weather.temperature}°C
                  </p>
                </div>
              </div>

              {/* Middle Info */}
              <div className="text-gray-300 text-sm space-y-1 mb-3 shrink-0">
                <p>
                  Angin:{" "}
                  <span className="font-bold text-blue-300">
                    {weather.current_weather.windspeed} km/h
                  </span>
                </p>
                <p>
                  Waktu:{" "}
                  <span className="font-bold text-green-300">
                    {new Date(weather.current_weather.time).toLocaleString(
                      "id-ID",
                      { hour: "2-digit", minute: "2-digit" }
                    )}
                  </span>
                </p>
              </div>

              {/* Scrollable section */}
              <div className="flex-1 overflow-y-auto bg-gray-800 rounded-lg p-2">
                <h4 className="font-bold text-purple-300 mb-2">
                  Prakiraan Per Jam
                </h4>

                <ul className="text-gray-300 text-xs grid grid-cols-2 gap-x-4 gap-y-1">
                  {weather.hourly.time.slice(0, 8).map((t, i) => (
                    <li key={i} className="flex justify-between">
                      <span>
                        {new Date(t).toLocaleTimeString("id-ID", {
                          hour: "2-digit",
                        })}
                      </span>
                      <span className="font-bold">
                        {weather.hourly.temperature_2m[i]}°C
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
