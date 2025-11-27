"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  image_url: string | null;
  source_id: string;
}

export default function NewsCard() {
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "https://newsdata.io/api/1/latest?apikey=pub_67a37a43b9de4f9c96bf1e2c7cc3f417&q=cuaca&country=id&size=1"
        );

        const data = await res.json();

        if (data.status === "success" && data.results?.length > 0) {
          setNews(data.results[0]);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="w-full bg-gray-900 rounded-2xl border border-gray-700 p-6">
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white">News</h2>
        <div className="flex-1 h-px bg-red-500"></div>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin h-10 w-10 border-2 border-blue-400 border-t-transparent rounded-full" />
        </div>
      )}

      {/* ERROR */}
      {error && (
        <p className="text-red-400 text-center">{error}</p>
      )}

      {/* CONTENT */}
      {!loading && !error && news && (
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* IMAGE — HEIGHT TERKUNCI */}
          <a href={news.link} target="_blank" rel="noopener noreferrer">
            <div className="relative h-56 w-full rounded-xl overflow-hidden">
              {news.image_url ? (
                <Image
                  src={news.image_url}
                  alt={news.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              ) : (
                <div className="h-full bg-gray-800 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>
          </a>

          {/* TITLE ONLY */}
          <div className="flex flex-col justify-between h-full">
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-white line-clamp-3 hover:text-blue-400 transition">
                {news.title}
              </h3>
            </a>

            <div className="text-xs text-gray-500 mt-6">
              {news.source_id} •{" "}
              {new Date(news.pubDate).toLocaleDateString("id-ID")}
            </div>
          </div>
        </div>
      )}

      {!loading && !news && (
        <p className="text-gray-400 text-center">
          Belum ada berita.
        </p>
      )}
    </div>
  );
}
