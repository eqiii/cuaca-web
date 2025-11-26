import WeatherCard from "../components/weathercard";
import NewsCard from "../components/news";
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* MAIN */}
      <div className="relative z-10">
        <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-10 ">

          {/* === GRID BESAR === */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* KIRI — NEWS (KOTAK BESAR) */}
            <div className="lg:col-span-2 pt-8 ">
              <div className="rounded-2xl border border-gray-700 bg-gray-900 p-6 min-h-[300px] mr-40 ">
                <NewsCard />
              </div>
            </div>

            {/* KANAN — WEATHER ATAS + QUOTES BAWAH */}
            <div className="flex flex-col gap-8 mt-8">

              {/* WEATHER (ATAS) */}
              <div className="rounded-2xl border border-gray-700 bg-gray-900 p-6">
                <WeatherCard />
              </div>

              {/* RANDOM QUOTES (BAWAH) */}
              <div className="rounded-2xl border border-gray-700 bg-gray-900 p-6 h-[140px]">
                <p className="text-center text-gray-300">Random Quotes</p>
              </div>

            </div>
          </div>

        </main>

        {/* FOOTER */}
        <footer className="bg-black/40 border-t border-white/10 w-full  relative z-10 mt-80">
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
