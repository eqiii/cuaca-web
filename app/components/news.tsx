// file: /app/components/news-card.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Tipe untuk satu item berita
interface NewsItem {
  title: string;
  link: string;
  description: string;
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
        setError(null);

        // Mengambil SATU berita terbaru dengan menambahkan `size=1`
        const response = await fetch(
          "https://newsdata.io/api/1/latest?apikey=pub_67a37a43b9de4f9c96bf1e2c7cc3f417&q=cuaca&country=id&size=1"
        );
        
        if (!response.ok) {
          throw new Error("Gagal mengambil data berita.");
        }

        const data = await response.json();
        
        // Mengambil berita pertama dari array hasil
        if (data.status === "success" && data.results && data.results.length > 0) {
          setNews(data.results[0]);
        } else {
          setNews(null);
        }
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // Hanya dijalankan sekali saat komponen dimuat

  return (
    <div className="w-300 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 p-6 absolute top-30 left-0">
      {/* Header dengan judul "News" dan garis merah aksen */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">News</h2>
        <div className="grow h-px bg-red-500 mx-4"></div>
      </div>

      {/* Tampilan saat memuat */}
      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Tampilan jika error */}
      {error && (
        <div className="text-center text-red-400 p-4 bg-red-900/20 rounded-lg border border-red-800">
          <p>Terjadi kesalahan: {error}</p>
        </div>
      )}

      {/* Tampilan utama kartu berita */}
      {!loading && !error && (
        <>
          {news ? (
            // Layout horizontal untuk kartu
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Bagian Kiri: Gambar Berita */}
              <div className="lg:w-2/5 shrink-0">
                <a href={news.link} target="_blank" rel="noopener noreferrer">
                  {news.image_url ? (
                    <div className="relative h-64 lg:h-full w-full rounded-lg overflow-hidden">
                      <Image
                        src={news.image_url}
                        alt={news.title || "Gambar berita"}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                  ) : (
                    // Placeholder jika tidak ada gambar
                    <div className="h-64 lg:h-full bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Tidak ada gambar</span>
                    </div>
                  )}
                </a>
              </div>

              {/* Bagian Kanan: Konten Berita */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <a href={news.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                      {news.title}
                    </h3>
                  </a>
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-4">
                    {news.description}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs lg:text-sm text-gray-500 mt-4 pt-4 border-t border-gray-800">
                  <span>Sumber: {news.source_id}</span>
                  <span>{new Date(news.pubDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </div>
            </div>
          ) : (
            // Pesan jika tidak ada berita
            <div className="text-center text-gray-400 p-8">
              <p>Belum ada berita cuaca terkini.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}