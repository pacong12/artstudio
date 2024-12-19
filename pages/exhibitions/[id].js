import { useRouter } from 'next/router';

import Head from 'next/head'
const ExhibitionDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Data bisa di-fetch dari server atau array lokal menggunakan id
  const exhibitions = [
    {
        id: 1,
        title: 'THE ART OF ASS IN THE SKY',
        location: 'Alanoid',
        startDate: "2024-10-12",
        endDate: "2024-11-14",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 2,
        title: 'Another Exciting Exhibition',
        location: 'Jane Doe',
        startDate: "2024-12-12",
        endDate: "2025-01-14",
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        id: 3,
        title: 'Modern Art Showcase',
        location: 'John Smith',
        startDate: "2025-01-12",
        endDate: "2025-02-14",
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
      },
      {
        id: 4,
        title: 'Modern Art Showcase',
        location: 'John Smith',
        startDate: "2024-12-12",
        endDate: "2025-01-14",
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
      },
      {
        id: 5,
        title: 'Modern Art Showcase',
        location: 'John Smith',
        startDate: "2024-12-12",
        endDate: "2025-01-14",
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
      },
      {
        id: 6,
        title: 'Modern Art Showcase',
        location: 'John Smith',
        startDate: "2024-12-12",
        endDate: "2025-01-14",
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
      }
  ];

  const exhibition = exhibitions.find((item) => item.id === parseInt(id));

  if (!exhibition) return <div>Exhibition not found</div>;

  return (
    <div className="min-h-screen bg-white">
    <Head>
      <title>{exhibition.title} - Catalog Detail</title>
      <meta name="description" content={`Detail of ${exhibition.title}`} />
    </Head>

    <main className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Gambar */}
        <div className="flex-1">
          <img
            src="/img/400px.png"
            alt={exhibition.title}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Detail */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{exhibition.title}</h1>
          <p className="text-gray-600 mb-2">
            <strong>Location:</strong> {exhibition.location}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Start Date:</strong> {exhibition.startDate}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>End Date:</strong> {exhibition.endDate}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Description:</strong>
          </p>
          <p className="text-gray-500">{exhibition.description}</p>
        </div>
      </div>
    </main>
  </div>
  );
};

export default ExhibitionDetail;
