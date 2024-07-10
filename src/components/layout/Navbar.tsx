"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import UserMenu from '@/components/auth/UserMenu';
import Sidebar from './Sidebar';
import { signOut } from '@/lib/api'; // Import the signOut function

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, [pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(); // Call the signOut function from api.ts
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-bold text-gray-800">
            Wynoot
          </Link>
          <button
            className="md:hidden text-gray-500 hover:text-gray-800"
            onClick={toggleSidebar}
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
            {isLoggedIn ? (
              <UserMenu onLogout={handleLogout} />
            ) : (
              <Link
                href="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login/Signup
              </Link>
            )}
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;