import React from 'react'
import Head from 'next/head'

export default function Exhibitions() {
  const exhibitions = [
    {
      id: 1,
      title: 'THE ART OF ASS IN THE SKY',
      artist: 'Alanoid',
      year: 2024,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      title: 'Another Exciting Exhibition',
      artist: 'Jane Doe',
      year: 2024,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      title: 'Modern Art Showcase',
      artist: 'John Smith',
      year: 2024,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    },
    {
      id: 4,
      title: 'Modern Art Showcase',
      artist: 'John Smith',
      year: 2024,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    },
    {
      id: 5,
      title: 'Modern Art Showcase',
      artist: 'John Smith',
      year: 2024,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    },
    {
      id: 6,
      title: 'Modern Art Showcase',
      artist: 'John Smith',
      year: 2024,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    }
  
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Exhibitions</title>
        <meta name="description" content="Current and Upcoming Exhibitions" />
      </Head>


      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-left">Exhibitions</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {exhibitions.map((exhibition) => (
            <div 
              key={exhibition.id} 
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img 
                src={`/api/placeholder/400/300`} 
                alt={exhibition.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {exhibition.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {exhibition.year} By {exhibition.artist}
                </p>
                <p className="text-gray-500">
                  {exhibition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  )
}