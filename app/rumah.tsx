
import WeatherCard from "./components/weathercard";
import NewsCard from "./components/news";
// import RandomQuotes from "@/components/random-quotes";


export default function Home() {
  return (
    <div
  className="
    min-h-screen text-white relative
    bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564')]
    bg-cover bg-center bg-fixed
  "
>
  {/* Overlay biar teks tetap kebaca */}
  <div className="absolute inset-0 bg-black/65"></div>

  {/* Main Content */}
  <div className="relative z-10">
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Kolom Kiri - News */}
        <div className="lg:col-span-2">
          <NewsCard />
        </div>

        {/* Kolom Kanan - Weather */}
        <div className="space-y-6">
          <WeatherCard />
        </div>
      </div>
    </main>

    <footer className="bg-black/40 border-t border-white/10 w-full mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-gray-300">
          Rainews - Good News, Good Life
        </p>
      </div>
    </footer>
  </div>
</div>

  );
}