// src/components/Header.js
import Link from 'next/link';

export default function Header() {
  const menuItems = [
    // { href: '/', label: 'Home' },
    { href: '/exhibitions/', label: 'Exhibitions' },
    { href: '/catalog', label: 'Catalog' },
    { href: '/artists', label: 'Artists' },
  ];

  return (
    <header className="">
     
      <div className="container mx-auto px-0 py-0 flex justify-center items-center">
    <Link href="/" className="text-2xl font-bold text-gray-800">
          Art Gallery
        </Link>
      </div>
      <div className="container mx-auto px-4 py-3 flex justify-center items-center">
        {/* <Link href="/" className="text-2xl font-bold text-gray-800">
          Art Gallery
        </Link> */}
        <nav className="space-x-4">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}