import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';

export default function Home() {
  const slides = [
    {
      id: 1,
      image: '/img/slider1.png',
      title: 'Modern Art Masterpiece',
      author: 'By Alanoid',
    },
    {
      id: 2,
      image: '/img/slider2.png',
      title: 'Exploring Boundless Creativity',
      author: 'By Jane Doe',
    },
    {
      id: 3,
      image: '/img/slider3.png',
      title: 'Contemporary Urban Wonders',
      author: 'By John Smith',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk pindah ke slide sebelumnya
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Fungsi untuk pindah ke slide berikutnya
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto slide menggunakan setInterval
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Pindah setiap 3 detik

    // Bersihkan interval saat komponen unmount
    return () => clearInterval(interval);
  }, []); // Hanya berjalan sekali saat komponen pertama kali di-mount

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Head>
        <title>Art Gallery</title>
        <meta name="description" content="Art Gallery Exhibition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Slider Section */}
      <section className="w-full h-full relative">
        {/* Header Positioned Above the Slider */}
        <div className="absolute top-0 left-0 w-full z-20 bg-transparent  text-white font-bold">
          <Header className="text-white"/>
        </div>

        {/* Slide Gambar */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30 p-8 md:p-16 text-white">
              <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
              <p className="text-lg md:text-2xl mt-2">{slide.author}</p>
            </div>
          </div>
        ))}

        {/* Navigasi Tombol */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 font-bold text-black p-3 transition"
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 font-bold text-black p-3 transition"
          aria-label="Next Slide"
        >
          &#10095;
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}
