import { useState } from 'react';
import Head from 'next/head';
import Tabs from '@/components/Tabs';
import Link from 'next/link';

export default function Exhibitions() {
  const exhibitions = [
    {
      id: 1,
      title: 'THE ART OF ASS IN THE SKY',
      location: 'Alanoid',
      startDate: "2024-10-12",
      endDate: "2024-11-14",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image : "/img/400px.png"
    },
    {
      id: 2,
      title: 'Another Exciting Exhibition',
      location: 'Jane Doe',
      startDate: "2024-12-12",
      endDate: "2025-01-14",
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image : "/img/400px.png"
    },
    {
      id: 3,
      title: 'Modern Art Showcase',
      location: 'John Smith',
      startDate: "2025-01-12",
      endDate: "2025-02-14",
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image : "/img/400px.png"
    },
    {
      id: 4,
      title: 'Modern Art Showcase',
      location: 'John Smith',
      startDate: "2024-12-12",
      endDate: "2025-01-14",
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image : "/img/400px.png"
    },
    {
      id: 5,
      title: 'Modern Art Showcase',
      location: 'John Smith',
      startDate: "2024-12-12",
      endDate: "2025-01-14",
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image : "/img/400px.png"
    },
    {
      id: 6,
      title: 'Modern Art Showcase',
      location: 'John Smith',
      startDate: "2024-12-12",
      endDate: "2025-01-14",
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image : "/img/400px.png"
    }
  ];

  const [filter, setFilter] = useState('All');

  const currentDate = new Date();

  // Filter exhibitions berdasarkan kategori
  const filteredExhibitions = exhibitions.filter((exhibition) => {
    switch (filter) {
      case 'Upcoming':
        return new Date(exhibition.startDate) > currentDate;
      case 'Ongoing':
        return (
          new Date(exhibition.startDate) <= currentDate &&
          new Date(exhibition.endDate) >= currentDate
        );
      case 'Recent':
        return new Date(exhibition.endDate) < currentDate;
      default:
        return true; // All
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Exhibitions</title>
        <meta name="description" content="Current and Upcoming Exhibitions" />
      </Head>
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
        <div className="flex items-center gap-3">
        <h1 className="text-4xl font-bold mb-8 text-left">Exhibitions</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2"> <Tabs setFilter={setFilter} />
        </div>
        </div>
          <div className="grid md:grid-cols-4 gap-8">
            {filteredExhibitions.map((exhibition) => (
              <Link key={exhibition.id} href={`/exhibitions/${exhibition.id}`} passHref>
                <div className="rounded-lg overflow-hidden transition cursor-pointer">
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-2">
                    <h2 className="text-xl font-semibold mb-2">{exhibition.title}</h2>
                    <p className="text-gray-600 mb-0">
                      {exhibition.startDate} - {exhibition.endDate}
                    </p>
                    <p className="text-gray-600 mb-0">{exhibition.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </main>
    </div>
  );
}