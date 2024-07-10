import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define protected routes
  const protectedRoutes = ['/create-profile', '/billing']

  // Check if the path is a protected route
  if (protectedRoutes.includes(path)) {
    // Check for authentication (this is a placeholder, replace with actual auth check)
    const isAuthenticated = request.cookies.get('auth_token')
    
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/create-profile', '/billing'],
}