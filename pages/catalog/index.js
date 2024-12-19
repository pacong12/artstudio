import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
    },
    {
      id: 4,
      title: 'Modern Abstract',
      artist: 'Emily Clark',
      year: 2021,
      description: 'An abstract composition full of colors and depth.'
    },
    {
      id: 5,
      title: 'Nature Harmony',
      artist: 'Michael Lee',
      year: 2023,
      description: 'A serene representation of nature and life.'
    },
    {
      id: 6,
      title: 'Portrait of Time',
      artist: 'Anna Brown',
      year: 2020,
      description: 'A thoughtful piece reflecting on the concept of time.'
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter katalog berdasarkan input pencarian
  const filteredCatalog = catalogItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.year.toString().includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Catalog</title>
        <meta name="description" content="Art Gallery Catalog" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold mb-8 text-left">Catalog</h1>
          </div>
          {/* Search Input */}
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              placeholder="Search by title, artist, or year..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Catalog Items */}
        <div className="grid md:grid-cols-4 gap-8">
          
                
        {filteredCatalog.length > 0 ? (
        filteredCatalog.map((item) => (
          <Link key={item.id} href={`/catalog/${item.id}`}>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
              <img
                src="/img/400px.png"
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">
                  {item.year} | {item.artist}
                </p>
              </div>
            </div>
          </Link>
        ))
        ) : (
        <p className="text-gray-500 col-span-4 text-center">
          No items match your search.
        </p>
        )}
        </div>
      </main>
    </div>
  );
}
