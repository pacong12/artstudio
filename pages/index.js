import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div className=" bg-white">
      <Head>
        <title>Art Gallery</title>
        <meta name="description" content="Art Gallery Exhibition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            THE ART OF ASS IN THE SKY
          </h1>
          <p className="text-xl mb-8">2024 Exhibition by Alanoid</p>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
            Explore Exhibition
          </button>
        </section>

      
      </main>

    </div>
  )
}