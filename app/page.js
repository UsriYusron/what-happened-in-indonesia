import Image from "next/image";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="relative flex items-center bg-white min-h-screen w-full overflow-hidden">
        {/* Background Image dengan Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Gradient overlay dari putih ke transparan */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/70 z-10"></div>
          <Image
            src="/ascii-art.png"
            alt="Indonesia Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Konten */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

            {/* Bagian Kiri - Teks */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight text-black mb-4 md:mb-6 max-w-xl">
                Jangan sekali-kali <br className="hidden sm:block" />
                meninggalkan sejarah.
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl leading-relaxed text-zinc-700 max-w-xl">
                What Happened in Indonesia adalah situs yang mencatat semua kejadian di Indonesia sejak tahun 2026 hingga sekarang, termasuk keputusan dan kebijakan pemerintah, peristiwa alam, dan hal-hal random lainnya dari warga Indonesia.
              </p>
            </div>

            {/* Bagian Kanan - Tetap kosong untuk keseimbangan */}
            <div className="w-full lg:w-1/2"></div>
          </div>
        </div>
      </section>

            <section className="bg-white dark:bg-gray-800 min-h-screen py-12">
        <div className="container mx-auto px-4">

          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">timelines of Indonesia</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              everything that happened in Indonesia since 2026 is recorded here
            </p>
          </div>

          {/* Container untuk Timeline dengan efek PixelTrail */}
          <div className="relative w-full rounded-lg overflow-hidden">

            {/* Iframe Timeline dengan atribut yang benar */}
            <div className="relative z-10">
              <iframe
                src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vSvDT6jkAFoyzk9VgRKxABAQYdibRNqlUfLdeIqkcCpYid2N6MHPptJYBkvBNBUap5ZTiNZijeJOFkc&font=Default&lang=id&initial_zoom=2&width=100%25&height=650'
                width="100%"
                height="650"
                // Vendor prefixes sebagai string
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                // React camelCase untuk atribut standar
                allowFullScreen
                frameBorder="0"
                // Atribut lainnya
                title="Experience Timeline"
                className="rounded-lg shadow-lg"
                loading="lazy" // Tambahkan lazy loading untuk performa
                referrerPolicy="no-referrer"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms" // Sesuaikan kebutuhan
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
