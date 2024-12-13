import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

export default function ArtistDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Data mockup untuk contoh
  const artistData = {
    1: { name: 'Vincent van Gogh', bio: 'A Dutch post-impressionist painter.' },
    2: { name: 'Pablo Picasso', bio: 'A Spanish painter, sculptor, and one of the most influential artists of the 20th century.' },
    3: { name: 'Leonardo da Vinci', bio: 'An Italian polymath of the High Renaissance.' },
  };

  const artist = artistData[id];

  if (!artist) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <h1>{artist.name}</h1>
      <p>{artist.bio}</p>
      <button onClick={() => router.push('/artist')}>Back to Artist List</button>
    </>
  );
}
