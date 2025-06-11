import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact-us' },
  ];

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <header className={`w-full z-50 ${isSticky ? 'fixed top-0 z-50 shadow-md' : 'absolute top-0'}`}>
      <div className="bg-white text-secondary py-4 px-4 hidden md:block">
        <div className="responsive-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-2 md:mb-0">
              <a href="mailto:info@graceaboundsrecovery.com" className="hover:text-primary transition ease-in-out duration-300">
                info@graceaboundsrecovery.com
              </a>
            </div>
            <div className="text-sm mb-2 md:mb-0">
              114 Route 34, Matawan, NJ 07747
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm hidden sm:inline">Connect with Us:</span>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/GraceAboundsNJ" target='_blank' aria-label="Facebook" className="hover:text-primary transition ease-in-out duration-300">
                  <FaFacebook size={18} />
                </a>
                <a href="https://x.com/GraceAboundsNJ" target='_blank' aria-label="Twitter" className="hover:text-primary transition ease-in-out duration-300">
                  <FaTwitter size={18} />
                </a>
                <a href="https://www.instagram.com/graceaboundsrecovery/" target='_blank' aria-label="Instagram" className="hover:text-primary transition ease-in-out duration-300">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-white transition-all duration-300 ${isSticky ? 'py-2' : 'py-4'}`}>
        <div className="responsive-container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                <Image
                  src="/logos/logo.png"
                  alt="Grace Abounds Recovery Logo"
                  width={150}
                  height={50}
                  className="h-20 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-secondary-700 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4">
            <div className="responsive-container">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-white bg-primary rounded'
                        : 'text-secondary hover:text-primary hover:bg-primary rounded'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;