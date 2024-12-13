import React from 'react'
import Head from 'next/head'
export default function Catalog() {
  const catalogItems = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      artist: 'Cilacap',
      year: 2024,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 2,
      title: 'Artistic Composition',
      artist: 'Jane Doe',
      year: 2023,
      description: 'A stunning piece that explores the boundaries of modern art.'
    },
    {
      id: 3,
      title: 'Urban Landscape',
      artist: 'John Smith',
      year: 2022,
      description: 'A powerful representation of contemporary urban life.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Catalog | Walter Gropus Art Gallery</title>
        <meta name="description" content="Art Gallery Catalog" />
      </Head>


      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Catalog</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {catalogItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img 
                src={`/api/placeholder/400/300`} 
                alt={item.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {item.year} | {item.artist}
                </p>
                <p className="text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  )
}