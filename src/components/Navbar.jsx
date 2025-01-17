import React from 'react';
import { Link } from 'react-scroll'; // Import from react-scroll

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-60 shadow-lg fixed top-0 left-0 w-full z-50 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">
          <Link to="home" smooth={true} duration={500}>
            Abhinab's Portfolio
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-10">
          <Link to="about" smooth={true} duration={500} className="text-white hover:text-yellow-500">About</Link>
          <Link to="projects" smooth={true} duration={500} className="text-white hover:text-yellow-500">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-yellow-500">Contact</Link>
        </div>

        {/* Mobile Navbar Toggle */}
        <div className="md:hidden text-white cursor-pointer">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
