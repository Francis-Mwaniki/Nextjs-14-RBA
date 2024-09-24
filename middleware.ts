import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose'

export async function middleware(request: NextRequest) {
  console.log('Middleware called for path:', request.nextUrl.pathname);
  
  const token = request.cookies.get('token')?.value
  console.log('Token found:', !!token);

  if (!token) {
    console.log('No token, redirecting to login');
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jose.jwtVerify(token, secret);
    console.log('Decoded token:', JSON.stringify(payload, null, 2));

    const requestedPath = request.nextUrl.pathname
    console.log('Requested path:', requestedPath);

    // Define role-based access rules
    const roleAccess = {
      '/admin': ['ADMIN'],
      '/dashboard': ['ADMIN'],
      '/technician': ['ADMIN', 'TECHNICIAN'],
      '/driver': ['ADMIN', 'DRIVER'],
      '/customer': ['ADMIN', 'CUSTOMER'],
    }

    // Check if the user has access to the requested path
    const allowedRoles = roleAccess[requestedPath as keyof typeof roleAccess]
    console.log('Allowed roles for this path:', allowedRoles);
    console.log('User role:', payload.role);

    if (allowedRoles && !allowedRoles.includes(payload.role as string)) {
      console.log('Unauthorized access attempt');
      return NextResponse.redirect(new URL('/unauthorized', request.url))
    }

    console.log('Access granted');
    return NextResponse.next()
  } catch (error) {
    console.error('Token verification failed:', error);
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/technician/:path*', '/driver/:path*', '/customer/:path*'],
}