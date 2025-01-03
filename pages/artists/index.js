import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Artists() {
  const [searchTerm, setSearchTerm] = useState('');

  const artists = [
    {
      id: 1,
      name: 'Alan Nur',
      country: 'Indonesian',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      exhibitions: ['THE ART OF ASS IN THE SKY']
    },
    {
      id: 2,
      name: 'Jane Doe',
      country: 'American',
      description: 'An innovative artist exploring modern themes.',
      exhibitions: ['Modern Art Showcase']
    },
    {
      id: 3,
      name: 'John Smith',
      country: 'British',
      description: 'Pushing the boundaries of contemporary art.',
      exhibitions: ['Emerging Talents']
    },
    {
      id: 4,
      name: 'Emily Clark',
      country: 'British',
      description: 'An abstract artist specializing in vibrant art.',
      exhibitions: ['Abstract Horizons']
    },
  ];

  // Filter artist berdasarkan search term
  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Artists</title>
        <meta name="description" content="Featured Artists" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Artists</h1>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search artists..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Grid Artists */}
        <div className="grid md:grid-cols-4 gap-8">
          {filteredArtists.map((artist) => (
            <Link key={artist.id} href={`/artists/${artist.id}`}>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition p-6 text-center cursor-pointer">
                <img
                  src="/img/400px.png"
                  alt={artist.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-2xl font-semibold mb-2">{artist.name}</h2>
                <p className="text-gray-600 mb-0">{artist.country} </p>
                <div className="mt-4">
                {artist.exhibitions.map((exhibition) => (
                  <span 
                    key={exhibition} 
                    className="inline-block bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {exhibition}
                  </span>
                ))}
              </div>
              </div>
            </Link>
          ))}
          {filteredArtists.length === 0 && (
            <p className="text-gray-500 col-span-4 text-center">No artists found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
