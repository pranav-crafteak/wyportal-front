"use client";

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-lg font-bold text-gray-800">
            My App
          </Link>
        </div>
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/create-profile" className="nav-link">
            Create Profile
          </Link>
          <Link href="/payments" className="nav-link">
            Payments
          </Link>
        </nav>
        <p className="text-gray-500 text-sm">
          &copy; 2023 My App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;