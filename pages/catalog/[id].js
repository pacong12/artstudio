import { useRouter } from 'next/router';
import Head from 'next/head';

const catalogItems = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    artist: 'Cilacap',
    year: 2024,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    title: 'Artistic Composition',
    artist: 'Jane Doe',
    year: 2023,
    description: 'A stunning piece that explores the boundaries of modern art.',
  },
  {
    id: 3,
    title: 'Urban Landscape',
    artist: 'John Smith',
    year: 2022,
    description: 'A powerful representation of contemporary urban life.',
  },
  {
    id: 4,
    title: 'Modern Abstract',
    artist: 'Emily Clark',
    year: 2021,
    description: 'An abstract composition full of colors and depth.',
  },
  {
    id: 5,
    title: 'Nature Harmony',
    artist: 'Michael Lee',
    year: 2023,
    description: 'A serene representation of nature and life.',
  },
  {
    id: 6,
    title: 'Portrait of Time',
    artist: 'Anna Brown',
    year: 2020,
    description: 'A thoughtful piece reflecting on the concept of time.',
  },
];

export default function CatalogDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Cari item katalog berdasarkan ID
  const item = catalogItems.find((item) => item.id === parseInt(id));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Item not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{item.title} - Catalog Detail</title>
        <meta name="description" content={`Detail of ${item.title}`} />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Gambar */}
          <div className="flex-1">
            <img
              src="/img/400px.png"
              alt={item.title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Detail */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
            <p className="text-gray-600 mb-2">
              <strong>Artist:</strong> {item.artist}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Year:</strong> {item.year}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Description:</strong>
            </p>
            <p className="text-gray-500">{item.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
