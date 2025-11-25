"use client";

import React from "react";  
import WeatherCard from "./components/weathercard";
export default function rumah() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      Rumah
      <WeatherCard />
    </div>
  );
}