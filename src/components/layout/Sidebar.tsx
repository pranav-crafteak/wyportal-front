"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-full h-full shadow-lg">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <span className="font-bold">X</span>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className={`block py-2 px-4 rounded-md transition ${
                  pathname === '/' ? 'bg-gray-100' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 px-4 rounded-md transition ${
                  pathname === '/about' ? 'bg-gray-100' : ''
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/choose-template"
                className={`block py-2 px-4 rounded-md transition ${
                  pathname === '/choose-template' ? 'bg-gray-100' : ''
                }`}
              >
                Choose Template
              </Link>
            </li>
            <li>
              <Link
                href="/create-profile"
                className={`block py-2 px-4 rounded-md transition ${
                  pathname === '/create-profile' ? 'bg-gray-100' : ''
                }`}
              >
                Create Profile
              </Link>
            </li>
            <li>
              <Link
                href="/payments"
                className={`block py-2 px-4 rounded-md transition ${
                  pathname === '/payments' ? 'bg-gray-100' : ''
                }`}
              >
                Payments
              </Link>
            </li>
            <li>
              <Link
                href="/select-app"
                className={`block py-2 px-4 rounded-md transition ${
                  pathname === '/select-app' ? 'bg-gray-100' : ''
                }`}
              >
                Select App
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className={`block py-2 px-4 rounded-md transition ${
                  pathname === '/dashboard' ? 'bg-gray-100' : ''
                }`}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
