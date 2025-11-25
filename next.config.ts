/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cloud.jpnn.com',
      // Tambahkan domain lain yang mungkin diperlukan
      'example.com',
      'another-domain.com'
    ],
    // Opsi lain yang mungkin berguna
    unoptimized: true,
  },
}

module.exports = nextConfig