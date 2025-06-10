import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#014a58] text-white">
      <div className="responsive-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="text-2xl font-bold">
              <Link href="/" className="text-white hover:text-primary transition">
                <Image
                  src="/logos/logowhite.jpg"
                  alt="Grace Abounds Recovery Logo"
                  width={150}
                  height={50}
                  className="h-auto w-auto"
                />
              </Link>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about-us" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-primary transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-semibold min-w-[80px]">Phone:</span>
                <a href="tel:732-696-8162" className="hover:text-primary transition">732-696-8162</a>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-[80px]">E-mail:</span>
                <a href="mailto:info@graceaboundsrecovery.com" className="hover:text-primary transition">info@graceaboundsrecovery.com</a>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-[80px]">Address:</span>
                <span>114 Route 34, Matawan, NJ 07747</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white py-4">
        <div className="responsive-container text-center">
          <p className='text-primary'>© {new Date().getFullYear()} Grace Abounds Recovery. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;