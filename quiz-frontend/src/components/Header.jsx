import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white">
      <nav className="p-4 flex items-center justify-between">
        <div className="font-bold text-xl md:text-2xl text-blue-400">
          Quiz For Programmers
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className={`p-2 rounded hover:bg-blue-800 ${
              activeLink === 'Home' ? 'bg-blue-500' : ''
            }`}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </a>
          <a
            href="#"
            className={`p-2 rounded hover:bg-blue-800 ${
              activeLink === 'About Us' ? 'bg-blue-500' : ''
            }`}
            onClick={() => handleLinkClick('About Us')}
          >
            About Us
          </a>
          <a
            href="#"
            className={`p-2 rounded hover:bg-blue-800 ${
              activeLink === 'Contact' ? 'bg-blue-500' : ''
            }`}
            onClick={() => handleLinkClick('Contact')}
          >
            Contact
          </a>
          <a
            href="#"
            className={`p-2 rounded hover:bg-blue-800 ${
              activeLink === 'Login' ? 'bg-blue-500' : ''
            }`}
            onClick={() => handleLinkClick('Login')}
          >
            Login
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-black p-4">
          <div className="flex flex-col space-y-2">
            <a
              href="#"
              className={`p-2 rounded hover:bg-blue-800 ${
                activeLink === 'Home' ? 'bg-blue-500' : ''
              }`}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </a>
            <a
              href="#"
              className={`p-2 rounded hover:bg-blue-800 ${
                activeLink === 'About Us' ? 'bg-blue-500' : ''
              }`}
              onClick={() => handleLinkClick('About Us')}
            >
              About Us
            </a>
            <a
              href="#"
              className={`p-2 rounded hover:bg-blue-800 ${
                activeLink === 'Contact' ? 'bg-blue-500' : ''
              }`}
              onClick={() => handleLinkClick('Contact')}
            >
              Contact
            </a>
            <a
              href="#"
              className={`p-2 rounded hover:bg-blue-800 ${
                activeLink === 'Login' ? 'bg-blue-500' : ''
              }`}
              onClick={() => handleLinkClick('Login')}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;