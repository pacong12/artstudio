// components/Breadcrumb.js
import { useRouter } from 'next/router';
import Link from 'next/link';

const Breadcrumb = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment);

  // Cek apakah halaman saat ini adalah Home
  if (router.pathname === '/') {
    return null; // Tidak tampilkan breadcrumb di halaman Home
  }

  return (
    <nav class = "px-8 py-0">
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathSegments.length > 0 && <span style={{ margin: '0 8px' }}>/</span>}
        {pathSegments.map((segment, index) => {
          const path = '/' + pathSegments.slice(0, index + 1).join('/');
          return (
            <li key={path} style={{ display: 'flex' }}>
              <Link href={path}>
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
