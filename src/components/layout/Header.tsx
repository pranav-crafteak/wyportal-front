import React from 'react'
import Link from 'next/link'
import { useUser } from '@/context/UserContext'

const Header: React.FC = () => {
  const { user } = useUser()

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          My App
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/create-profile">Create Profile</Link></li>
            <li><Link href="/payments">Payments</Link></li>
            {user ? (
              <li>Welcome, {user.name}</li>
            ) : (
              <li><Link href="/login">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header