"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from '@/lib/api';

interface SidebarProps {
  onClose: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose, isOpen }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      router.push('/');
      onClose();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleLinkClick = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div
      className={`sidebar-overlay ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        ref={sidebarRef}
        className={`sidebar ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
            <button
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={onClose}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-grow overflow-y-auto">
            <ul className="py-4">
              <SidebarLink href="/" text="Home" pathname={pathname} onClick={handleLinkClick} />
              <SidebarLink href="/about" text="About" pathname={pathname} onClick={handleLinkClick} />
              {isLoggedIn ? (
                <>
                  <SidebarLink href="/profile" text="Profile" pathname={pathname} onClick={handleLinkClick} />
                  <SidebarLink href="/dashboard" text="Dashboard" pathname={pathname} onClick={handleLinkClick} />
                  <SidebarLink href="/billing" text="Billing" pathname={pathname} onClick={handleLinkClick} />
                  <li className="px-6 py-3">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left text-red-600 hover:text-red-800 font-medium focus:outline-none"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="px-6 py-3">
                  <button
                    onClick={() => handleLinkClick('/login')}
                    className="btn btn-primary w-full text-center"
                  >
                    Login/Signup
                  </button>
                </li>
              )}
            </ul>
          </nav>
          <div className="p-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">© 2024 Wynoot. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  href: string;
  text: string;
  pathname: string;
  onClick: (href: string) => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, text, pathname, onClick }) => (
  <li>
    <button
      onClick={() => onClick(href)}
      className={`sidebar-link w-full text-left ${pathname === href ? 'sidebar-link-active' : ''}`}
    >
      {text}
    </button>
  </li>
);

export default Sidebar;