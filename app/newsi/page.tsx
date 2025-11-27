// file: /app/components/news-card.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface NewsItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image_url: string | null;
  source_id: string;
}

export default function NewsCard() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://newsdata.io/api/1/latest?apikey=pub_67a37a43b9de4f9c96bf1e2c7cc3f417&q=cuaca&country=id"
        );

        if (!response.ok) throw new Error("Gagal mengambil data berita.");

        const data = await response.json();
        if (data.status === "success" && data.results) {
          setNews(data.results);
        } else {
          setNews([]);
        }
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div
      className="
      relative w-full p-8 shadow-xl 
       backdrop-blur-sm 
    bg-black/40
      "
    >
      {/* LIGHT Nebula Overlay */}
      

      {/* Dark Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h2 className="text-3xl font-bold text-white tracking-wide">
          Weather News
        </h2>
        <div className="grow h-px bg-blue-500 mx-4"></div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center h-64 relative z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center text-red-400 p-4 bg-red-900/20 rounded-lg border border-red-800 relative z-10">
          <p>Terjadi kesalahan: {error}</p>
        </div>
      )}

      {/* No News */}
      {!loading && !error && news.length === 0 && (
        <div className="text-center text-gray-400 p-4 relative z-10">
          <p>Tidak ada berita cuaca terkini.</p>
        </div>
      )}

      {/* News Cards */}
      {!loading && !error && news.length > 0 && (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {news.map((item, index) => (
            <article
              key={index}
              className="
              bg-gray-800/40 backdrop-blur-md border border-gray-700 
              rounded-xl overflow-hidden shadow-lg 
              hover:shadow-blue-500/30 transition-all duration-300 
              transform hover:-translate-y-1 flex flex-col
              "
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.image_url ? (
                  <div className="relative h-52 w-full">
                    <Image
                      src={item.image_url}
                      alt={item.title || "Gambar berita"}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                ) : (
                  <div className="h-52 bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">
                      Tidak ada gambar
                    </span>
                  </div>
                )}
              </a>

              <div className="p-4 flex flex-col grow">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2 hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                </a>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 grow leading-relaxed">
                  {item.description}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500 mt-auto border-t border-gray-700 pt-3">
                  <span>
                    {new Date(item.pubDate).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span>Sumber: {item.source_id}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
