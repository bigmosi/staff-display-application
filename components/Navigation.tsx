"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative">
      <button
        className="lg:hidden block text-gray-500 hover:text-gray-700 p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className={`h-6 w-6 ${menuOpen ? 'hidden' : 'block'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } lg:flex lg:space-x-4 absolute top-0 left-0 bg-white z-10 p-4 w-full lg:w-auto`}
      >
        <li>
          <Link href="/" onClick={closeMenu}>
            View Hierarchy
          </Link>
        </li>
        <li>
          <Link href="/add-staff" onClick={closeMenu}>
            Add Staff
          </Link>
        </li>
        <li>
          <Link href="/update-staff" onClick={closeMenu}>
            Update Staff
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
