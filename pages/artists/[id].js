import { useRouter } from 'next/router';
import Head from 'next/head';

const artists = [
  {
    id: 1,
    name: 'Alan Nur',
    nationality: 'Indonesian',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    exhibitions: ['THE ART OF ASS IN THE SKY'],
  },
  {
    id: 2,
    name: 'Jane Doe',
    nationality: 'American',
    description: 'An innovative artist exploring modern themes.',
    exhibitions: ['Modern Art Showcase'],
  },
  {
    id: 3,
    name: 'John Smith',
    nationality: 'British',
    description: 'Pushing the boundaries of contemporary art.',
    exhibitions: ['Emerging Talents'],
  },
  {
    id: 4,
    name: 'Emily Clark',
    nationality: 'British',
    description: 'An abstract artist specializing in vibrant art.',
    exhibitions: ['Abstract Horizons'],
  },
];

export default function ArtistDetail() {
  const router = useRouter();
  const { id } = router.query;

  const artist = artists.find((a) => a.id === parseInt(id));

  if (!artist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Artist not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{artist.name} - Artist Detail</title>
        <meta name="description" content={`Details about ${artist.name}`} />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <img
              src="/img/400px.png"
              alt={artist.name}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{artist.name}</h1>
            <p className="text-gray-600 mb-2">
              <strong>Nationality:</strong> {artist.nationality}
            </p>
            <p className="text-gray-600 mb-4">{artist.description}</p>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Exhibitions</h3>
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
        </div>
      </main>
    </div>
  );
}
