import Link from 'next/link';
import 'globals.css';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-army fixed w-full top-0 z-50 ${isMenuOpen ? 'h-20' : 'h-20'}`}>
      <div className="container mx-auto flex justify-between items-center p-4 md:p-8">
        <Link href="/" className="transform transition-transform duration-300 ease-in-out hover:scale-110">
          <Image src="/images/logo.jpg" alt='' width={40} height={40} />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={24} color="white"/>
            ) : (
              <FaBars size={24} color="white" />
            )}
          </button>
        </div>
        {isMenuOpen ? (
          <ul className="md:hidden absolute top-0 right-0 left-0 bg-army">
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <FaTimes size={24} color="white" />
            </button>
            <li className='mt-10 text-center border-t mt-20'>
              <Link href="/" className="text-ghostwhite text-lg hover:text-gray-300 p-3" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className='mt-10 text-center border-t'>
              <Link href="/add" className="text-ghostwhite text-lg hover:text-gray-300 p-3" onClick={toggleMenu}>
                Add Staff
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="hidden md:flex space-x-8 items-center md:space-x-12">
            <li>
              <Link href="/" className="text-ghostwhite text-lg hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/add" className="text-ghostwhite text-lg hover:text-gray-300">
              Add Staff
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
