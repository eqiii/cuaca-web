import { AboutHeader } from './../components/aboutheader';
import { AboutContent } from './../components/aboutcontent';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-black/60">
      <div
        className="relative min-h-screen py-16 text-white
        bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564')]
        bg-cover bg-center bg-fixed"
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative mx-auto max-w-4xl px-6 mt-16 md:mt-24">

        

          <AboutHeader />

          <AboutContent />
        </div>
      </div>
    </div>
  );
}
