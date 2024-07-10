"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-gray-800">
          My App
        </Link>
        <button
          className="md:hidden text-gray-500 hover:text-gray-800"
          onClick={onToggleSidebar}
        >
          <span className="font-bold">Menu</span>
        </button>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link
            href="/about"
            className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link
            href="/choose-template"
            className={`nav-link ${pathname === '/choose-template' ? 'active' : ''}`}
          >
            Choose Template
          </Link>
          <Link
            href="/create-profile"
            className={`nav-link ${pathname === '/create-profile' ? 'active' : ''}`}
          >
            Create Profile
          </Link>
          <Link
            href="/payments"
            className={`nav-link ${pathname === '/payments' ? 'active' : ''}`}
          >
            Payments
          </Link>
          <Link
            href="/select-app"
            className={`nav-link ${pathname === '/select-app' ? 'active' : ''}`}
          >
            Select App
          </Link>
          <Link
            href="/dashboard"
            className={`nav-link ${pathname === '/dashboard' ? 'active' : ''}`}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
