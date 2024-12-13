import React from 'react'
import Head from 'next/head'

export default function Artists() {
  const artists = [
    {
      id: 1,
      name: 'Cilacap',
      nationality: 'Indonesian',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      exhibitions: ['THE ART OF ASS IN THE SKY']
    },
    {
      id: 2,
      name: 'Jane Doe',
      nationality: 'American',
      description: 'An innovative artist exploring modern themes.',
      exhibitions: ['Modern Art Showcase']
    },
    {
      id: 3,
      name: 'John Smith',
      nationality: 'British',
      description: 'Pushing the boundaries of contemporary art.',
      exhibitions: ['Emerging Talents']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Artists | Walter Gropus Art Gallery</title>
        <meta name="description" content="Featured Artists" />
      </Head>


      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Artists</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div 
              key={artist.id} 
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition p-6 text-center"
            >
              <img 
                src={`/api/placeholder/200/200`} 
                alt={artist.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-2xl font-semibold mb-2">
                {artist.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {artist.nationality}
              </p>
              <p className="text-gray-500 mb-4">
                {artist.description}
              </p>
              <div className="mt-4">
                <h3 className="font-bold mb-2">Exhibitions</h3>
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
          ))}
        </div>
      </main>

    </div>
  )
}