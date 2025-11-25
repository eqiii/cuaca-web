export interface WeatherData {
  timezone: string;
  current_weather: {
    temperature: number;
    windspeed: number;
    time: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
}

// Cari koordinat kota
export async function getCityCoords(city: string) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    city
  )}&count=1`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  const { latitude, longitude, name, country } = data.results[0];

  return { latitude, longitude, name, country };
}

// Ambil cuaca berdasarkan koordinat
export async function fetchWeather(lat: number, lon: number): Promise<WeatherData> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m`;

  const res = await fetch(url);
  const data = await res.json();

  return data as WeatherData;
}
